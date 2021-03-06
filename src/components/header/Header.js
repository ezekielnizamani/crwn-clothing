import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/util";
import CartIcon from '../cart-icon/cart-icon'
import CartDropDown from "../cart-dropdown/Cart.dropdown";
const Header = ({ currentUser, hidden }) => {
  
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>

      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/shop" className="option">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropDown />}
    </div>
  );
};
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});
export default connect(mapStateToProps)(Header);
