var models = require('../models');
var app = require('../app.js');

module.exports = {
  messages: {
    get: function (req, res) { // a function which handles a get request for all messages
      models.messages.get(res);
    }, 
    post: function (req, res) {
      models.messages.post(req.body, res);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {

      models.users.post(req.body.username, res);
    }
  }
};

