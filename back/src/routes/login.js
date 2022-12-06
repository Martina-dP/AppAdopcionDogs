const { Router } = require("express");
const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const { generToken } = require("../utils/jwt");

const router = Router();

router.post("/", async (req, res) => {

  const { mail, password } = req.body

  try {

    const user = await User.findOne({mail})
    if ( !user ) {
      return res.status(400).json({
        ok: false,
        msg: "Datos incorrectos"
      })
    }

    const validatePassword = bcryptjs.compareSync( password, user.password )
    if ( !validatePassword ) {
      return res.status(400).json({
        ok: false,
        msg: "Datos incorrectos"
      })
    }

    const token = await generToken( user._id, user.name )

    res.json({
      ok: true,
      id: user._id,
      token,
      msg: "Se inicio sesion correctamente"
    })

  } catch (error) {
    console.log(err)
    res.json(err);
  }

});

module.exports = router;