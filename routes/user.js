
const useradmin = require('express').Router();
const userController = require('../controller/user');


useradmin.post("/login", userController.Login);
useradmin.post("/register", userController.registration);

module.exports = useradmin;