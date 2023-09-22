import React from "react";
import {useEffect} from "react";
import {getUserDetails} from "../../../actions/index"
import {useParams} from "react-router-dom";
import NavDetailView from "../nav/navDatails"
import { useSelector, useDispatch } from "react-redux";

const DetailsUser = () => {

  const dispatch = useDispatch()
  const { _id } = useParams();

  useEffect(() =>{ 
    dispatch(getUserDetails(_id));
  },[dispatch])

  const userD = useSelector(state => state.detailsUser) 
  console.log(userD, "userD")

  return (
    <div >
      <NavDetailView/>
      <h2> Mi perfil </h2>
      <h2> {userD.name}</h2>
      <h2> {userD._id}</h2>
    </div>
  );
};
export default DetailsUser;
