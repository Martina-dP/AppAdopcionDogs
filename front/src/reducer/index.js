import { 
    // USER
    GET_USER,
    GET_USER_DETAILS,
    POST_USER,
        // PUT_USER,

    // // DOG
    //     GET_ANIMAL_TRUE,
    GET_ANIMAL_FALSE,
    GET_ANIMAL_DETAILS,
    //     POST_ANIMAL,
    //     PUT_ANIMAL,

    // // OTRO
    LOGIN,
    //     FORGOT_PASSWOED,
    //     NEW_PASSWORD,
    } from "../actions/index"

const initialState = {
    user : {},
    allUsers: {},
    detailsUser: {},
    animalFalse: {},
    animalTrue: {},
    allAnimals: [],
    detailsAnimal: {},
    loginUser: {}
  };

function rootReducer (state = initialState, { type, payload }) {
    switch(type) {
        // USER
        case GET_USER :
            return {
                ...state,
                user : payload,
                allUsers : payload
            };
        case POST_USER :
            return {
                ...state,
                user : payload,
            };
        case GET_USER_DETAILS :
            return {
                ...state,
                detailsUser : payload,
            };
        //     // ANIMAL
        case GET_ANIMAL_FALSE :
            return {
                ...state,
                animalFalse : payload,
                allAnimals: payload
            };
        case GET_ANIMAL_DETAILS :
            return {
                ...state,
                detailsAnimal : payload
            };
        //     // OTROS
        case LOGIN :
            const { mail, password } = payload;
            return {
                ...state,
                loginUser: {
                    mail, 
                    password
                },
            };

        default: return state;
    }
}

export default rootReducer;


