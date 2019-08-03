import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import CartItem from '../cart-item/cart-item.component'
import CustomButton from '../custom-button/custom-button.component'
import { hiddenDropdown } from '../../redux/cart/cart.actions'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer } from './cart-dropdown.styles'

const CartDropdown = ({cartItems, history, dispatch}) => {
    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {
                    cartItems.length 
                    ?
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                    : <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
                }
            </CartItemsContainer>
            <CustomButton className="custom-button" onClick={() => {
                history.push('/checkout');
                dispatch(hiddenDropdown());
            }}>Chekout</CustomButton>
        </CartDropdownContainer>
    )
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})


export default withRouter(connect(mapStateToProps)(CartDropdown))
