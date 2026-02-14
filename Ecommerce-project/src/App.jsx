import axios from 'axios'
import { Routes } from 'react-router'
import { Route } from 'react-router'
import { useState, useEffect } from 'react'
import { HomePage } from './Pages/home/HomePage'
import { CheckoutPage } from './Pages/checkout/CheckoutPage'
import { OrdersPage } from './Pages/orders/OrdersPage'
import { TrackPackage } from './Pages/TrackPackage'
import './App.css'

function App() {
  const [cart , setCart] = useState([]);
  useEffect(()=>{
    const fetchAppData= async ()=>{
      const response=await axios.get('/api/cart-items?expand=product')  // (?expand=product) is called a query parameter 
            setCart(response.data);
    }
    fetchAppData();
  },[]);
  

  return (
    //Instead of index we can write path="/" that does the same thing 
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart}/>} />
      <Route path="orders" element={<OrdersPage cart={cart}/>} />
      <Route path="tracking" element={<TrackPackage/>} />
    </Routes> 
  )
}

export default App
