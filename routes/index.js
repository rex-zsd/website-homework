var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	var ip = req.headers['x-forwarded-for']||req.connection.remoteAddress||req.socket.remoteAddress||req.connection.socket.remoteAddress;
	var filte = /\d+.\d+.\d+.\d/g;
	var address = filte.exec(ip);
	res.render('layout', { 
		title: 'Rex',
		IsHome: true,
		Ip: address
	});
});

module.exports = router;
