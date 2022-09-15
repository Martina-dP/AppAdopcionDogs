const { Router } = require("express");
const Dog = require("../../models/Dog");

const router = Router();

router.put("/:id", async (req, res) => {
    const {id} = req.params
    const {location, condition} = req.body
    
    try{  
        const dog = await Dog.findOne({
            where: {
                id: id
            }
        })
        location && (dog.location = location)
        condition && (dog.condition = condition)

        const dogUpdated = await dog.save()
        res.status(200).send(dogUpdated);

    }catch{
        res.status(500).send("Ecurrió un error");
    }
});

module.exports = router;