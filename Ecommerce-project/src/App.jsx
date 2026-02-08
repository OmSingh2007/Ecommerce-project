import { Routes } from 'react-router'
import { Route } from 'react-router'
import { HomePage } from './Pages/HomePage'
import './App.css'

function App() {

  return (
    //Instead of index we can write path="/" that does the same thing 
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<div>This is a checkout page </div>} />
    </Routes> 
  )
}

export default App
