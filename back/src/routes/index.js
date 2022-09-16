const { Router } = require('express');

            // User
const userGet = require("./User/user_Get")
const userPost = require("./User/user_Post")

            // Dog
const dogsFalseGet = require("./Dog/dogsFalse_get")
const dogsTrueGet = require("./Dog/dogsTrue_Get")
const dogPost = require("./Dog/dog_Post")
const dogPut = require("./Dog/dog_Put")

const router = Router();

            // User
router.use('/users', userGet);
router.use('/createUser', userPost);

            // Dog
router.use('/dogs', dogsFalseGet);
router.use('/dogsAdopted', dogsTrueGet);
router.use('/postDog', dogPost);
router.use('/updatedDog', dogPut);

module.exports = router;