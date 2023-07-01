import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import Service from '../ServiceComponents/ServiceComponent'
import { BrowserRouter } from 'react-router-dom'
import { act } from 'react-dom/test-utils';
import axios from 'axios';

import store from '../../redux/store'
import { Provider } from 'react-redux'
import { setLogin, setLogout } from '../../redux/reducers/authSlice.js'
import preview from 'jest-preview';

jest.mock('axios');

const ComponentWrapper = ({ children }) => (
    <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
    </Provider>
);

describe('Service page', () => {
    const user = userEvent.setup();
    
    beforeEach(() => {
        const mockServicesData = axios.get.mockResolvedValueOnce({
            data: [{
                deliveryprice: 20,
                depositprice: 120,
                id: 1,
                imagepath: '/assets/img/image.png',
                items: [
                    {
                        id: 1,
                        itemname: 'Test',
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
            }],
            status: 200
        })

    })
    it('Service page renders properly', async () => {
        await act(async () => {
            render(<Service />, { wrapper: ComponentWrapper });
        })
        expect(axios.get).toHaveBeenCalledWith(`${process.env.REACT_APP_SPRING_URL}/order/getService`)
        expect(screen.getByText(/test service/i)).toBeInTheDocument();
        expect(axios.get).toHaveBeenCalledTimes(1);
    })
})