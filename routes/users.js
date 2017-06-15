var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Details = require('../models/details');

var usersRouter = express.Router();
usersRouter.use(bodyParser.json());
/* GET users listing. */

usersRouter.post('/register',function(req, res, next) {
	Details.create(req.body,function(err, detail){
		if(err){throw err;}
		console.log("detail inserted");
		res.json({"success":"inserted successfully"});
	});
});

usersRouter.get('/search/:name',function(req, res, next){
	Details.find({username:name}).exec(function(err, detail){
		if(err) throw err;
		res.json(detail);
	});
});

usersRouter.delete('/delete',function(req, res, next){
	Details.remove(function(err, res){
		if(err) throw err;
		res.json(res);
	});
});
module.exports = usersRouter;
