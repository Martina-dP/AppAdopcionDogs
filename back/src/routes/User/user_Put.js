const { Router } = require("express");
const User = require("../../models/User")

const router = Router();

router.put("/:id", async (req, res) => {
    const {_id} = req.params
    const {mail, phone} = req.body
    
    try{  
        const user = await User.findOne({
            where: {
                _id: _id
            }
        })
        mail && (user.mail = mail)
        phone && (user.phone = phone)

        const userUpdated = await user.save()
        res.status(200).send(userUpdated);

    }catch{
        res.status(500).send("Ecurrió un error");
    }
});

module.exports = router;