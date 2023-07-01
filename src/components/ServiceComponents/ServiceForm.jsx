import React, { useState, useEffect } from 'react';
import { Card, CardImg, CardBody, CardText,
    CardTitle, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import axios from 'axios';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { useSelector } from 'react-redux'
import { useremail, auth } from '../../redux/reducers/authSlice.js'

import useCart from '../CartComponents/CartContainer.jsx';

import LoginRequired from '../ModalComponents/LoginRequiredModal.jsx';
import ItemAddedConfirmation from '../ModalComponents/ItemAddedConfirmationModal.jsx';

const ServiceForm = ({servicedata, setServiceData}) => {
    const userEmail = useSelector(useremail);
    const userIsLoggedIn = useSelector(auth);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState((new Date()).addDays(1));
    const [cartItems, setCartItems] = useState([]);
    const [totalRentPrice, setTotalRentPrice] = useState(0);
    const [cartItemsPrice, setCartItemsPrice] = useState(0);
    const [cartPrices, setCartPrices] = useState([]);
    const [itemAdded, setItemAdded] = useState(false);
    const [displayLoginModal, setDisplayLoginModal] = useState(false);
    const [inStock, setInStock] = useState(true);
    const { addItem } = useCart();
    const ONE_DAY = 1000 * 60 * 60 * 24;


    useEffect(() => {
        addServiceItems(servicedata.items)
        if(servicedata.quantity <= 0) {
            setInStock(false);
        }
    },[]);

    useEffect(() => {
        if (servicedata){
            setTotalRentPrice(rentalPrice(Math.round((endDate - startDate) / ONE_DAY)));
        }
        else {
            console.log(servicedata)
        }
    },[servicedata]);

    const handleCheckbox = (event) => {
        const selectedCartItems = cartItems.map(item =>{
            if(item.id === parseInt(event.target.value)){
                if(!item.isSelected){
                    setCartItemsPrice(cartItemsPrice + item.price);
                }
                else {
                    setCartItemsPrice(cartItemsPrice - item.price);
                }
                return {
                    ...item, 
                    isSelected: !item.isSelected,
                };
            }
            else {
                return item;
            }
        });
        setCartItems(selectedCartItems);
    }
    const showLoginModal = () => {
        setDisplayLoginModal(true);
      };

    const hideLoginModal = () => {
        setDisplayLoginModal(false);
      };


    const handleSubmit = async(event) => {
        if(!userIsLoggedIn){
            showLoginModal();
        }
        else{
            event.preventDefault();
            const id = servicedata.id;
            const servicename = servicedata.servicename;
            const servicedesc = servicedata.servicedesc;
            const deliveryprice = servicedata.deliveryprice;
            const returnprice = servicedata.returnprice;
            const depositprice = servicedata.depositprice;
            const totalprice = totalRentPrice + cartItemsPrice + depositprice + deliveryprice + returnprice ;
            const email = userEmail;
            const rentfrom = noTimeDate(startDate);
            const rentto = noTimeDate(endDate);
            const orderstatus = "pending payment";
            const cart_prices = cartPrices;
            const cart_items = getCartItems();
            const addCart = {
                id,
                servicename,
                servicedesc,
                deliveryprice,
                returnprice,
                depositprice,
                totalprice,
                email,
                rentfrom,
                rentto,
                orderstatus,
                cart_prices,
                cart_items
            };
            try {
                let res = await axios.post(`${process.env.REACT_APP_SPRING_URL}/order/addToCart`, addCart)
                if (res.status === 200) {
                    addCart.ordernumber = res.data;
                    console.log(addCart);
                    addItem(addCart);
                    setItemAdded(true);
                    let newQuantity = servicedata.quantity - 1
                    if(newQuantity <= 0) {
                        setInStock(false);
                    }
                    setServiceData({
                        ...servicedata,
                        quantity: newQuantity
                    })
                }
            }
            catch (error) {
                console.log(error);
                alert(error);
            }
        }
    }



    const noTimeDate = (date) => {
        var dateOnly = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
        return dateOnly;
    }

    const handleChangeStartDate = (date) =>{
        setStartDate(date);
        setTotalRentPrice(rentalPrice(Math.round((endDate - date) / ONE_DAY)));
    }

    const handleChangeEndDate = (date) =>{
        setEndDate(date);
        setTotalRentPrice(rentalPrice(Math.round((date - startDate) / ONE_DAY)));
    }

    const rentalPrice = (duration) => {
        let rentPrice = 0;
        //let duration = Math.round((endDate - startDate) / ONE_DAY);
        let prices = [];
        const allprices = servicedata.prices?.sort((b, a) => a.days - b.days);
        for (let i = 0; i < Object.keys(allprices).length; i++) {
            if (duration >= allprices[i].days) {
                rentPrice = rentPrice + (allprices[i].price * Math.trunc(duration / allprices[i].days))
                duration = duration % allprices[i].days;
                prices.push(
                    {
                        serviceid: allprices[i].serviceid,
                        price: allprices[i].price,
                        days: allprices[i].days,
                    }
                )
            }
        }
        setCartPrices(prices);
        return rentPrice;
    }

    const addServiceItems = (items) => {
        let tempCart = [];
        for (let i = 0; i < Object.keys(items).length; i++){
            tempCart.push(
                {
                    id: items[i].id,
                    serviceid: items[i].serviceid,
                    itemname: items[i].itemname,
                    price: items[i].price,
                    isSelected: false,
                }
            )
        }
        setCartItems(
            tempCart
        );
    }

    const getCartItems = () => {
        let cart = [];
        for (let i = 0; i < Object.keys(cartItems).length; i++) {
            if (cartItems[i].isSelected) {
                cart.push(
                    {
                        serviceid: cartItems[i].serviceid,
                        itemname: cartItems[i].itemname,
                        price: cartItems[i].price,
                    }
                )
            }
        }
        return cart;
    }

    const RenderItems = () => {
        return (
            <div className="row">
                <h5>Additional Items</h5>
                <tbody className="">
                    {cartItems?.map((item) => {
                        return (
                            <div class="row mx-auto justify-content-center">
                                <div>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                className="col"
                                                checked={item.isSelected}
                                                value={item.id}
                                                onChange={handleCheckbox}
                                                aria-label={item.id}
                                            />
                                        }
                                        label={
                                            <div className="row">
                                                <div className="col-auto" aria-label={item.itemname}>
                                                    {item.itemname}
                                                </div>
                                                <div className="col-auto">
                                                    ${item.price}
                                                </div>
                                            </div>
                                        }
                                    />
                                </div>
                            </div>

                        );
                    })}
                </tbody>
            </div>
        )
    }
    const RenderForm = () => {
        return (
            <>
                <h5>Select Dates</h5>
                <label>
                    Start date
                </label>
                <DatePicker
                    showIcon
                    selected={startDate}
                    onChange={date => handleChangeStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    minDate={new Date()}
                    maxDate={endDate}
                    popperPlacement="bottom"
                    aria-label="start-date"
                />
                <label>
                    Return date
                </label>
                <DatePicker
                    showIcon
                    selected={endDate}
                    onChange={date => handleChangeEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    popperPlacement="bottom"
                    aria-label="return-date"
                />

            </>
        )
    }

    const RenderCalculation = () => {
        return (
            <>
                <div aria-label="deposit-cost">Deposit Price: ${servicedata.depositprice}</div>
                <div aria-label="rental-cost">Rental Cost: ${totalRentPrice}</div>
                <div aria-label="delivery-cost">Delivery Price: ${servicedata.deliveryprice}</div>
                <div aria-label="return-cost">Return Price: ${servicedata.returnprice}</div>
                <div aria-label="addon-cost">Additional Items: ${cartItemsPrice}</div>
                <div aria-label="total-cost">Total Cost: ${servicedata.depositprice + totalRentPrice + servicedata.deliveryprice + servicedata.returnprice + cartItemsPrice}</div>
            </>
        )
    }

    return (
        <div className="border border-2 rounded">
        <RenderForm />
        <hr/>
        <RenderItems />
        <hr/>
        <RenderCalculation />
        <hr />
        {!inStock ?
            <>
                <Button aria-label='submit-button' disabled={!inStock}>Submit</Button>
                <div>Sorry! We are out of stock.</div>
            </>
            :
            <Button aria-label='submit-button' onClick={handleSubmit}>Submit</Button>
        }
        <LoginRequired showModal={displayLoginModal} confirmModal={handleSubmit} hideModal={hideLoginModal} />
        <ItemAddedConfirmation showModal={itemAdded} hideModal={setItemAdded} />
    </div>
    )

}

export default ServiceForm;