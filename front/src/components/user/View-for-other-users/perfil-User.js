import React from "react";
import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {useParams} from "react-router-dom";
import {getUserDetails} from "../../../actions/index"
import NavDetail from "./nav/nav"

const PerfilUser = () => {

  const dispatch = useDispatch()
  const { _id } = useParams();

  useEffect(() =>{ 
    dispatch(getUserDetails(_id));
  },[dispatch])

  const users = useSelector(state => state.user) 
  console.log(users, "users")

  return (
    <div >
      <NavDetail/>
      <h1> Mi perfil </h1>
      <div>
        <div>
          <h2> {users.name} </h2>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
};
export default PerfilUser;