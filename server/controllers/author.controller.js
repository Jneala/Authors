const Author = require('../models/author.model');

module.exports ={
  index: (req,res) => {
    Author.find()
      .then(data => res.json({results:data}))
      .catch(err => res.status(404).json({errors:err.errors}))
  },
  create: (req,res) => {
    Author.create(req.body)
      .then(data => res.json({results:data}))
      .catch(err => res.status(404).json({errors:err.errors}))
  },
  show: (req,res) => {
    Author.find({_id:req.params.id})
      .then(data => res.json({results:data}))
      .catch(err => res.status(404).json({errors:err.errors}))
  },
  update: (req,res) => {
    Author.updateOne({_id:req.params.id},req.body,{runValidators:true})
      .then(data => res.json({results:data}))
      .catch(err => res.status(404).json({errors:err.errors}))
  },
  destroy: (req,res) => {
    Author.deleteOne({_id:req.params.id})
    //the redirect lets our backend send this to the index, saving the front end an extra quiery to get a new set of items in the index after the delete.
      .then(data => res.json({results:data}))
      .catch(err => res.status(404).json({errors:err.errors}))
  }
}