import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcStripe } from '@fortawesome/free-brands-svg-icons';

function PayButton({ cartItems }) {
    const [isLoading, setIsLoading] = useState(false);  // Manage loading state
    const url = "https://swifkart-backend.vercel.app/api";
    const user = useSelector((state) => state.auth);

    const handleCheckout = () => {
        setIsLoading(true);  // Set loading to true when button is clicked
        axios
            .post(`${url}/stripe/create-checkout-session`, {
                cartItems,
                userId: user._id,
            })
            .then((response) => {
                if (response.data.url) {
                    window.location.href = response.data.url;
                }
            })
            .catch((err) => {
                setIsLoading(false);  
                console.log(err.message);
            });
    };

    return (
        <>
            {isLoading ? (
                <button className='checkout-btn' onClick={handleCheckout}> <small>
                    Redirecting to Stripe... <FontAwesomeIcon className='cart-icons-checkout' icon={faCcStripe} /> 
                </small>
                    
                </button>
            ) : (
                <button className='checkout-btn' onClick={handleCheckout}>
                    Checkout <FontAwesomeIcon className='cart-icons-checkout' icon={faCcStripe} />
                </button>
            )}
        </>
    );
}

export default PayButton;
