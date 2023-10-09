const { Router } = require("express");
const Animal = require("../../models/Animal");

const router = Router();

router.get("/", async function( req, res) {
  try {
    const animals = await Animal.find({
      where: {
        condition: false
      },
    });
      res.json(animals);
      console.log("estoy dentro")
  } catch(err) {
    res.send("Ecurrió un error");
    console.log(err, "error")
  }
});

module.exports = router;