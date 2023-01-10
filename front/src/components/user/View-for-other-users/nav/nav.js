import React from "react";
import { Link } from "react-router-dom";
import style from "./nav.module.css"

const NavDetail = () => {

  return (
      <div className={style.all}>
        <div className={style.title}>
          <h3>Patitas!</h3>
        </div>
        <div className={style.links}>
            <Link to = "/">
                <h2> LogOut </h2>
            </Link>
            <Link to = "/home">
                <h2> Volver al inicio </h2>
            </Link>
        </div>
      </div>
  );
};
export default NavDetail;