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

  const users = useSelector(state => state.detailsUser) 
  console.log(users, "users")

  return (
    <div >
      <NavDetail/>
      <div>
        <div>
          <h2> {users.name} </h2>
          <h2> {users._id} </h2>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
};
export default PerfilUser;