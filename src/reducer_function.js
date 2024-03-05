// Reducer function : Pure functions which takes state ,action and returns current state value
import { action_types } from "./util";

const initial_state = {
    counter : 190,
    cart: 100
}

export const counter_function = (state = initial_state, action) =>{
    switch(action.type){
        case action_types.inc:
            return {...state, counter: state.counter+1  };
        default:
            return state;
    }
}

// methods ---> get redux
// getStore ---> useSelector
// store.dispatch ---> useDispatch