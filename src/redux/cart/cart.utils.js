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

export const removeItemToCart = (cartItems, item) => {
    const existingItem = cartItems.find(cartItem => {
        return cartItem.id === item.id;
    })
    if(existingItem.quantity === 1){
        return cartItems.filter(cartItem => {
            return cartItem.id !== item.id
        })
    }
    if(existingItem.quantity > 1){
        return cartItems.map(cartItem => {
            if(cartItem.id === item.id){
                return {...cartItem, quantity: cartItem.quantity - 1}
            } else{
                return cartItem // безполезное действие
            }
        })
    }
    // return [...cartItems, {...item, quantity: 1}]
}



// export const AddItemToCart = (cartItems, item) => {
//     return [...cartItems, {...item, quantity: 1}]
// }