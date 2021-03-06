
const Reaction1 = require('../../models/reaction');
const schemaEvent = require('./schema').ValidatorSchemaOfBody ;
const Joi = require('../../lib/joi');
//const db = require("../../models");
//const Reaction1 = db.Reaction1s;


exports.create = (req, res) => {
  
  const { error } = Joi.validate(req.body, schemaEvent);
  if (error!=null) {
    res.status(400).send({ message: "verify Content!" });
    return;
  }

  
    
    const Reaction1 = new Reaction1({
      date_creation:Date.now(),
      description: req.body.description,
      User_id: req.body.user,
      Post_id: req.body.post
    });
  
    Reaction1
      .save(Reaction1)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Reaction1."
        });
      });
  };
  
  
  exports.findAll = (req, res) => {
      const title = req.query.title;
      var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
    
      Reaction1.find(condition)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving Reaction1."
          });
        });
  };
  
  
  exports.findOne = (req, res) => {
      const id = req.params.id;
  
      Reaction1.findById(id)
        .then(data => {
          if (!data)
            res.status(404).send({ message: "Not found Reaction1 with id " + id });
          else res.send(data);
        })
        .catch(err => {
          res
            .status(500)
            .send({ message: "Error retrieving Reaction1 with id=" + id });
        });
  };
  
  
  exports.update = (req, res) => {
    const { error } = Joi.validate(req.body, schemaEvent);
    if (error!=null) {
      res.status(400).send({ message: "verify Content!" });
      return;
    }
 
      
        const id = req.params.id;
      
        Reaction1.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
          .then(data => {
            if (!data) {
              res.status(404).send({
                message: `Cannot update Reaction1 with id=${id}. Maybe Reaction1 was not found!`
              });
            } else res.send({ message: "Reaction1 was updated successfully." });
          })
          .catch(err => {
            res.status(500).send({
              message: "Error updating Reaction1 with id=" + id
            });
          });
  };
  
  
  exports.delete = (req, res) => {
      const id = req.params.id;
  
      Reaction1.findByIdAndRemove(id)
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot delete Reaction1 with id=${id}. Maybe Reaction1 was not found!`
            });
          } else {
            res.send({
              message: "Reaction1 was deleted successfully!"
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete Reaction1 with id=" + id
          });
        });
  };
  
  
  exports.deleteAll = (req, res) => {
      Reaction1.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Reaction1s were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Reaction1s."
        });
      });
  };
  
  
