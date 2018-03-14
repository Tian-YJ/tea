module.exports={
	//检查是否是登录状态  
	//--如果是登录状态,此时不应该打开登录页面，应该跳转到首页
	//-- 未登录状态 ，就应该跳转到登录页面
	checkislogin:function(req,res,next){
		//  如果 req.session.user  有值则说明已经登录了
		//console.log(req.session.user);
		if(req.session.user){
			return res.redirect('/')
		}else{
			return res.render('login')
		};
		next();// 把执行权交给下一个
	},
	//检查没有登录状态，如果没有登录，就跳转到登录页面
	checkislogin:function(req,res,next){
		res.locals.user = req.session.user;
		if(!req.session.user){
			return res.redirect('/login');
		}
		next();
			}
		}
	