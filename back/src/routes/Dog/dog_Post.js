const { Router } = require("express");
const Dog = require("../../models/Dog");
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
        console.log("user",user)

        const dogCreated = new Dog({
            name: name,
            img: img,
            description: description,
            location: location,
            age: age,
            size: size, 
            sex: sex, 
            condition: condition,
            userId: user._id
            })

    try {
     
        const saveDog = await dogCreated.save()

        user.dogsId = user.dogsId.concat(saveDog._id)
        await user.save()

        res.json(saveDog);
        console.log("dog", saveDog) 

    } catch (err) {
        console.log(err)
        res.json(err);
    }
});

module.exports = router;