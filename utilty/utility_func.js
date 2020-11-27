class _Utile{
    static delMongo(_model,_req,_res){
        _model.deleteOne({_id:_req.body._id})
        .then(data => {
          _res.status(200).json(data)
        })
        .catch(err => {
          _res.status(400).json(err)
        })
    }  
}
module.exports = _Utile;