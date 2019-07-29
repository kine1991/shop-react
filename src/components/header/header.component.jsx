import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/internet.svg'

const Header = ({hidden}) => {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="navigations">
                <Link className="navigation" to="/">Home</Link>
                <Link className="navigation" to="/shop">Shop</Link>
                <CartIcon className="navigation"/>
            </div>
            {hidden ? null : <CartDropdown/>}
        </div>
    )
}

const mapDispatchToProps = (state) => ({
    hidden: state.cart.hidden
})

export default connect(mapDispatchToProps)(Header)
