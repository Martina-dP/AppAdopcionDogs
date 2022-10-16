const { Router } = require("express");
const User = require("../models/User");
const bcryptjs = require("bcryptjs");

const router = Router();

router.put("/:id", async (req, res) => {
    const {password} = req.body
    const {_id} = req.params

    if(!password){
        res.status(400).send({message: "faltan datos"});
    }

    try{  
        const newPass = await User.findOne({
            where: {
                _id: _id
            }
        })

        let passwordHash = await bcryptjs.hash(password, 8);
        newPass.password = passwordHash
        await newPass.save()

        res.status(200).send("Contraseña actualizada");
    }catch(err){
        res.status(500).send("Ecurrió un error", err);
    }
});

module.exports = router;