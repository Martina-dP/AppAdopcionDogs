const { Router } = require("express");
const Animal = require("../../models/Animal");

const router = Router();

router.put("/:id", async (req, res) => {
    const {_id} = req.params
    const {location, condition, description} = req.body
    
    try{  
        const animal = await Animal.findOne({
            where: {
                _id: _id
            }
        })
        location && (animal.location = location)
        condition && (animal.condition = condition)
        description && (animal.description = description)

        const animalUpdated = await animal.save()
        res.status(200).send(animalUpdated);

    }catch{
        res.status(500).send("Ecurrió un error");
    }
});

module.exports = router;