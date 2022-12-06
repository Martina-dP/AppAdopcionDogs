import React from 'react'
import style from "./contact.module.css"

const Contact = () => {

    return (
        <div className={style.all} id='contact'>
            <div className={style.contact}>
                <div className={style.title}>
                    <h1>Contacto</h1>
                </div>
                <div className={style.info}>
                    <div className={style.info2}>
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
                    </div>       
                    <h4>Area de Servicio</h4>
                    <p>Argentina</p>
                </div>
            </div>
            <form className={style.form}>
                <div className={style.datos}>
                    <div>
                        <input
                            type='text'
                            placeholder='Nombre' 
                            name="name"
                        />
                    </div>
                    <div>
                        <input
                            type='text'
                            placeholder='Email'
                             name="mail"
                        />
                    </div>
                </div>
                <div>
                    <textarea type='text' placeholder='Escribe tu mensaje aquí...'
                    name="message"
                    />
                </div>
                <div>
                    <div>
                        <button type = "submit"> Enviar </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Contact