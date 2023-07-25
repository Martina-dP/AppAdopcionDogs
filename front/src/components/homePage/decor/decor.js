import React from 'react'
import style from './decor.module.css'
import foto1 from "../../../img/img1.jpg"
import foto3 from "../../../img/img3.jpg"

const Decor = () => {
    return (
        <div className={style.all} id='decor'>
                <img className={style.img} src={foto1} alt='notFound'/>
                <img className={style.img} src={foto3} alt='notFound'/>

        </div>
    )
}

export default Decor