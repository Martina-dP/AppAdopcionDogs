const { Router } = require("express");
const User = require("../../models/User");
const bcryptjs = require("bcryptjs");

const router = Router();

router.post("/", async function( req, res) {
    const {
        name,
        lastName,
        mail,
        password,
        phone  } = req.body;

    try {
        //validar si ya alguien se registro con ese mail o no 
        const userCreated = await User.create({
                mail: mail,
                name: name,
                lastName: lastName,
                phone: phone,
                password: password
            })
        res.json(userCreated);
        console.log("user", userCreated) 

    } catch (err) {
        console.log(err)
        res.json(err);
    }
});

module.exports = router;