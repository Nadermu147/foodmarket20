const mongoose = require('mongoose');
const joi = require("joi");
let prodsShema = new mongoose.Schema({
    cat: String,
    name: String,
    price: Number,
    image: String,
    date_time: {
        type: Date, default: Date.now
      }     
  
});

const prodsModel = mongoose.model("prods", prodsShema);
exports.prodsModel = prodsModel;

exports.validProds = (_prodobj) => {
    let schema = joi.object({
        cat: joi.string().min(2).max(50).required(),
        name: joi.string().min(2).max(50).required(),
        price:joi.number().min(0).required(),
        image: joi.string().min(2).max(150).required(),
    })
    return schema.validate(_prodobj);
}
