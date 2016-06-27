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

////////////////////////////////////////////////////////////////////////////////
router.post("/save", function(req, res, next) {
  webboard.saveHeader(/*permission.getID(req)*/'1', req.body.title, req.body.content, function(id){
    res.json({
      status:true,
      id:id
    });
  }, function(errorMessage){
    console.log("error m : ", errorMessage);
    res.json({
      status:false,
      error:errorMessage
    });
  });
});

module.exports = router;
