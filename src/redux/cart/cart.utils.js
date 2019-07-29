export const AddItemToCart = (cartItems, item) => {
    const existingItem = cartItems.find(cartItem => {
        return cartItem.id === item.id
    })
    if(existingItem){
        return cartItems.map(cartItem => {
            return cartItem.id === item.id 
            ?  {...cartItem, quantity: cartItem.quantity + 1} 
            :  cartItem
        })
    }
    return [...cartItems, {...item, quantity: 1}]
}



// export const AddItemToCart = (cartItems, item) => {
//     return [...cartItems, {...item, quantity: 1}]
// }