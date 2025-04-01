const express = require('express');
const userRouter = express.Router();

const userController = require('../controller/userController')

userRouter.get('/user', userController.userIndex)
userRouter.get('/home', userController.userHome)
userRouter.get('/bookings', userController.userBooking)
userRouter.get('/favourite', userController.userFavourite)


module.exports = userRouter;