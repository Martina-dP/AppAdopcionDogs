import React from 'react'
import style from './about.module.css'
import foto2 from "../../../img/img2.jpg"

const About = () => {
    return (
        <div className={style.all} id='about'>
            <div>
            <img className={style.img} src={foto2} alt='notFound'/>
            </div>
            <div className={style.info}>
                <h1 className={style.title}>Sobre Nosotros</h1>
                <p>Esta pagina fue creado con el fin de ayudar a todos aquellos animalitos 
                    que se encuntran sin hogar o que la familia en la que esta no lo pueden seguir cuidando.</p>
                <p>Crea tu cuenta y comenza a ayudarlos.</p>
                <p>Una vez registrado vas a poder adoptar o hacer una publicacion para conseguirle un hogar a ese animalito que lo necesita.</p>
            </div>
        </div>
    )
}

export default About