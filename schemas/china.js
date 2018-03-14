var mongoose = require('../db.js')


var chinaSchema = mongoose.Schema({
	username:String,
	sex:String,
	phone:Number,
	email:String,
	area:String,
	sign:String
},{collection:'china'})

module.exports = mongoose.model('china',chinaSchema);