import axios from 'axios'
import { OrdersGrid } from './OrdersGrid'
import { useState, useEffect, Fragment } from 'react'
import { Header } from '../../components/Header'
import './OrdersPage.css'
export function OrdersPage({ cart, fetchCartData }) {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        axios.get('/api/orders?expand=products')
            .then((response) => {
                setOrders(response.data)
            });
    }, []);
    return (
        <>
            <title>Orders</title>

            <Header cart={cart} />
            <div className="orders-page">
                <div className="page-title">Your Orders</div>
                <OrdersGrid orders={orders} fetchCartData={fetchCartData} />
            </div>
        </>
    );    
}