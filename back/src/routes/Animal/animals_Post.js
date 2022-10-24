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
        type,
        userId  } = req.body;

        const user = await User.findById(userId);
        console.log("user",user)

        const animalCreated = new Animal({
            name: name,
            img: img,
            description: description,
            location: location,
            age: age,
            size: size, 
            sex: sex, 
            condition: condition,
            type: type,
            userId: user._id
            })

    try {
     
        const saveAnimal = await animalCreated.save()

        user.animalId = user.animalId.concat(saveAnimal._id)
        await user.save()

        res.json(saveAnimal);
        console.log("dog", saveAnimal) 

    } catch (err) {
        console.log(err)
        res.json(err);
    }
});

module.exports = router;