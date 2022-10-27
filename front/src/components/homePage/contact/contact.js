import React from 'react'
import style from "./contact.module.css"

const Contact = () => {

    return (
        <div className={style.all} id='contact'>
            <div className={style.title}>
                <h1>Contacto</h1>
            </div>
            <div className={style.info}>
                <div>
                    <h4>Teléfono</h4>
                    <p>+54 1168525749</p>
                </div>
                <div>
                    <h4>Email</h4>
                    <p>myproyectsweb@gmail.com</p>
                </div>
                <div>
                    <h4>Horario</h4>
                    <p>Lunes - Viernes : 8:00 am - 8:00 pm</p>
                    <p>Sábado : 8:00 am - 12:00 pm</p>
                </div>
                <div>
                    <h4>Area de Servicio</h4>
                    <p>Argentina</p>
                </div>
            </div>
        </div>
    )
}

export default Contact