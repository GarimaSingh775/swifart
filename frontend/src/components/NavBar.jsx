import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import swifkartLogo from '../assets/Swifkart-Logo.png';
import { logoutUser } from '../features/authSlice';
import './NavBar.css';

function NavBar() {
  const { cartTotalQuantity } = useSelector(state => state.cart);
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser(null));
    toast.success("Logged out!");
  };

  return (
    <div className="header-bg">
      <nav className='nav-bar'>
        <div className="nav-bar-container">
          <div className="logo-container">
            <Link to="/"><img className='logo' src={swifkartLogo} alt="Swifkart Logo" draggable="false" /></Link>
          </div>
          <div className="right-section">
            {auth._id ? (
              <Link to="/" onClick={handleLogout}>
                <FontAwesomeIcon className='profile-icon' icon={faArrowRightFromBracket} />
              </Link>
            ) : (
              <Link to="/login">
                <FontAwesomeIcon className='profile-icon' icon={faUser} />
              </Link>
            )}
            <Link to="/cart">
              <div className="cart-icon-container">
                <FontAwesomeIcon className='cart-icon' icon={faCartShopping} />
                <div className="cart-quantity">
                  <p>{cartTotalQuantity}</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
