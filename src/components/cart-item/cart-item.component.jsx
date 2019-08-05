import React from 'react'


import { CartItemContainer, ImgContainer, ImageContainer, ItemDetailsContainer, NameContainer, PriceContainer } from './cart-item.styles'


const CartItem = ({item}) => {
    return (
        <CartItemContainer>
            <ImageContainer>
                <ImgContainer src={item.imageUrl}/>
            </ImageContainer>
            <ItemDetailsContainer>
                <NameContainer>{item.name}</NameContainer>
                <PriceContainer>{item.price}</PriceContainer>
            </ItemDetailsContainer>
        </CartItemContainer>
    )
}

export default CartItem
