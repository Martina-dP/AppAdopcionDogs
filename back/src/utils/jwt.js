const jwt = require("jsonwebtoken");

const generToken = ( _id, name ) => {

    return new Promise( (resolve, rejeat) =>{ 

        const data = { _id, name }

        jwt.sign(data, process.env.SECRET , {
            expiresIn: '4h'
        }, (err, token) => {

            if (err){
                console.log(err)
                rejeat('No se pudo generar el token')
            }

            resolve(token)
        })
    })
}

module.exports = {
    generToken
}