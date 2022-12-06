import React from "react";
import style from "./faq.module.css"
import foto5 from "../../../img/img5.png"

const Faq = () => {

  return (
      <div className={style.all} id='faq'>
        <div className={style.text}>
            Preguntas 
            <p>Puedo adoptar mas de 1 animal?</p>
              <p>Si, no hay limite pero si vemos que una persona ya va por la cuarta adopcion le hablaremos.</p>
            <p>Se puede devolver un animal?</p>
              <p> ..... . Pero en caso de arrepentimiento preferimos que nos escriban y nos volvemos a hacer cargo antes 
              de que lo dejen descuidado, abandonado o se lo den a cualquier persona.</p>
            <div>
              <p>Como puedo tener una idea del tamaño de un perro?</p>
                <ul>
                  <li>Pequeños hasta 12 kg</li>
                  <li>Medianos hasta 25 kg</li>
                  <li>Grandes a partir de 25 kg</li>
                </ul>
              <p>Como puedo tener una idea del tamaño de un gato?</p>
                <ul>
                  <li>Pequeños entre 2-3 Kg</li>
                  <li>Medianos entre 3-5 Kg</li>
                  <li>Grandes entre 5-7 Kg</li>
                </ul>
            </div>
        </div>
        <img className={style.img} src={foto5} alt='notFound'/>
      </div>
  );
};
export default Faq;