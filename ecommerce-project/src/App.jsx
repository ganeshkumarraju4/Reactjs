import {Routes, Route} from 'react-router';
import { HomePage } from './pages/Homepage';
import {CheckoutPage} from './pages/Checkoutpage';
import { OrdersPage } from './pages/Orderspage';
import './App.css'

function App() {
 

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orders" element={<OrdersPage />} />
    </Routes>
  )
}

export default App
