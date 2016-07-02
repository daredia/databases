var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (username) {
      console.log('username', username);

      db.dbConnection.connect();

      db.dbConnection.query(`INSERT INTO users (username) VALUES ('${username}')`, function(err, rows, fields) {
        if (err) throw err;
       
        console.log('The solution is: ', rows);
      });
       
      db.dbConnection.end();


    }
  }
};


