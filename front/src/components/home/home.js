import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getUser,getAnimalFalse} from "../../actions/index"

const Home = () => {

  const dispatch = useDispatch()

  useEffect(() =>{ 
    dispatch(getUser());
    dispatch(getAnimalFalse());
  },[dispatch])

  const users = useSelector(state => state.user) 
  console.log(users, "users")

  const animals = useSelector ((state) => state.animal) 
  console.log(animals, "animals")

  return (
    <div >
      <h1>Estas en el inicio</h1>
    <ul>
    { users?.length > 0 ? (
      users.map((us) => (
        <li key={us._id}>name: {us.name}</li>
      )) ) : (
        <div>
          <p>No se encontraron usuarios</p>
        </div>
      )}
    </ul>
      
    </div>
  );
};
export default Home;