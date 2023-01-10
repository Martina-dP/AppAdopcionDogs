import React from "react";
import { Link } from "react-router-dom";
import style from "./card.module.css"

function Card ({name, age, location, _id}){

    return(
        <div className={style.all}>
            <Link to={`/animal/${_id}`}>
                <h2 > Nombre : {name} </h2>
                <h2 > Age : {age} </h2>
                <h2> Location : {location} </h2>
            </Link>
        </div>
    )} 

export default Card ;