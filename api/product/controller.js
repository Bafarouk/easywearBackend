const Product = require("../../models/product");
const schemaEvent = require("./schema").ValidatorSchemaOfBody;
const Joi = require("../../lib/joi");

const { amazonData } = require("../../WebScrappping/Amazon");

exports.create = async (req, res) => {
  try {
    const { error } = Joi.validate(req.body, schemaEvent);
    //Add Delete All.

    const data = await amazonData();
    for (const item of data) {
      const product = new Product({
        productName: item.productName,
        productDescription: req.body.productDescription,
        productPrice: item.productPrice,
        productSize: req.body.productSize,
        productCategorie: req.body.productCategorie,
        productAge: req.body.productAge,
        productGender: req.body.productGender,
        productBrand: item.productBrand,
        image_url: item.image_url,
        type_livraison: item.type_livraison,
        url: item.url,
      });

      product
        .save(product)
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the product.",
          });
        });
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
};
exports.getData = async (req, res) => {
  const data = await amazonData();
  console.log(data);
  return res.status(200).send(data);
};
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title
    ? { title: { $regex: new RegExp(title), $options: "i" } }
    : {};

  Product.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving product.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Product.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found product with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving product with id=" + id });
    });
};

exports.update = (req, res) => {
  const { error } = Joi.validate(req.body, schemaEvent);
  if (error != null) {
    res.status(400).send({ message: "verify Content!" });
    return;
  }

  const id = req.params.id;

  Product.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update product with id=${id}. Maybe product was not found!`,
        });
      } else res.send({ message: "product was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating product with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Product.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete product with id=${id}. Maybe product was not found!`,
        });
      } else {
        res.send({
          message: "product was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete product with id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {
  Product.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} products were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all products.",
      });
    });
};
