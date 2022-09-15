const { Router } = require("express");
const Dog = require("../../models/Dog");

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
        condition  } = req.body;

    try {
        const dogCreated = await Dog.create({
            name: name,
            img: img,
            description: description,
            location: location,
            age: age,
            size: size, 
            sex: sex, 
            condition: condition
            })
        res.json(dogCreated);
        console.log("dog", dogCreated) 

    } catch (err) {
        console.log(err)
        res.json(err);
    }
});

module.exports = router;