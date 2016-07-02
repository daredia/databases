var controller = require('./controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/messages', controller.messages.get);

router.post('/messages', controller.messages.post);

router.get('/users', controller.users.get);

router.post('/users', controller.users.post);

// TODO: add route for / so that it loads up chatterbox client index.html
// TODO: inspect get request fetch method data


module.exports = router;

