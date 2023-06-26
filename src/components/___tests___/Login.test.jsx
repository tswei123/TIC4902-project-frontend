import { render, fireEvent, screen, cleanup, waitFor } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from "react-router-dom";
import store from '../../redux/store'
import { Provider } from 'react-redux'
import Login from '../AuthComponents/Login';
import '@testing-library/jest-dom/extend-expect'
import axios from 'axios';
import preview from 'jest-preview';

jest.mock('axios');
const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

const ComponentWrapper = ({ children }) => (
  <Provider store={store}>
    <BrowserRouter>{children}</BrowserRouter>
  </Provider>
);

const renderComponent = () => render(<Login />, { wrapper: ComponentWrapper });

const setup = () => {
  const { getByTestId, getByLabelText } = renderComponent();
  const loginElement = getByTestId('login');
  const emailInput = getByLabelText('email');
  const passwordInput = getByLabelText('password')
  const submitButton = getByLabelText('submit-form');
  return {
    loginElement,
    emailInput,
    passwordInput,
    submitButton,
  }
}

describe('Login page rendering', () => {
  test('login page form renders properly', async () => {
    const { loginElement } = setup();
    expect(loginElement).toBeInTheDocument();
  })

  test('testing login form', async () => {
    const { emailInput, passwordInput, submitButton } = setup();

    //Username and password inputs entered correctly
    fireEvent.change(emailInput, { target: { value: 'user123@u.nus.edu' } });
    expect(emailInput.value).toBe('user123@u.nus.edu');
    fireEvent.change(passwordInput, { target: { value: 'user123' } });
    expect(passwordInput.value).toBe('user123');

    fireEvent.change(emailInput, { target: { value: 'user123' } });

    //Invalid email prompts a message
    fireEvent.click(submitButton);
    expect(screen.getByText(/Invalid email address/i)).toBeInTheDocument();
  })
})

describe('Login to page with axios', () => {
  it('Does not login to account successfully', async () => {
    const { emailInput, passwordInput, submitButton } = setup();
    const mockData = axios.post.mockRejectedValueOnce({
      response: {
        status: 401
      }
    })
    const email = 'user123@u.nus.edu';
    const password = 'wrongpassword'
    fireEvent.change(emailInput, { target: { value: email } });
    fireEvent.change(passwordInput, { target: { value: password } });

    await act( async () => {
      fireEvent.click(submitButton);
    })
    expect(axios.post).toHaveBeenCalledWith(`${process.env.REACT_APP_SPRING_URL}/auth/signin`, { email: 'user123@u.nus.edu', password: 'wrongpassword' } );
    expect(screen.getByText(/Incorrect email or password. Please try again./i)).toBeInTheDocument();
  })

  it('Login to account successfully', async () => {
    const { emailInput, passwordInput, submitButton } = setup();
    const mockLogin = axios.post.mockResolvedValue({
      data: {
        email: 'user123@u.nus.edu',
        roles: ['ROLE_USER'],
        accessToken: 'test-token'
      },
      status: 200
    })
    const mockGetCart = axios.get.mockResolvedValueOnce({
      data: [],
      status: 200
    })
    const mockGetProfile = axios.get.mockResolvedValueOnce({
      data: [{
        email: 'user123@u.nus.edu',
        username: 'test user',
        address: 'test address',
        contact: '12345678'
      }],
      status: 200
    })

    const email = 'user123@u.nus.edu';
    const password = 'user123'
    fireEvent.change(emailInput, { target: { value: email } });
    fireEvent.change(passwordInput, { target: { value: password } });

    await act( async () => {
      fireEvent.click(submitButton);
    })

    //Axios api calls after successful login.
    expect(axios.post).toHaveBeenCalledWith(`${process.env.REACT_APP_SPRING_URL}/auth/signin`, { email: 'user123@u.nus.edu', password: 'user123' } );
    expect(axios.get).toHaveBeenCalledTimes(2);
    expect(axios.get).toHaveBeenCalledWith(`${process.env.REACT_APP_SPRING_URL}/order/getIndividualServiceCart?email=${email}`);
    expect(axios.get).toHaveBeenCalledWith(`${process.env.REACT_APP_SPRING_URL}/auth/getIndividualUser?email=${email}`);

    //Page navigates to / which is homepage after login.
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/');
    //preview.debug();
  })
})