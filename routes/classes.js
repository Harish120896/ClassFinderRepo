var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Classes = require('../models/class');

var classesRouter = express.Router();
classesRouter.use(bodyParser.json());
/* GET users listing. */
classesRouter.get('/swimming', function(req, res, next) {
  	Classes.find({classname:"Swimming"}).exec(function(err, classes){
		if(err){throw err;}
		res.json(classes);
	});
});
classesRouter.get('/music', function(req, res, next) {
  	Classes.find({classname:"Music"}).exec(function(err, classes){
		if(err){throw err;}
		res.json(classes);
	});
});
classesRouter.get('/Dance', function(req, res, next) {
  	Classes.find({classname:"Dance"}).exec(function(err, classes){
		if(err){throw err;}
		res.json(classes);
	});
});
classesRouter.get('/Tailoring', function(req, res, next) {
  	Classes.find({classname:"Tailoring"}).exec(function(err, classes){
		if(err){throw err;}
		res.json(classes);
	});
});
classesRouter.get('/ArtClass',function(req, res, next) {
	Classes.find({classname:"ArtClasses"}).exec(function(err, classes){
		if(err){throw err;}
		res.json(classes);
	});
});
classesRouter.get('/Badminton', function(req, res, next) {
  	Classes.find({classname:"Badminton"}).exec(function(err, classes){
		if(err){throw err;}
		res.json(classes);
	});
});
classesRouter.get('/Cricket', function(req, res, next) {
  	Classes.find({classname:"Cricket"}).exec(function(err, classes){
		if(err){throw err;}
		res.json(classes);
	});
});
classesRouter.get('/ChessCoaching', function(req, res, next) {
  	Classes.find({classname:"ChessCoaching"}).exec(function(err, classes){
		if(err){throw err;}
		res.json(classes);
	});
});
classesRouter.get('/Yoga', function(req, res, next) {
  	Classes.find({classname:"Yoga"}).exec(function(err, classes){
		if(err){throw err;}
		res.json(classes);
	});
});
classesRouter.get('/Karate', function(req, res, next) {
  	Classes.find({classname:"Karate"}).exec(function(err, classes){
		if(err){throw err;}
		res.json(classes);
	});
});
classesRouter.post('/insert',function(req, res, next) {
	Classes.create(req.body,function(err, classes){
		if(err){throw err;}
		//console.log("detail inserted");
		res.json({"success":"inserted successfully"});
	});
});
classesRouter.get('/search', function(req, res, next) {
  	Classes.find({}).exec(function(err, classes){
		if(err){throw err;}
		res.json(classes);
	});
});
classesRouter.delete('/delete',function(req, res, next){
	Classes.remove({classname:"Karate"},function(err, result){
		if(err) throw err;
		res.json(result);
	});
});

module.exports = classesRouter;
