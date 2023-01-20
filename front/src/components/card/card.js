import React from "react";
import { Link } from "react-router-dom";
import Foto1 from "../../img/imgDefault.jpg"
import style from "./card.module.css"

function Card ({name, age, location, _id}){

    return(
        <div className={style.all}>
            <img className={style.img} src={Foto1} alt="notFound"/>
            <Link  to={`/animal/${_id}`}>
                <div className={style.info}>
                    <h2 > Nombre : {name} </h2>
                    <h2 > Age : {age} </h2>
                    <h2> Location : {location} </h2>
                </div>
            </Link>
        </div>
    )} 

export default Card ;