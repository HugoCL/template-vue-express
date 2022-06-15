const express = require('express');
const testController = require('../controllers/testController');

// Create the router
const testRouter = express.Router();

// Add the routes to the router
testRouter.get('/', testController.getTests);

testRouter.get('/:id', testController.getTestById);

module.exports = testRouter;