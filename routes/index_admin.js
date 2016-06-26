var express = require('express');
var router = express.Router();
var webboard = require("../library/database-admin");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index_admin', { title: 'Express' });
});

router.post('/webboard_list', function(req, res, next) {
  // console.log("perrmission : ", permission.readToken(req));
  // console.log("cookie = ", req.cookies);
  webboard.listHeader(function(data){
    res.json({
      status:true,
      data:data
    });
  }, function(errorMessage){
    console.log(errorMessage);
    res.json({
      status:false,
      error:errorMessage
    });
  });
});

module.exports = router;
