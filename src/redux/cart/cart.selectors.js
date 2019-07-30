import { createSelector } from 'reselect'

const selectCart = state => {
    return state.cart
};

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => {
        // console.log('createSelector (selectCartItems)')
        // console.log(cart.cartItems)
        return cart.cartItems
    }
)

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => {
        // console.log('createSelector (selectCartHidden)')
        // console.log(cart.hidden)
        return cart.hidden
    }
)


export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => {
        // console.log('createSelector (selectCartItemsCount)')
        // console.log(cartItems)
        return cartItems.reduce((acc, cur) => {
            return acc + cur.quantity
        },0)
    }
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>
      cartItems.reduce(
        (accumalatedQuantity, cartItem) =>
          accumalatedQuantity + cartItem.quantity * cartItem.price,
        0
      )
  );