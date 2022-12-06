const { Router } = require("express");
const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

const router = Router();

router.post("/", async (req, res) => {

  try {
    const user = await User.findOne({mail: req.body.mail})
    if(!user) return res.status(400).json({error: 'Usuario no encontrado'})

    const validPassword = await bcryptjs.compare(req.body.password, user.password)
    if(!validPassword) return res.status(400).json({error: 'Constraseña invalida'})

    res.json({
        data: 'bienvenido'
    })
  } catch (error) {
    console.log(err)
    res.json(err);
  }

});

module.exports = router;