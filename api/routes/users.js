var express = require('express');
var router = express.Router();
var controller = require('../controllers/users');

/* GET users listing. */

router
  .route('/')
  .get(controller.users)
  .post(controller.register);

  router
    .route('/:id')  
    .put(controller.update)
    .delete(controller.delete)

module.exports = router;
