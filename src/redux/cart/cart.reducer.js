import cartTypes from './cart.types';
import { AddItemToCart } from './cart.utils'

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
        default:
            return state;
    }
}

export default cartReducer;