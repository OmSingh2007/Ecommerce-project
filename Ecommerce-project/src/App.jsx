import { Routes } from 'react-router'
import { Route } from 'react-router'
import { HomePage } from './Pages/HomePage'
import { CheckoutPage } from './Pages/CheckoutPage'
import { OrdersPage } from './Pages/OrdersPage'
import { TrackPackage } from './Pages/TrackPackage'
import './App.css'

function App() {

  return (
    //Instead of index we can write path="/" that does the same thing 
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage/>} />
      <Route path="orders" element={<OrdersPage/>} />
      <Route path="tracking" element={<TrackPackage/>} />
    </Routes> 
  )
}

export default App
