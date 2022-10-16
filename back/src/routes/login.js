const { Router } = require("express");
const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

const router = Router();

router.post("/", async (req, res) => {
  const { mail, password } = req.body;

  try {
    const user = await User.findOne({
      where: {
        mail: mail,
      },
    });

    if(!User.mail) return res.send("No existe mail registrado")

    let isValid;
    if (user && user.status === "active") {
      var userData = {
        id: user.id,
        mail: user.mail,
      };

      isValid = await bcryptjs.compare(password, user.password);

    } else if  (isValid) {

      const token = jwt.sign(userData, SECRET, { expiresIn: 120 * 120 });

      return res.status(200).send({
        validate: true,
        id: userData.id,
        mail: userData.mail,
        token,
      });
    } else {
      return res.status(200).json({
        validate: false,
      });
    }
  } catch {
    res.status(500).send("Ocurrió un error");
  }
});

module.exports = router;