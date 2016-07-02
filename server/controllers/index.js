var models = require('../models');
var app = require('../app.js');

module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {

      models.users.post(req.body.username);

      //parse the JSON from the req body
        //extract the username
        //call the method on the model and pass the username 
      //res with 201
      //res end
    }
  }
};

