const { Router } = require("express");
const Dog = require("../../models/Dog");
const User = require("../../models/User");

const router = Router();

router.get("/:id", async function( req, res) {
    const { _id } = req.params;

    try {
        const datos = await Dog.findOne({
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
        
        const detalleDatos = {
            name: datos.name,
            img: datos.img,
            description: datos.description,
            location: datos.location,
            age: datos.age,
            size: tamaño,
            sex: sexo
        };
    
        if (detalleDatos) {
          res.status(200).send(detalleDatos);
        } else {
          res.status(404).send("No se encontró al perro");
        }
      } catch {
        res.status(500).send("Ecurrió un error");
      }

});

module.exports = router;