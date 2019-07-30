import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { auth } from '../../firebase/firebase'

import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/internet.svg'

const Header = ({hidden, currentUser}) => {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="navigations">
                <Link className="navigation" to="/">Home</Link>
                <Link className="navigation" to="/shop">Shop</Link>
                {
                    currentUser ?
                    <div className="navigation" onClick={() => auth.signOut()}>Logout</div> :
                    <Link className="navigation" to="/login-register">Login or Register</Link>

                }
                <CartIcon className="navigation"/>
            </div>
            {hidden ? null : <CartDropdown/>}
        </div>
    )
}

const mapDispatchToProps = (state) => ({
    hidden: state.cart.hidden,
    currentUser: state.user.currentUser
})

export default connect(mapDispatchToProps)(Header)
