import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getUser} from "../../actions/index"
import { Link } from "react-router-dom";

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
    <ul>
    { users?.length > 0 ? (
      users.map((us) => (
        <li key={us._id}>
          name: {us.name}
          <br/>
          phone: {us.phone}
        </li>
      )) ) : (
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





