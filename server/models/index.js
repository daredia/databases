var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (msgObj) {
      console.log('message inside models.messages.post:', msgObj);
      var createdAt = Date.now();
      // ***
      // TODO: replace hardcoded values with dynamic ones based on querying for appropriate IDs
      // ***
      var query = 'INSERT INTO messages (user, text, room) VALUES ("1", "';
      query += msgObj.message;
      query += '", "1")';

      db.dbConnection.query(
        
        query,
        function(err, rows, fields) {
          if (err) {
            throw err;
          }
          console.log('inserted message into table');
        });
       
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (username) {

      db.dbConnection.query(`INSERT INTO users (username) VALUES ('${username}')`, function(err, rows, fields) {
        if (err) {
          throw err;
        }
      });


    }
  }
};


