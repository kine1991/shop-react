import React from 'react'
import { connect } from 'react-redux'

import { ReactComponent as Logo } from '../../assets/shopping-cart.svg'
import { hiddenDropdown } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import './cart-icon.styles.scss'

const CartIcon = (props) => {
    // console.log(props.itemCount)
    return (
        <div className="cart-icon" onClick={() => props.dispatch(hiddenDropdown())}>
            <Logo className="cart-icon__logo"/>
            <span className="cart-icon__count">{props.itemCount}</span>
        </div>
    )
}

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
    // itemCount: state.cart.cartItems.reduce((acc, cur) => {
    //     return acc + cur.quantity
    // },0)
})

export default connect(mapStateToProps)(CartIcon)
