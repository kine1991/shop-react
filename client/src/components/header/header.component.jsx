import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { signOutStart } from '../../redux/user/user.actions'

import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/internet.svg'

const Header = ({hidden, currentUser, signOutStart}) => {
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
                    <div className="navigation" onClick={() => signOutStart()}>Logout</div> :
                    <Link className="navigation" to="/login-register">Login or Register</Link>

                }
                <CartIcon className="navigation"/>
            </div>
            {hidden ? null : <CartDropdown/>}
        </div>
    )
}

// const mapStateToProps = (state) => ({
//     hidden: selectCartHidden(state),
//     currentUser: selectCurrentUser(state)
// })

const mapStateToProps = createStructuredSelector({
    hidden: selectCartHidden,
    currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})


export default connect(mapStateToProps, mapDispatchToProps)(Header)
