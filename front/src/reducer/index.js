import { 
    GET_USER,
} from "../actions/index"

const initialState = {
    user : [],
  };

function rootReducer (state = initialState, { type, payload }) {
    switch(type) {
        case GET_USER :
            return {
                ...state,
                user : payload,
            }
        default: return state;
    }
}

export default rootReducer;