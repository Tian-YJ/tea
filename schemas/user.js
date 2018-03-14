var mongoose = require('../db.js')


var userSchema = mongoose.Schema({
	username:String,
	pw:String,
	sex:String,
	headicon:String,
},{collection:'user'})

module.exports = mongoose.model('user',userSchema);