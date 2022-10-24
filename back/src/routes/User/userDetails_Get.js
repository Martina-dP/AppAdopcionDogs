const { Router } = require("express");
const Dog = require("../../models/Animal");
const User = require("../../models/User");

const router = Router();

router.get("/:id", async function( req, res) {
    const { _id } = req.params;

    try {
        const datos = await User.findOne({
          where: {
            _id: _id,
          },
          include: Dog
        });
        
        const detalleDatos = {
            name: datos.name,
            lastName: datos.lastName,
            mail: datos.mail,
            phone: datos.phone,
            status: datos.status,
        };
    
        if (detalleDatos) {
          res.status(200).send(detalleDatos);
        } else {
          res.status(404).send("No se encontró al usuario");
        }
      } catch {
        res.status(500).send("Ecurrió un error");
      }

});

module.exports = router;