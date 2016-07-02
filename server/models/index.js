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
      var userID = '';
      var userQ = 'select id from users where username = "' + msgObj.username + '";';

      db.dbConnection.query(
          
        userQ,
        function(err, rows, fields) {
          if (err) {
            throw err;
          }
          userID = rows[rows.length - 1].id;
          var query = 'INSERT INTO messages (user, text, room) VALUES ("';
          query += userID + '", "';
          query += msgObj.message;
          query += '","' + msgObj.roomname + '");';

          db.dbConnection.query(query, function(err, rows, fields) {
            if (err) {
              throw err;
            }
            console.log(rows);
            console.log('inserted message into table');
          });
          // console.log('rows: ', rows[rows.length - 1].id);
          // console.log('fields: ', fields);
        }
      );
       
    } // a function which can be used to insert a message into the database



    //   db.dbConnection.query(
        
    //     query,
    //     function(err, rows, fields) {
    //       if (err) {
    //         throw err;
    //       }
    //       console.log('inserted message into table');
    //     });
       
    // } // a function which can be used to insert a message into the database
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


