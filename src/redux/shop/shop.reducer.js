import { SHOP_DATA } from './shop.data'

const INITIAL_STATE = {
    collections: SHOP_DATA
  };

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        // case LL :
        //     doExpression
        default :
            return state
    }
} 

export default shopReducer