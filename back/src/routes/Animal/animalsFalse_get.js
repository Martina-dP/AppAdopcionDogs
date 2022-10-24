const { Router } = require("express");
const Animal = require("../../models/Animal");

const router = Router();

router.get("/", async function( req, res) {
    const animals = await Animal.find({
      where: {
        condition: false
      },
    });
      res.json(animals);
});

module.exports = router;