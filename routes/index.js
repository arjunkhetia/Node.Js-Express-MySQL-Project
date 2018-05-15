var express = require('express');
var router = express.Router();
var mysqlpool = require('../dbconfig');

/* GET home page. */
router.get('/', function(req, res, next) {
  mysqlpool.getConnection(function(err, connection) {
    connection.query('SELECT * FROM mysql_table', function (error, results, fields) {
      connection.release();
      if (error) throw error;
      res.render('index', { title: 'Express', data: JSON.stringify(results, null, 4) });
    });
  });
});

module.exports = router;
