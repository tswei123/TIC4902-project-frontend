import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import Cart from '../CartComponents/CartComponent'
import { BrowserRouter } from 'react-router-dom'
import { act } from 'react-dom/test-utils';
import axios from 'axios';

import store from '../../redux/store'
import { Provider } from 'react-redux'
import { addCartItem } from '../../redux/reducers/cartSlice'
import { setProfile } from '../../redux/reducers/profileSlice'
import preview from 'jest-preview';

jest.mock('axios');

const ComponentWrapper = ({ children }) => (
    <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
    </Provider>
);



test('Cart is empty', async () => {
    await act(async () => {
        render(<Cart />, { wrapper: ComponentWrapper });
    })
    expect(screen.getByText(/You cart is empty/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/checkout-btn/i)).toHaveAttribute('disabled');
    //expect(screen.getByText(/Total Cost: $175/i)).toBeInTheDocument();  //Issue with testing library when using javascript with text --- https://github.com/testing-library/react-testing-library/issues/53
    preview.debug();
})

test('Cart has 1 item without profile info', async () => {
    store.dispatch(addCartItem({
        id: 1,
        servicename: 'test service name',
        servicedesc: 'test service desc',
        deliveryprice: 20,
        returnprice: 20,
        depositprice: 120,
        totalprice: 175,
        email: 'user123@u.nus.edu',
        rentfrom: '2023-6-17',
        rentto: '2023-6-18',
        orderstatus: 'pending shipment',
        cart_prices: [
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
        cart_items: []
      }))
      await act(async () => {
        render(<Cart />, { wrapper: ComponentWrapper });
    })
    expect(screen.getByLabelText(/1/i)).toBeInTheDocument();
    expect(screen.getByText(/Shipping address required/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/checkout-btn/i)).toHaveAttribute('disabled');
})

test('Cart has 1 item with valid profile info', async () => {
    store.dispatch(addCartItem({
        id: 2,
        servicename: 'test service name',
        servicedesc: 'test service desc',
        deliveryprice: 20,
        returnprice: 20,
        depositprice: 120,
        totalprice: 175,
        email: 'user123@u.nus.edu',
        rentfrom: '2023-6-17',
        rentto: '2023-6-18',
        orderstatus: 'pending shipment',
        cart_prices: [
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
        cart_items: []
      }))

      store.dispatch(setProfile({
        email: 'user123@u.nus.edu',
        username: 'user123',
        address: 'Random test address',
        contact: '12345678',
      }))
      await act(async () => {
        render(<Cart />, { wrapper: ComponentWrapper });
    })
    expect(screen.getByLabelText(/2/i)).toBeInTheDocument();
    expect(screen.queryByText(/Shipping address required/i)).toBeNull();
    expect(screen.getByTestId('checkout-link')).toBeInTheDocument();
    preview.debug();
})