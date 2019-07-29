import React from 'react'



import './cart-item.styles.scss'

const CartItem = ({item}) => {
    // console.log(item)
    return (
        <div className="cart-item">
            <div className="image">
                <img src={item.imageUrl} alt=""/>
            </div>
            <div className="item-details">
                <div className="name">{item.name}</div>
                <div className="price">{item.price}</div>
            </div>
        </div>
    )
}

export default CartItem
