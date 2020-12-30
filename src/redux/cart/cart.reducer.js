import cartActionTypes from "./cart.types"
const INITIAL_SATE ={
    hidden:true
}


const cartReducer = (state = INITIAL_SATE, action) =>
{
    switch(action.type){
        case cartActionTypes.TOOGLE_CART_HIDDEN:
            return{
                ...state,
                hidden:!state.hidden
            }
            default:
                return state;
    }
}

export default cartReducer;