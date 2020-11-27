const mongoose = require("mongoose");
const joi = require("joi");

let usersSchema = new mongoose.Schema({
  email:String,
  pass:String,
  phone:String,
  role:{
    type:String, default:"regular"
  },
  date_time:{
    type:Date, default:Date.now()
  }
})

exports.usersModel = mongoose.model("users",usersSchema);

exports.validUsers = (_userObj) => {
  let schema = joi.object({
    email:joi.string().min(2).max(50).email().required(),
    pass:joi.string().min(2).max(50).required(),
    phone:joi.string().min(5).max(12),
    role:joi.string().min(2).max(200)
  })

  return schema.validate(_userObj);
}