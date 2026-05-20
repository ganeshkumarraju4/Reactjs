import './Orderspage.css';
import { useState, useEffect ,Fragment} from 'react';
import axios from 'axios';
import LogoWhite from '../../assets/images/logo-white.png';
import MobileLogoWhite from '../../assets/images/mobile-logo-white.png';
import CartIcon from '../../assets/images/cart-icon.png';
import BuyAgainIcon from '../../assets/images/buy-again.png';
import SearchIcon from '../../assets/images/search-icon.png';
import OrderIcon from '../../assets/images/orders-favicon.png';
import {OrdersGrid} from './OrdersGrid';
import { NavLink } from 'react-router';
import {Header} from '../../components/Header';

export function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(()=>{
    const fetchOrdersData = async () =>{
      const response =  await axios.get('/api/orders?expand=products')
    
      setOrders(response.data);
    
    }
    fetchOrdersData();
   
  }, []);

    return (
        <>
        <title>Orders</title>
        <Header cart={cart} />
         <link rel="icon" type="image/svg+xml" href={OrderIcon} />
          <div className="header">
      <div className="left-section">
        <NavLink to="/" className="header-link">
          <img className="logo"
            src={LogoWhite} />
          <img className="mobile-logo"
            src={MobileLogoWhite} />
        </NavLink>
      </div>

      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="Search" />

        <button className="search-button">
          <img className="search-icon" src={SearchIcon} />
        </button>
      </div>

      <div className="right-section">
        <NavLink className="orders-link header-link" to="/orders">

          <span className="orders-text">Orders</span>
        </NavLink>

        <NavLink className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src={CartIcon} />
          <div className="cart-quantity">3</div>
          <div className="cart-text">Cart</div>
        </NavLink>
      </div>
    </div>

    <div className="orders-page">
      <div className="page-title">Your Orders</div>

     <OrdersGrid orders={orders} />
    </div>
        </>
    );
}