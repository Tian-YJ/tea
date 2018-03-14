
var exp = require('express');
var router = exp.Router();

var checkislogin = require('./check.js').checkislogin;

var userSchema = require('../schemas/user.js');
var crypto = require('crypto');



//模块


router.get('/login',checkislogin,function(req,res){
	res.render('login')
})//配置登录页面的路由


//检测用户是否为登陆状态
router.post('/check',function(req,res){
	userSchema.find({
		username:req.body.username,pw:crypto.createHmac('123',req.body.pw1).update('I love cupcakes').digest('hex')},function(err,result){
			if(err){
				return res.send('登录失败');
			}
			if(result.length>0){
				var _user = {
					_id:result[0]._id,
					username:result[0].username,
					sex:result[0].sex
				}
				req.session.user = _user
				res.locals.user = req.session.user;
				res.redirect('/');
			}
			else{
				res.send('账号不存在');
			}
		}
	

	})
})


module.exports = router;


