const { Router } = require('express');

            // User
const userGet = require("./User/user_Get")
const userPost = require("./User/user_Post")

            // Dog
const dogGet = require("./Dog/dog_Get")
const dogPost = require("./Dog/dog_Post")
const dogPut = require("./Dog/dog_Put")

const router = Router();

            // User
router.use('/users', userGet);
router.use('/createUser', userPost);

            // Dog
router.use('/dogs', dogGet);
router.use('/postDog', dogPost);
router.use('/updatedDog', dogPut);

module.exports = router;