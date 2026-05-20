import './Orderspage.css';
import { useState, useEffect ,Fragment} from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import LogoWhite from '../assets/images/logo-white.png';
import MobileLogoWhite from '../assets/images/mobile-logo-white.png';
import CartIcon from '../assets/images/cart-icon.png';
import BuyAgainIcon from '../assets/images/buy-again.png';
import SearchIcon from '../assets/images/search-icon.png';
import OrderIcon from '../assets/images/orders-favicon.png';
import { NavLink } from 'react-router';
import {Header} from '../components/Header';

export function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(()=>{
    axios.get('/api/orders?expand=products')
    .then((response)=>{
      setOrders(response.data);
    })
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

      <div className="orders-grid">
        {orders.map((order)=>{
          return(
            <div key = {order.id}
            className="order-container">

          <div className="order-header">
            <div className="order-header-left-section">
              <div className="order-date">
                <div className="order-header-label">Order Placed:</div>
                <div>{dayjs(order.orderTimeMs).format('MMMM D')}</div>
              </div>
              <div className="order-total">
                <div className="order-header-label">Total:</div>
                <div>${(order.totalCostCents / 100).toFixed(2)}</div>
              </div>
            </div>

            <div className="order-header-right-section">
              <div className="order-header-label">Order ID:</div>
              <div>{order.id}</div>
            </div>
          </div>

          <div className="order-details-grid">
            {order.products.map((orderProduct)=>{
              return(
                <Fragment key={orderProduct.product.id}>
                   <div className="product-image-container">
              <img src={orderProduct.product.image} />
            </div>

            <div className="product-details">
              <div className="product-name">
               { orderProduct.product.name }
              </div>
              <div className="product-delivery-date">
                Arriving on:{dayjs(orderProduct.estimatedDeliveryTimeMs).format('MMMM D')}
              </div>
              <div className="product-quantity">
                Quantity: {orderProduct.quantity}
              </div>
              <button className="buy-again-button button-primary">
                <img className="buy-again-icon" src={BuyAgainIcon} />
                <span className="buy-again-message">Add to Cart</span>
              </button>
            </div>

            <div className="product-actions">
              <NavLink to="/tracking">
                <button className="track-package-button button-secondary">
                  Track package
                </button>
              </NavLink>
            </div>
                </Fragment>
              );
            })}
            
          </div>
        </div>
          );
        })}
        

        
      </div>
    </div>
        </>
    );
}