import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getUser} from "../../actions/index"
import { Link } from "react-router-dom";
import CardUser from "../card/card";
import style from "./home.module.css";

const Home = () => {

  const dispatch = useDispatch()

  useEffect(() =>{ 
    dispatch(getUser());
  },[dispatch])

  const users = useSelector(state => state.user) 
  console.log(users, "users")

  return (
    <div >
      <h1>Estas en el inicio</h1>
    <ul className = {style.cards}>
    { users?.length > 0 ? (
      users.map((us) => {
        return (
           <CardUser 
           name = {us.name}
           mail = {us.mail}
           />
        );
      }) ) : (
        <div>
          <p>No se encontraron usuarios</p>
        </div>
      )}
    </ul>
    <br/>
      <Link to = "/prePost">
        <button> Postear animal  </button>
      </Link>
    </div>
  );
};
export default Home;





