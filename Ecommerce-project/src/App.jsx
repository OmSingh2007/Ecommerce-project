import axios from 'axios'
import { Routes } from 'react-router'
import { Route } from 'react-router'
import { useState, useEffect } from 'react'
import { HomePage } from './Pages/home/HomePage'
import { CheckoutPage } from './Pages/checkout/CheckoutPage'
import { OrdersPage } from './Pages/orders/OrdersPage'
import { TrackPackage } from './Pages/TrackPage/TrackPackage'
import { NotFoundPage } from './Pages/NotFoundPage/NotFoundPage'
import './App.css'

function App() {
  const [cart, setCart] = useState([]);
  const fetchCartData = async () => {
    const response = await axios.get('/api/cart-items?expand=product')  // (?expand=product) is called a query parameter 
    setCart(response.data);
  }
  useEffect(() => {
    fetchCartData();
  }, []);


  return (
    //Instead of index we can write path="/" that does the same thing 
    <Routes>
      <Route index element={<HomePage cart={cart} fetchCartData={fetchCartData} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} fetchCartData={fetchCartData} />} />
      <Route path="orders" element={<OrdersPage cart={cart} />} />
      <Route path="tracking/:orderId/:productId" element={<TrackPackage cart={cart} />} />
      <Route path="*" element={<NotFoundPage cart={cart} />} />
    </Routes>
  )
}

export default App
