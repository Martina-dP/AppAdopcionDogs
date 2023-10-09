import React from "react";
import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link, useParams} from "react-router-dom";
import {getAnimalDetails, getUser} from "../../../actions/index"
import img1 from "../../../img/imgCardDefault.webp"
import style from "./detail.module.css";

const DetailAnimal = () => {

  const dispatch = useDispatch()
  const { _id } = useParams();

  useEffect(() =>{ 
    dispatch(getAnimalDetails(_id))
    dispatch(getUser());
  },[dispatch])

  const detailsAnimals = useSelector(state => state.detailsAnimal) 
  console.log(detailsAnimals, "detailsAnimals")

  return (
    <div  className={style.allC}>
      <div className={style.info}>
        <div className={style.div1}> 
          <img className={style.img} src={img1} alt=" img not found"/>
          <h2> {detailsAnimals.name} </h2>
          <h2> Edad: {detailsAnimals.age}</h2>
          <Link to="/home">
            Volver
          </Link>
        </div>
        <div className={style.div4}>
          <div className={style.div2}> 
            <h2> Ubicacion : {detailsAnimals.location} </h2>
            <h2> Tamaño : {detailsAnimals.size} </h2>
            <h2> Sexo : {detailsAnimals.sex} </h2>
            <h2> Descripcion :</h2>
            <h2> {detailsAnimals.description} </h2>
          </div>
          <div className={style.div3}> 
            <h2> Informacion del contacto </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailAnimal;