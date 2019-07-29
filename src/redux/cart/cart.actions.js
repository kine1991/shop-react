import cartTypes from './cart.types';

export const addItem = item => ({
    type: cartTypes.ADD_ITEM,
    payload: item 
})

export const hiddenDropdown = () => ({
    type: cartTypes.TOGGLE_DROPDOWN
})



