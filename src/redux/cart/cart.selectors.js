import { createSelector } from 'reselect'

const selectCart = state => {
    return state.cart
};

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => {
        console.log('createSelector (selectCartItems)')
        console.log(cart.cartItems)
        return cart.cartItems
    }
)


export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => {
        console.log('createSelector (selectCartItemsCount)')
        console.log(cartItems)
        return cartItems.reduce((acc, cur) => {
            return acc + cur.quantity
        },0)
    }
)