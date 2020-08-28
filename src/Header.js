import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import SearchIcon from '@material-ui/icons/Search';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase"


const basketstore = <FontAwesomeIcon icon={faShoppingCart} />

function Header() {
  const [{ basket, user }] = useStateValue();


  const login = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <nav className="header">
      <Link to="/">
        <img className="header__logo" src="/Amazon-logo.png" alt=""/>
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className='header__nav' >
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello {user?.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign out' : 'Sign in'}</span>
          </div>
        </Link>

        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__optionLineOne" >Returns</span>
            <span className="header__optionLineTwo" >& Orders</span>
          </div>
        </Link>

        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne" >Your</span>
            <span className="header__optionLineTwo" >Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            {basketstore}
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
          </div>
        </Link>

      </div>
    </nav>
  );
}

export default Header
