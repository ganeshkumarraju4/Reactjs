import { useState, useEffect } from 'react';
import axios from 'axios';  
import {Routes, Route} from 'react-router';
import { HomePage } from './pages/home/Homepage';
import {CheckoutPage} from './pages/checkout/Checkoutpage';
import { OrdersPage } from './pages/orders/Orderspage';
import { TrackingPage } from './pages/Trackingpage';
import { Page404 } from './pages/404page';
import './App.css'


function App() {
 const [cart, setCart] = useState([]);
  useEffect(() =>{
    const getCartData = async () =>{
     const response = await axios.get('/api/cart-items?expand=product')
      setCart(response.data); }
      getCartData();
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<OrdersPage cart={cart} />} />
      <Route path="tracking" element={<TrackingPage />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  )
}

export default App
