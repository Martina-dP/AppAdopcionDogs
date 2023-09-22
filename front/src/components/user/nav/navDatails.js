import React from "react";
import { Link } from "react-router-dom";
import style from "./navDatails.module.css"

const NavDetailView = () => {

  return (
    <div className={style.all}>
      <div className={style.title}>
        <h3>Patitas!</h3>
      </div>
      <div className={style.links}>
          <Link to = "/home">
              <h2> Inicio </h2>
          </Link>
          <Link to = "/">
              <h2> LogOut </h2>
          </Link>
      </div>
    </div>
);
};
export default NavDetailView;