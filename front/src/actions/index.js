import axios from "axios";
// import { GET_USER, GET_USER_DETAILS } from "../reducer/user/index"
export const GET_USER = "GET_USER";

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

export function postUser () {
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/createUser")
        console.log(json, "user")
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

export function login() {
    return async function(dispatch){
        var json = await axios.get('http://localhost:3001/login')
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