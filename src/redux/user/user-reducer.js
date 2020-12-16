import { userActionType } from "./user.type";
const INITIAL_STATE ={
    currentUser:null
}


 const userReducer = (state =INITIAL_STATE,action) =>{
     console.log(action.payload,'action -----')
    switch (action.type) {
      case userActionType.SET_CURRENT_USER:
        return {
          ...state,
          currentUser: action.payload,
        };
      default:
        return state;
    }
}
export default userReducer