import React from "react";
import { Link } from "react-router-dom";
import {useParams} from "react-router-dom";
import style from "./nav.module.css"

const NavHome = () => {

  const { _id } = useParams();

  return (
      <div className={style.all}>
        <div className={style.title}>
          <h3>Patitas!</h3>
        </div>
        <div className={style.links}>
            <Link to = "/prePost">
                <h2> Postear animal  </h2>
            </Link>
            <Link to = {`/perfil-user/${_id}`}>
                <h2> Perfil </h2>
            </Link>
            <Link to = "/">
                <h2> LogOut </h2>
            </Link>
        </div>
      </div>
  );
};
export default NavHome;