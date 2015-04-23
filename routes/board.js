var express = require('express');
var router = express.Router();
var Comment = require('../models/comment');

/* GET home page. */
router.get('/', function(req, res) {
	Comment.find({},function(err,result) {
		if(!err) {			
			res.render('board', { 
  				title: 'Board',
  				com : result
  			});
		}
	});
});

router.post('/',function(req, res) {
	var date = new Date();
	var month = date.getMonth()+1;
	var time = date.getFullYear()+'/'+month+'/'+date.getDate()+'	'+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
	//增加新纪录
	var comment = new Comment({  
    	username : req.body['username'],  
      	comment : req.body['comment'],
      	time : time
    });
    comment.save(function (err, comment) {  
        if(!err) {
          res.redirect('/board');  
        }  
    });
    //删除记录
	// var comment = {
	// 	username : req.body['username']
	// };
	// Comment.remove(comment,function(err){
	// 	if(!err){
	// 		console.log("OK");
	// 		res.redirect('/board');
	// 	}
	// })
})

module.exports = router;