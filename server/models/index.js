var db = require('../db');

module.exports = {
  messages: {
    get: function (res) { // a function which produces all the messages

      db.dbConnection.query(
        'select * from messages;',
        function(err, rows, fields) {
          if (err) {
            throw err;
          }
          res.send(JSON.stringify(rows));
        }
      );

    }, 
    post: function (msgObj, res) { // a function which can be used to insert a message into the database
      console.log('message inside models.messages.post:', msgObj);
      var createdAt = Date.now();
      var userID = '';
      var userQ = 'select id from users where username = "' + msgObj.username + '";';

      db.dbConnection.query(
          
        userQ,
        function(err, rows, fields) {
          if (err) {
            throw err;
          }
          userID = rows[rows.length - 1].id; // maybe need to handle if it returns just one object and not an array
          var query = 'INSERT INTO messages (user, text, room) VALUES ("';
          query += userID + '", "';
          query += msgObj.message;
          query += '","' + msgObj.roomname + '");';

          db.dbConnection.query(query, function(err, rows, fields) {
            if (err) {
              throw err;
            }
            res.end('successfully posted message');
          });
        }
      );
       
    } 
       
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (username, res) {

      db.dbConnection.query(`INSERT INTO users (username) VALUES ('${username}')`, function(err, rows, fields) {
        if (err) {
          throw err;
        }
        res.end('successfully posted username');
      });


    }
  }
};


