import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import UserPage from '../UserComponent'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import axios from 'axios';

import store from '../../redux/store'
import { Provider } from 'react-redux'
import { setLogin } from '../../redux/reducers/authSlice.js'
import preview from 'jest-preview';

jest.mock('axios');

const ComponentWrapper = ({ children }) => (
  <Provider store={store}>
    <BrowserRouter>{children}</BrowserRouter>
  </Provider>
);

test('User page navigation test', async () => {
  render(<UserPage />, { wrapper: ComponentWrapper });
  const user = userEvent.setup();

  //renders the homepage 
  expect(screen.getByText(/Fantasy Offer!/i)).toBeInTheDocument();

  // verify page content for expected route after navigating
  await user.click(screen.getByLabelText('howitwork'));
  expect(screen.getByText(/Book a Rental Service/i)).toBeInTheDocument();

  await user.click(screen.getByLabelText('login'));
  expect(screen.getByTestId('login')).toBeInTheDocument();

  //User not logged in does not show logout
  expect(screen.queryByLabelText('logout')).toBeNull();

  //preview page with jest-preview debug
  //preview.debug();
})

test('Logged in user page test', async () => {
  store.dispatch(setLogin({
    email: 'user123@user.nus.edu',
    role: ['ROLE_USER'],
    accessToken: '//eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyMTIzQHUubnVzLmVkdSIsImlhdCI6MTY4NzAxNzkzOSwiZXhwIjoxNjg3MTA0MzM5fQ.B61kQrLJeN_a0RgGB7oXdY3xq3vXigkFwtw4K9HXc6fnzehH-6KnYpQmd4nOHO7tEkdx7YaJbLoKc7VN4QYhsA//',
  }))
  render(<UserPage />, { wrapper: ComponentWrapper });
  const user = userEvent.setup();

    // verify page content for expected route after navigating
    await user.click(screen.getByLabelText('howitwork'));
    expect(screen.getByText(/Book a Rental Service/i)).toBeInTheDocument();

    //User with empty cart
    await user.click(screen.getByLabelText('cart'));
    expect(screen.getByText(/You cart is empty/i)).toBeInTheDocument();
    expect(screen.getByText(/Proceed to checkout/i)).toHaveAttribute('disabled');


    expect(screen.queryByLabelText('logout')).toBeInTheDocument();
  
  //preview page with jest-preview debug
  //preview.debug();
})


test('Page does not exist test', () => {
  const badRoute = '/bad/route'

  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[badRoute]}>
        <UserPage />
      </MemoryRouter>
    </Provider>,
  )

  // verify navigation to "no match" route
  expect(screen.getByText(/404/i)).toBeInTheDocument()
})



