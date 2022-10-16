import { 
    GET_COUNTRIES,
} from "../actions/index"

const initialState = {
    
  };

function rootReducer (state = initialState, { type, payload }) {
    switch(type) {
        case GET_COUNTRIES :
            return {
                
            }
        default: return state;
    }
}

export default rootReducer;