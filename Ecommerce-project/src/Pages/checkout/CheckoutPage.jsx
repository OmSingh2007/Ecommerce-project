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
        const fetchCheckoutdata = async () => {
            let response = await axios.get("/api/delivery-options?expand=estimatedDeliveryTime");
            setDeliveryOptions(response.data);


            response = await axios.get('/api/payment-summary');

            setPaymentSummary(response.data);
        };
        fetchCheckoutdata();
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