
const Product = require('../../models/product');
const schemaEvent = require('./schema').ValidatorSchemaOfBody ;
const Joi = require('../../lib/joi');



exports.create = (req, res) => {
    const { error } = Joi.validate(req.body, schemaEvent);
    if (error!=null) {
      res.status(400).send({ message: "verify Content!" });
      return;
    }
 
    
    const product = new Product({
      
    productName: req.body.productName,
    productDescription: req.body.productDescription,
    productPrice:  req.body.productPrice,
    productSize:  req.body.productSize,
    productCategorie:  req.body.productCategorie,
    productAge:  req.body.productAge,
    productGender:  req.body.productGender,
    productBrand:  req.body.productBrand,
    image_url:  req.body.image_url,
    type_livraison: req.body.type_livraison,
    url:  req.body.url,
    });
  
    product
      .save(product)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the product."
        });
      });
  };
  
  exports.createweb = async (req, res,product) => {
    // const { error } = Joi.validate(req.body, schemaEvent);
    
   
     product
       .save(product)
       .then(data => {
         res.send(data);
       })
       .catch(err => {
         res.status(500).send({
           message:
             err.message || "Some error occurred while creating the product."
         });
       });
   };
  
  exports.findAll = (req, res) => {
      const title = req.query.title;
      var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
    
      Product.find(condition)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving product."
          });
        });
  };
  
  
  exports.findOne = (req, res) => {
      const id = req.params.id;
  
      product.findById(id)
        .then(data => {
          if (!data)
            res.status(404).send({ message: "Not found product with id " + id });
          else res.send(data);
        })
        .catch(err => {
          res
            .status(500)
            .send({ message: "Error retrieving product with id=" + id });
        });
  };
  
  
  exports.update = (req, res) => {
    const { error } = Joi.validate(req.body, schemaEvent);
    if (error!=null) {
      res.status(400).send({ message: "verify Content!" });
      return;
    }
      
        const id = req.params.id;
      
        product.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
          .then(data => {
            if (!data) {
              res.status(404).send({
                message: `Cannot update product with id=${id}. Maybe product was not found!`
              });
            } else res.send({ message: "product was updated successfully." });
          })
          .catch(err => {
            res.status(500).send({
              message: "Error updating product with id=" + id
            });
          });
  };
  
  
  exports.delete = (req, res) => {
      const id = req.params.id;
  
      product.findByIdAndRemove(id)
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot delete product with id=${id}. Maybe product was not found!`
            });
          } else {
            res.send({
              message: "product was deleted successfully!"
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete product with id=" + id
          });
        });
  };
  
  
  exports.deleteAll = (req, res) => {
      product.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} products were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all products."
        });
      });
  };
  
 