import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import CartItem from '../cart-item/cart-item.component'
import CustomButton from '../custom-button/custom-button.component'
import { hiddenDropdown } from '../../redux/cart/cart.actions'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import './cart-dropdown.styles.scss'

const CartDropdown = ({cartItems, history, dispatch}) => {
    console.log(cartItems)
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length 
                    ?
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                    : <span className="empty-message">Your cart is empty</span>
                }
            </div>
            <CustomButton className="custom-button" onClick={() => {
                history.push('checkout');
                dispatch(hiddenDropdown());
            }}>Chekout</CustomButton>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})


export default withRouter(connect(mapStateToProps)(CartDropdown))
