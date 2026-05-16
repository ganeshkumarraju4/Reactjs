import './CheckoutHeader.css';
import MobileLogoWhite from '../../assets/images/mobile-logo-white.png';
import Logo from '../../assets/images/logo.png';
import CheckoutLock from '../../assets/images/checkout-lock-icon.png';
import {NavLink} from 'react-router';
export function CheckoutHeader() {
    return(
        <>
           <div className="checkout-header">
            <div className="header-content">
                <div className="checkout-header-left-section">
                <NavLink
                 to="/">
                    <img className="logo" src={Logo} />
                    <img className="mobile-logo" src={MobileLogoWhite} />
                </NavLink>
                </div>

                <div className="checkout-header-middle-section">
                Checkout (<NavLink className="return-to-home-link"
                    to="/">
                    3 items
                </NavLink>)
                </div>

                <div className="checkout-header-right-section">
                <img src={CheckoutLock} />
                </div>
            </div>
            </div>
        </>
    );
}