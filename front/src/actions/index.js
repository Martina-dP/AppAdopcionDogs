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
        var json = await axios.get("http://localhost:3001/users")
        return dispatch({
            type : "GET_USER",
            payload : json.data
        })
    }
}

export function getUserDetails (_id) {
    return async function(dispatch){
        var json = await axios.get(`http://localhost:3001/user/${_id}`)
        return dispatch({
            type : "GET_USER_DETAILS",
            payload : json.data
        })
    }
}

export function postUser (input) {
    return async function(dispatch){
        var json = await axios.post("http://localhost:3001/createUser", input)
        return dispatch({
            type : "POST_USER",
            payload : json.data
        })
    }
}

export function putUser (_id) {
    return async function(dispatch){
        var json = await axios.get(`http://localhost:3001/updateUser/${_id}`)
        return dispatch({
            type : "PUT_USER",
            payload : json.data
        })
    }
}

            // ANIMAL

export function getAnimalTrue () {
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/animalsAdopted")
        return dispatch({
            type : "GET_ANIMAL_TRUE",
            payload : json.data
        })
    }
}

export function getAnimalFalse () {
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/animals")
        return dispatch({
            type : "GET_ANIMAL_FALSE",
            payload : json.data
        })
    }
}

export function getAnimalDetails (_id) {
    return async function(dispatch){
        var json = await axios.get(`http://localhost:3001/animal/${_id}`)
        return dispatch({
            type : "GET_ANIMAL_DETAILS",
            payload : json.data
        })
    }
}

export function postAnimal () {
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/postAnimal")
        return dispatch({
            type : "POST_ANIMAL",
            payload : json.data
        })
    }
}

export function putAnimal (_id) {
    return async function(dispatch){
        var json = await axios.get(`http://localhost:3001/updatedAnimal/${_id}`)
        return dispatch({
            type : "PUT_ANIMAL",
            payload : json.data
        })
    }
}

            // OTROS

export function login (input) {
    return async function(dispatch){
        var json = await axios.post(`http://localhost:3001/login`, input)
        return dispatch({
            type : "LOGIN",
            payload : json.data
        })
    }
}

export function forgotPassword () {
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/forgotPassword")
        return dispatch({
            type : "FORGOT_PASSWOED",
            payload : json.data
        })
    }
}

export function newPassword () {
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/newPassword")
        return dispatch({
            type : "NEW_PASSWORD",
            payload : json.data
        })
    }
}