import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAnimalFalse} from "../../actions/index"
import { Link } from "react-router-dom";
import Card from "../card/card";
import {getUserDetails} from "../../actions"
import {useParams} from "react-router-dom";
import style from "./home.module.css";
import NavHome from "./nav/nav";

const Home = () => {

  const dispatch = useDispatch()
  const { _id } = useParams();

  useEffect(() =>{ 
    dispatch(getAnimalFalse());
    dispatch(getUserDetails(_id));
  },[dispatch])

  const animalsFalse = useSelector(state => state.animalFalse) 
  console.log(animalsFalse, "animalsFalse")

  return (
    <div >
      <NavHome/>
    <ul className = {style.cards}>
    { animalsFalse?.length > 0 ? (
      animalsFalse.map((us) => {
        return (
          <Card 
            key={us._id}
            name = {us.name}
            age = {us.age}
            location = {us.location}
            _id = {us._id}
          />
        );
      }) ) : (
        <div>
          <p>No se encontraron usuarios</p>
        </div>
      )}
    </ul>
    </div>
  );
};
export default Home;





