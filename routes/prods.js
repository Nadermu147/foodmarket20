const express = require('express');
const router = express.Router();
const { prodsModel, validProds } = require('../models/prods_models')

/* GET home page. */
router.get('/', (req, res, next) => {
    prodsModel.find()
        .then(data => {
            console.log(data)
            res.json(data)
        })
});
router.post('/add', (req, res) => {
    let validData = validProds(req.body)
    if (validData.error) {
        return res.staus(400).json(validData.error.details);
    }

    prodsModel.insertMany([req.body])
        .then(data => {
            res.status(201).json(data[0])

        })
        .catch(err => {
            res.status(400).json(err)
        })
})
router.put('/edit', (req, res) => {
    let validData = validProds(req.body) 
    if (validData.error) {
        return res.staus(400).json(validData.error.details);
    } 
 
    prodsModel.updateOne({_id:req.body._id},req.body)
        .then(data => {
            res.status(201).json(data[0])

        })
        .catch(err => {
            res.status(400).json(err)
        })
})

router.delete('/del', (req, res) => {


    prodsModel.deleteOne({_id:req.body._id})
        .then(data => {
            res.status(200).json(data)

        })
        .catch(err => {
            res.status(400).json(err)
        })
})
//http://localhost:3000/prods/search/?q=Pasta  
router.get("/search", (req,res, next) => {
    let searchQ = new RegExp(req.query.q)
    prodsModel.find({$or:[{name:searchQ},{cat:searchQ}]})
    .then(data => {
        res.json(data)
    })
})


module.exports = router;
