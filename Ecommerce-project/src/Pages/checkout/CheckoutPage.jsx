import { PaymentSummary } from './PaymentSummary'
import { OrderSummary } from './OrderSummary'
import axios from 'axios'
import { useState, useEffect } from 'react'
import './CheckoutPage.css'
import { CheckoutHeader } from './CheckoutHeader';
export function CheckoutPage({ cart }) {
    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [paymentSummary, setPaymentSummary] = useState(null);
    useEffect(() => {
        axios.get("/api/delivery-options?expand=estimatedDeliveryTime")
            .then((response) => {
                setDeliveryOptions(response.data)
            })


        axios.get('/api/payment-summary')
            .then((response) => {
                setPaymentSummary(response.data);
            })
    }, [])


    return (
        <>

            <title>Checkout</title>

            <CheckoutHeader />

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <OrderSummary cart={cart} deliveryOptions={deliveryOptions} />
                    {paymentSummary && (
                        <>
                            <PaymentSummary paymentSummary={paymentSummary} />
                        </>
                    )}

                </div>
            </div>
        </>
    );
}