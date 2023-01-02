import React from "react";
import style from "./card.module.css"

function CardUser({name, mail}){

    return(
        <div className={style.all}>
            <h2 > Nombre : {name} </h2>
            <h3 > Mail : {mail} </h3>
        </div>
    )} 

export default CardUser;