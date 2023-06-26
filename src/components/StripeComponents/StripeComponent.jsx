import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { useremail } from "../../redux/reducers/authSlice";

const StripeComponent = () => {
  const PUBLISHABLE_KEY = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;
  const stripePromise = loadStripe(PUBLISHABLE_KEY);
  
  const email = useSelector(useremail);
  const [clientSecret, setClientSecret] = useState("");
 
 
  useEffect(() => {
    const getPaymentIntent = async () => {
      try{
        const response = await fetch(`${process.env.REACT_APP_STRIPE_URL}/create-payment-intent`, {
          method: "POST",
          body: JSON.stringify({
            email: email,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const { clientSecret } = await response.json();
        setClientSecret(clientSecret);

      } catch(error) {
        console.log(error.message);
      }
    };
  getPaymentIntent();
  }, []);


  return (
     <>
      <h1>Stripe payment</h1>
      {stripePromise && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}

     </>

  );
}

export default StripeComponent;