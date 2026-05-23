import { useState, useEffect } from 'react';
import axios from 'axios';

import { CheckoutHeader } from './CheckoutHeader';
import CartIcon from '../../assets/images/cart-favicon.png';

import './Checkout.css';    
import { OrderSummary } from './OrderSummary';
import { PaymentSummary } from './PaymentSummary';


export function CheckoutPage({ cart,loadCart }) {
    const[deliveryOptions, setDeliveryOptions] = useState([]);
    const [paymentSummary, setPaymentSummary] = useState(null);

    useEffect(() =>{
        const fetchCheckoutData = async () =>{
          let response = await  axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
        
            setDeliveryOptions(response.data);
       
        };
        fetchCheckoutData();

    }, []);
    useEffect(() =>{
        const fetchPaymentSummary = async () =>{
        const response = await axios.get('/api/payment-summary')
            setPaymentSummary(response.data);
        };
        fetchPaymentSummary();
    }, [cart]);

    return (
        <>
        <title>Checkout</title>
        <CheckoutHeader cart = {cart}/>
         <link rel="icon" type="image/svg+xml" href={CartIcon}  />

            <div className="checkout-page">
            <div className="page-title">Review your order</div>

            <div className="checkout-grid">
              <OrderSummary cart={cart} deliveryOptions={deliveryOptions} loadCart={loadCart}/>

               <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
            </div>
            </div>
        </>
    );
}