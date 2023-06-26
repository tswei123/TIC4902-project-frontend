import { PaymentElement } from '@stripe/react-stripe-js';
import { useStripe, useElements } from '@stripe/react-stripe-js'
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setCartItem } from '../../redux/reducers/cartSlice'
import axios from 'axios';
import ReactGA from "react-ga4";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, profileInfo } = location.state;
  const [isProcessing, setIsProcessing] = useState(false);

  const processRefund = async (paymentIntent, amount) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_STRIPE_URL}/refund`, {
        method: "POST",
        body: JSON.stringify({
          payment_intent: paymentIntent.id,
          amount: amount
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response)
    } catch (error) {
      console.log(error.message);
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsProcessing(true);
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/transactions`
      },
      redirect: "if_required",
    });
    if (error) {
      console.log("Payment failed");
    }
    else if (paymentIntent && paymentIntent.status == "succeeded") {
      console.log("Payment Successful");
      try {
        const failedItems = [];
        const results = await Promise.allSettled(items.map((item) => {
          return axios.post(`${process.env.REACT_APP_SPRING_URL}/order/addToShipment?email=${item.email}&ordernumber=${item.ordernumber}&address=${profileInfo.address}&contactnumber=${profileInfo.contact}`)
            .then(response => {
              if (response.status === 200) {
                ReactGA.gtag('event', 'purchase', {
                  transaction_id: item.ordernumber,
                  value: item.totalprice,
                  currency: 'SGD',
                });
              }
              return Promise.resolve("Pass");
            }).catch((error) => {
              processRefund(paymentIntent,item.totalprice);
              failedItems.push(item);
              throw error;
            })
        }))
        console.log(results);
          if (results.filter(result => (result.status === 'rejected')).length == 0) {
            console.log("All successful");
            dispatch(setCartItem({
              allCartItem: [],
              totalItemCount: 0
            }));
            navigate("/transactions");
          }
          else {
            console.log("Error failed in database. Refunding item which failed...");
            dispatch(setCartItem({
              allCartItem: failedItems,
              totalItemCount: failedItems.length
            }));
            navigate("/error", {
              state: {
                errorMessage: "An error occured and we are processing the refund. Sorry for any inconvenience",
              }
            });
          }
        
      } catch (error) {
        console.log(error);
      }
    }

    setIsProcessing(false);
  }
  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <div class="col text-end mt-1">
        <button class="btn btn-primary d-block w-100" disabled={isProcessing}>
          {isProcessing ? "Loading" : "Pay now"}
        </button></div>
    </form>
  );
};

export default CheckoutForm;