import React from 'react'
import style from './decor.module.css'
import foto1 from "../../../img/img1.jpg"
import foto3 from "../../../img/img3.jpg"

const Decor = () => {
    return (
        <div className={style.all} id='decor'>
            <div>
                <img className={style.img1} src={foto1} alt='notFound'/>
            </div>
            <div>
                <img className={style.img3} src={foto3} alt='notFound'/>
            </div>
        </div>
    )
}

export default Decor