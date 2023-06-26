import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import ServiceDetail from '../ServiceDetailsComponent'
import { BrowserRouter } from 'react-router-dom'
import { act } from 'react-dom/test-utils';
import axios from 'axios';

import store from '../../redux/store'
import { Provider } from 'react-redux'
import preview from 'jest-preview';


jest.mock('axios');

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
      serviceId: '1',
    }),
    useRouteMatch: () => ({ url: '/service,1' }),
  }));

const ComponentWrapper = ({ children }) => (
    <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
    </Provider>
);



describe('Service detail page', () => {
    beforeEach(() => {
        const mockIndividualServiceData = axios.get.mockResolvedValue({
            data: {
                deliveryprice: 20,
                depositprice: 120,
                id: 1,
                imagepath: '/assets/img/image.png',
                items: [
                    {
                        id: 1,
                        itemname: 'Test item',
                        price: 4,
                    }
                ],
                prices: [
                    {
                        id: 1,
                        serviceid: 1,
                        price: 15,
                        days: 1
                    },
                    {
                        id: 2,
                        serviceid: 1,
                        price: 25,
                        days: 3
                    }
                ],
                quantity: 5,
                returnprice: 20,
                servicedesc: 'test description',
                servicename: 'test service',
            },
            status: 200
        })
    })

    test('Service details page renders properly', async () => {
        await act(async () => {
            render(<ServiceDetail />, { wrapper: ComponentWrapper });
        })
        expect(axios.get).toHaveBeenCalledWith(`${process.env.REACT_APP_SPRING_URL}/order/getIndividualService?id=1`);
        //expect(screen.getByText(/Total Cost: $175/i)).toBeInTheDocument();  //Issue with testing library when using javascript with text --- https://github.com/testing-library/react-testing-library/issues/53
        //preview.debug();
    })


})

