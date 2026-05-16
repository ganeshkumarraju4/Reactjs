import {Routes, Route} from 'react-router';
import { HomePage } from './pages/Homepage';
import {CheckoutPage} from './pages/checkout/Checkoutpage';
import { OrdersPage } from './pages/Orderspage';
import { TrackingPage } from './pages/Trackingpage';
import { Page404 } from './pages/404page';
import './App.css'

function App() {
 

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orders" element={<OrdersPage />} />
      <Route path="tracking" element={<TrackingPage />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  )
}

export default App
