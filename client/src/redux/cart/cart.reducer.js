import cartTypes from './cart.types';
import { AddItemToCart, removeItemToCart } from './cart.utils'

const INITIAL_STATE = {
    cartItems: [],
    hidden: true
}

const cartReducer = (state = INITIAL_STATE, action) => {
    // console.log('cartReducer')
    switch (action.type){
        case cartTypes.ADD_ITEM:
            return {
                ...state, 
                cartItems: AddItemToCart(state.cartItems, action.payload)
            };
        case cartTypes.REMOVE_ITEM:
            return {
                ...state, 
                cartItems: removeItemToCart(state.cartItems, action.payload)
            };
        case cartTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state, 
                cartItems: state.cartItems.filter(cartItem => action.payload.id !== cartItem.id)
            };
        // case cartTypes.ADD_ITEM:
        //     return {
        //         ...state, 
        //         cartItems: [...state.cartItems, action.payload]
        //     };
        case cartTypes.TOGGLE_DROPDOWN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case cartTypes.CLEAR_CART: 
        return {
            ...state,
            cartItems: []
        }
        default:
            return state;
    }
}

export default cartReducer;