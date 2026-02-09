import axios from 'axios'
import { Routes } from 'react-router'
import { Route } from 'react-router'
import { useState, useEffect } from 'react'
import { HomePage } from './Pages/HomePage'
import { CheckoutPage } from './Pages/checkout/CheckoutPage'
import { OrdersPage } from './Pages/OrdersPage'
import { TrackPackage } from './Pages/TrackPackage'
import './App.css'

function App() {
  const [cart , setCart] = useState([]);
  useEffect(()=>{
    axios.get("/api/cart-items")
           .then((response)=>{
            setCart(response.data);
         });
  });
  

  return (
    //Instead of index we can write path="/" that does the same thing 
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart}/>} />
      <Route path="orders" element={<OrdersPage/>} />
      <Route path="tracking" element={<TrackPackage/>} />
    </Routes> 
  )
}

export default App
