const { Router } = require("express");
const Animal = require("../../models/Animal");
const User = require("../../models/User");

const router = Router();

router.get("/:_id", async function( req, res) {
    const { _id } = req.params;

    try {
        const datos = await Animal.findOne({
          where: {
            _id: _id,
          },
          include: User
        });

        let tamaño;
        if(datos.size === "Chico") tamaño = "Chico"
        if(datos.size === "Mediano") tamaño = "Mediano"
        if(datos.size === "Grande") tamaño = "Grande"

        let sexo;
        if(datos.sex === "Hembra") sexo = "Hembra"
        if(datos.sex === "Macho") sexo = "Macho"

        let tipo;
        if(datos.type === "Perro/a") tipo = "Perro/a"
        if(datos.type === "Gato/a") tipo = "Gato/a"
        
        const detalleDatos = {
            name: datos.name,
            img: datos.img,
            description: datos.description,
            location: datos.location,
            age: datos.age,
            size: tamaño,
            sex: sexo,
            type: datos.tipo,
            userId: datos.userId
        };

        if (detalleDatos) {
          res.status(200).send(detalleDatos);
        } else {
          res.status(404).send("No se encontró al animal");
        }
      } catch(err) {
        res.status(500).send("Ecurrió un error");
        console.log(err)
      }

});

module.exports = router;