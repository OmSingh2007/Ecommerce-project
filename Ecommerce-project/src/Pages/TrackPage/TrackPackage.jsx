import axios from 'axios';
import { useState, useEffect } from 'react';
import './TrackPackage.css'
import { Header } from '../../components/Header'
import dayjs from 'dayjs';
import { useParams } from 'react-router'
export function TrackPackage({ cart }) {
    const { orderId, productId } = useParams();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        const fetchTrackingdata = async () => {
            try{
            const response = await axios.get(`/api/orders/${orderId}?expand=products`);
            setOrder(response.data);
            }
            catch(error){
                console.log("Error fetching tracking data",error);
                alert("Could not fetch tracking data check console to check the error");
            }
        }
        fetchTrackingdata();

    }, [orderId]);
   if (!order) {
    return <div>Loading Tracking Details...</div>;
}
    const orderProduct = order.products.find((orderProduct) => {
        return orderProduct.productId === productId;
    });

    const totalDeliveryTimeMs = orderProduct.estimatedDeliveryTimeMs - order.orderTimeMs;
    const timePassedMs = dayjs().valueOf() - order.orderTimeMs;

    let deliveryPercent = (timePassedMs / totalDeliveryTimeMs) * 100;
    if (deliveryPercent > 100) {
        deliveryPercent = 100;
    }

    const isPreparing = deliveryPercent<33;
    const isShipped = deliveryPercent>=33 && deliveryPercent<100;
    const isDelivered= deliveryPercent===100;
    return (
        <>
            <title>Tracking</title>
            <Header cart={cart} />

            <div class="tracking-page">
                <div class="order-tracking">
                    <a class="back-to-orders-link link-primary" href="/orders">
                        View all orders
                    </a>

                    <div class="delivery-date">
                        Arriving on : {dayjs(orderProduct.estimatedDeliveryTimeMs).format('dddd MMMM D')}
                        {deliveryPercent >= 100 ? 'Delivered on' : 'Arriving on'}
                        {dayjs(orderProduct.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                    </div>

                    <div class="product-info">
                        {orderProduct.product.name}
                    </div>

                    <div class="product-info">
                        Quantity: {orderProduct.quantity}
                    </div>

                    <img class="product-image" src={orderProduct.product.image} />

                    <div class="progress-labels-container">
                        <div class={`progress-label ${isPreparing && 'current-status'}`}>
                            Preparing
                        </div>
                        <div class={`progress-label ${isShipped && 'current-status'}`}>
                            Shipped
                        </div>
                        <div class={`progress-label ${isDelivered && 'current-status'}`}>
                            Delivered
                        </div>
                    </div>

                    <div class="progress-bar-container">
                        <div class="progress-bar" style={{
                            width: `${deliveryPercent}%`
                        }}>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}