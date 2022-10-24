const { Router } = require('express');

            // User
const userGet = require("./User/user_Get")
const userGetDetails = require("./User/userDetails_Get")
const userPost = require("./User/user_Post")
const userPut = require("./User/user_Put")

            // Dog
const animalsFalseGet = require("./Animal/animalsFalse_get")
const animalsTrueGet = require("./Animal/animalsTrue_Get")
const animalGetDetails = require("./Animal/animalDetails_Get")
const animalsPost = require("./Animal/animals_Post")
const animalsPut = require("./Animal/animals_Put")

            // Otros
const login = require("./login")
const forgotPassword = require("./forgotPassword")
const newPassword = require("./newPassword")

const router = Router();

            // User
router.use('/users', userGet);
router.use('/user', userGetDetails);
router.use('/createUser', userPost);
router.use('/updateUser', userPut);

            // Dog
router.use('/animals', animalsFalseGet);
router.use('/animalsAdopted', animalsTrueGet);
router.use('/animal', animalGetDetails);
router.use('/postAnimal', animalsPost);
router.use('/updatedAnimal', animalsPut);

            // Otros
router.use('/login', login);
router.use('/forgotPassword', forgotPassword);
router.use('/newPassword', newPassword);

module.exports = router;