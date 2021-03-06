var mainRouter = require('express').Router();
var mainController = require('../controllers/controller.js');
var apiController = require('../controllers/apiController.js');

// Declare routes for our resource endpoints and 
// specify what controller method to use for each

// serve up index page on default
mainRouter.route('/')
  .get(mainController.default);

// get all view locations when a user inputs a zip code
mainRouter.route('/getAll')
  .get(apiController.getAll);

module.exports = mainRouter;