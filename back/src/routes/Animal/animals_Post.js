const { Router } = require("express");
const Animal = require("../../models/Animal");
const User = require("../../models/User");

const router = Router();

router.post("/", async function( req, res) {
    const {
        name,
        img,
        description,
        location,
        age,
        size, 
        sex,
        condition,
        userId  } = req.body;

        const user = await User.findById(userId);

        const animalCreated = new Animal({
            name: name,
            img: img,
            description: description,
            location: location,
            age: age,
            size: size, 
            sex: sex, 
            condition: condition,
            })

    try {
     
        const saveAnimal = await animalCreated.save()

        user.animalId = user.animalId.concat(saveAnimal._id)
        await user.save()

        res.json(saveAnimal);

    } catch (err) {
        console.log(err)
        res.json(err);
    }
});

module.exports = router;