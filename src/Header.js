import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import SearchIcon from '@material-ui/icons/Search';
import { useStateValue } from './StateProvider';


const basketstore = <FontAwesomeIcon icon={faShoppingCart} />

function Header() {
  const [{ basket }] = useStateValue();
console.log(basket);

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
            <span className="header__optionLineOne">Hello Simon</span>
            <span className="header__optionLineTwo">Sign in</span>
          </div>
        </Link>

        <Link to="/login" className="header__link">
          <div className="header__option">
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
