import React from 'react'
import style from './about.module.css'
import foto2 from "../../../img/img2.jpg"

const About = () => {
    return (
        <div className={style.all} id='about'>
            <img className={style.img} src={foto2} alt='notFound'/>
            <div className={style.info}>
                <h1 className={style.title}>Sobre Nosotros</h1>
                <p>Esta pagina fue creado con el fin de ayudar a todos aquellos animalitos 
                    que se encuntran sin un hogar o que la familia en la que esta no lo pueden seguir cuidando.</p>
                <p>Si te decides por adoptar en Patitas, te lo llevarás a casa vacunado, desparasitado, 
                    con análisis de leishmaniosis y esterilizado (en caso de cachorros o de animales que no estén aún 
                    esterilizados en el momento de la adopción, dicha intervención será realizada gratuitamente por nuestros 
                    veterinarios).</p>
                <p>El adoptante se compromete a abonar entre $1.500 y $5.000 po unica vez para que podamos seguir salvando la vida de estos animales.</p>
                <p>Una vez registrado vas a poder adoptar o hacer una publicacion para conseguirle un hogar a ese animalito que lo necesita.</p>
                <p>Crea tu cuenta y comenza a ayudarlos.</p>
            </div> 
        </div>
    )
}

export default About