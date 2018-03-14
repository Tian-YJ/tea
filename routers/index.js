var pub = require('./pub.js');
var firstPage = require('./firstPage.js');
var china = require('./china.js')
var contaction = require('./contaction.js');
var guanyuwomen = require('./guanyuwomen.js');
var news = require('./news.js');
var produce = require('./produce.js');
var teaCulture = require('./teaCulture.js');
var reg = require('./reg.js');



var checkislogin = require('./check.js').checkislogin;
var userSchema = require('../schemas/user.js');
var crypto = require('crypto');


var chinaSchema = require('../schemas/china');

//倒入模块
module.exports = function(app){
	app.get("/",function(req,res){
		res.render("pub");//render直接返回页面
	});
	// app.use("/pub",pub);
	app.get("/firstPage",function(req,res){
		res.render("firstPage");//render直接返回页面
	});
	app.get("/produce",function(req,res){
		res.render("produce");//render直接返回页面
	});
	app.get("/guanyuwomen",function(req,res){
		res.render("guanyuwomen");//render直接返回页面
	});
	app.get("/china",function(req,res){
		res.render("china");//render直接返回页面
	});
	app.get("/news",function(req,res){
		res.render("news");//render直接返回页面
	});
	app.get("/teaCulture",function(req,res){
		res.render("teaCulture");//render直接返回页面
	});
	app.get("/contaction",function(req,res){
		res.render("contaction");//render直接返回页面
	});


	app.get("/reg",function(req,res){
		res.render("reg");//render直接返回页面
	});

	app.get('/login',function(req,res){
		if(!req.session.user){
			req.session.user='';
		}
		res.locals.user = req.session.user;
	});
	// app.use("/reg",reg);
}




