import axios from "axios";

// USER
export const GET_USER = "GET_USER";
export const GET_USER_DETAILS = "GET_USER_DETAILS";
export const POST_USER = "POST_USER";
export const PUT_USER = "PUT_USER";

// DOG
export const GET_DOG_TRUE = "GET_DOG_TRUE";
export const GET_DOG_FALSE = "GET_DOG_FALSE";
export const GET_DOG_DETAILS = "GET_DOG_DETAILS";
export const POST_DOG = "POST_DOG";
export const PUT_DOG = "PUT_DOG";

// OTRO
export const LOGIN = "LOGIN";
export const FORGOT_PASSWOED = "FORGOT_PASSWOED";
export const NEW_PASSWORD = "NEW_PASSWORD";

export function getUser () {
    return async function(dispatch){
        var json = await axios.get("/users")
        return dispatch({
            type : "GET_USER",
            payload : json.data
        })
    }
}

export function getUserDetails () {
    return async function(dispatch){
        var json = await axios.get("/user/:id")
        return dispatch({
            type : "GET_USER_DETAILS",
            payload : json.data
        })
    }
}

export function postUser () {
    return async function(dispatch){
        var json = await axios.get("/postDog")
        return dispatch({
            type : "POST_USER",
            payload : json.data
        })
    }
}

export function putUser () {
    return async function(dispatch){
        var json = await axios.get("/updatedDog/:id")
        return dispatch({
            type : "PUT_USER",
            payload : json.data
        })
    }
}

            // DOG

export function getDogsTrue () {
    return async function(dispatch){
        var json = await axios.get("/dogsAdopted")
        return dispatch({
            type : "GET_DOG_TRUE",
            payload : json.data
        })
    }
}

export function getDogsFalse () {
    return async function(dispatch){
        var json = await axios.get("/dogs")
        return dispatch({
            type : "GET_DOG_FALSE",
            payload : json.data
        })
    }
}

export function getDogDetails () {
    return async function(dispatch){
        var json = await axios.get("/dog/:id")
        return dispatch({
            type : "GET_DOG_DETAILS",
            payload : json.data
        })
    }
}

export function postDog () {
    return async function(dispatch){
        var json = await axios.get("/postDog")
        return dispatch({
            type : "POST_DOG",
            payload : json.data
        })
    }
}

export function putDog () {
    return async function(dispatch){
        var json = await axios.get("/updatedDog/:id")
        return dispatch({
            type : "PUT_DOG",
            payload : json.data
        })
    }
}
