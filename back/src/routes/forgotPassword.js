const { Router } = require("express");
const nodemailer = require("nodemailer");
const User = require("../models/User");
const { MAIL_ADDRESS, MAIL_PASSWORD } = process.env;
require('dotenv').config();

const frontURL = "http://localhost:3000";

const router = Router();

router.post("/", async function( req, res) {
    const { mail } = req.body;

    if(!mail){
        res.status(400).send({message: "El mail requerido"});
    }

    try {
        const user = await User.findOne({
            where: {
                mail: mail
            },
        });

        if (user) {

            const verificaciónLink = `${frontURL}/new-password/${user._id}`
            console.log(verificaciónLink)
        
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: `${MAIL_ADDRESS}`,
                    pass: `${MAIL_PASSWORD}`
                }
            });
            
            const infoMail = {
                from: `${MAIL_ADDRESS}`, // sender address
                to: `${user.mail}`, // list of receivers
                subject: "Link para crear nueva contraseña", // Subject line
                html:  `<b>Ingresá al siguiente link para recuperar la contraseña</b>
                        <a href="${verificaciónLink}">${verificaciónLink}</a>`
            };
        
            transporter.sendMail(infoMail, (err) =>{
                if (err) console.log("Hubo un error", err)
            })

            res.send("Mail enviado")
        }
            res.send("Este mail no esta registrado")

    } catch (error) {
        console.error(error);
    }

});


module.exports = router;