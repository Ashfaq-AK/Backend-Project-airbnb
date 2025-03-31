const express = require('express');
const hostRouter = express.Router();

const hostController = require('../controller/hostController')

hostRouter.get('/host', hostController.hostHome)

hostRouter.get('/AddHome', hostController.AddHome)

hostRouter.post('/AddHome', hostController.postAddHome)

module.exports = hostRouter;