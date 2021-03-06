
const Comment = require('../../models/comment');
const schemaEvent = require('./schema').ValidatorSchemaOfBody ;
const Joi = require('../../lib/joi');



exports.create = (req, res) => {
    const { error } = Joi.validate(req.body, schemaEvent);
    if (error!=null) {
      res.status(400).send({ message: "verify Content!" });
      return;
    }
 
    
    const comment = new Comment({
      
      date_creation:Date.now(),
      description: req.body.description,
      User_id: req.body.user,
      Post_id: req.body.post
    });
  
    Comment
      .save(comment)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the comment."
        });
      });
  };
  
  
  exports.findAll = (req, res) => {
      const title = req.query.title;
      var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
    
      Comment.find(condition)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving comment."
          });
        });
  };
  
  
  exports.findOne = (req, res) => {
      const id = req.params.id;
  
      Comment.findById(id)
        .then(data => {
          if (!data)
            res.status(404).send({ message: "Not found Comment with id " + id });
          else res.send(data);
        })
        .catch(err => {
          res
            .status(500)
            .send({ message: "Error retrieving Comment with id=" + id });
        });
  };
  
  
  exports.update = (req, res) => {
    const { error } = Joi.validate(req.body, schemaEvent);
    if (error!=null) {
      res.status(400).send({ message: "verify Content!" });
      return;
    }
      
        const id = req.params.id;
      
        Comment.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
          .then(data => {
            if (!data) {
              res.status(404).send({
                message: `Cannot update Comment with id=${id}. Maybe Comment was not found!`
              });
            } else res.send({ message: "Comment was updated successfully." });
          })
          .catch(err => {
            res.status(500).send({
              message: "Error updating Comment with id=" + id
            });
          });
  };
  
  
  exports.delete = (req, res) => {
      const id = req.params.id;
  
      Comment.findByIdAndRemove(id)
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot delete Comment with id=${id}. Maybe Comment was not found!`
            });
          } else {
            res.send({
              message: "Comment was deleted successfully!"
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete Comment with id=" + id
          });
        });
  };
  
  
  exports.deleteAll = (req, res) => {
    Comment.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Comment were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Comment."
        });
      });
  };
  
 