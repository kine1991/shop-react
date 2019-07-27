import cartTypes from './cart.types';

const addItem = item => ({
    type: cartTypes.ADD_ITEM,
    payload: item 
})

