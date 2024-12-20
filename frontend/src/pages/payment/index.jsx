import React, { useEffect, useState } from 'react'
// import  './payment.module.css'

import {
    PaymentElement,LinkAuthenticationElement,useStripe,useElements,Elements,} from "@stripe/react-stripe-js";


import { loadStripe } from "@stripe/stripe-js";
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../common/Navbar';
import { useSelector } from 'react-redux';
import axios from 'axios';
import backendIP from '../../backendIP';
import sendMail from './emailjs';

function Payment() {
    const { clientSecret } = useParams()
    const stripePromise = loadStripe('pk_live_51KLtjzCHExkLfEQ3dsr5gBSlMLR3EM4lby1ZKQcIKV2OfMHsNTrEbjnKVSDmAFDoqJvOSpeHuh6h4vn6QVTeANDX009pvzhMVd');
    const options = {
        clientSecret,
        appearance :  {
            theme: 'flat',
        },
    };

    return (
        <div>

            <Elements options={options} stripe={stripePromise}>
                <PaymentCard />
            </Elements>
        </div>
    )
}

export default Payment

const PaymentCard = () => {
    const stripe = useStripe();
    const elements = useElements();
// eslint-disable-next-line
    // const [email, setEmail] = useState('');
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const {fname,lname,phone,address,zipCode,email} = useSelector(state=>state.user)
    const fabric = useSelector(state=>state.fabric)
    const navigate =  useNavigate()
    
    useEffect(() => {
      sendMail(email,fname+lname)
    }, [])
    

   

    useEffect(() => {
        
        if (!stripe) return;
       

        const clientSecret = new URLSearchParams(window.location.search).get(
            "payment_intent_client_secret"
        );


        if (!clientSecret) return;
        

        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            switch (paymentIntent.status) {
                case "succeeded":
                    setMessage("Payment succeeded!");
                    axios.post(`${backendIP}/email/order-fabric`,{fname,lname,phone,address,zipCode,fabric}).then(res=>{
                        if(res.data){
                            window.alert('Your Order is successfull')
                            navigate('/thank-you')
                        }
                    })
                    break;
                case "processing":
                    setMessage("Your payment is processing.");
                    break;
                case "requires_payment_method":
                    setMessage("Your payment was not successful, please try again.");
                    break;
                default:
                    setMessage("Something went wrong.");
                    break;
            }
        });
        // eslint-disable-next-line
    }, [stripe]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) return;
        

        setIsLoading(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // Make sure to change this to your payment completion page
                return_url: "http://my-thread.co.uk/thank-you",
            },
        });


        if (error.type === "card_error" || error.type === "validation_error") setMessage(error.message);  
        else setMessage("An unexpected error occurred.");
        

        setIsLoading(false);
    };

    const paymentElementOptions = {
        layout: "tabs"
    }

    return (
        <>
        <Navbar/>
            <div className="flex justify-center items-center">

                <form className='form mt-10 payment-form w-[500px]' id="payment-form" onSubmit={handleSubmit}>
                    <LinkAuthenticationElement
                        id="link-authentication-element"
                        // onChange={(e) => setEmail(e.target.value)}
                    
                    />
                    <PaymentElement className="payment-element" options={paymentElementOptions}  />
                    <button className='paynow h-12 w-full bg-[#1d206a] rounded-xl mt-5 text-white' disabled={isLoading || !stripe || !elements} id="submit">
                        <span id="button-text">
                            {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
                        </span>
                    </button>
                    {/* Show any error or success messages */}
                    {message && <div className="payment-message">{message}</div>}
                </form>
            </div>
        </>
    );
}