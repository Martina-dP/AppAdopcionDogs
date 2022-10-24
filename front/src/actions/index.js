import axios from "axios";

// USER
export const GET_USER = "GET_USER";
export const GET_USER_DETAILS = "GET_USER_DETAILS";
export const POST_USER = "POST_USER";
export const PUT_USER = "PUT_USER";

// DOG
export const GET_ANIMAL_TRUE = "GET_ANIMAL_TRUE";
export const GET_ANIMAL_FALSE = "GET_ANIMAL_FALSE";
export const GET_ANIMAL_DETAILS = "GET_ANIMAL_DETAILS";
export const POST_ANIMAL = "POST_ANIMAL";
export const PUT_ANIMAL = "PUT_ANIMAL";

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

            // ANIMAL

export function getAnimalTrue () {
    return async function(dispatch){
        var json = await axios.get("/animalsAdopted")
        return dispatch({
            type : "GET_ANIMAL_TRUE",
            payload : json.data
        })
    }
}

export function getAnimalFalse () {
    return async function(dispatch){
        var json = await axios.get("/animals")
        return dispatch({
            type : "GET_ANIMAL_FALSE",
            payload : json.data
        })
    }
}

export function getAnimalDetails () {
    return async function(dispatch){
        var json = await axios.get("/animal/:id")
        return dispatch({
            type : "GET_ANIMAL_DETAILS",
            payload : json.data
        })
    }
}

export function postAnimal () {
    return async function(dispatch){
        var json = await axios.get("/postAnimal")
        return dispatch({
            type : "POST_ANIMAL",
            payload : json.data
        })
    }
}

export function putAnimal () {
    return async function(dispatch){
        var json = await axios.get("/updatedAnimal/:id")
        return dispatch({
            type : "PUT_ANIMAL",
            payload : json.data
        })
    }
}

            // OTROS

export function login () {
    return async function(dispatch){
        var json = await axios.get("/login")
        return dispatch({
            type : "LOGIN",
            payload : json.data
        })
    }
}

export function forgotPassword () {
    return async function(dispatch){
        var json = await axios.get("/forgotPassword")
        return dispatch({
            type : "FORGOT_PASSWOED",
            payload : json.data
        })
    }
}

export function newPassword () {
    return async function(dispatch){
        var json = await axios.get("/newPassword")
        return dispatch({
            type : "NEW_PASSWORD",
            payload : json.data
        })
    }
}