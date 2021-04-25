const Product = require("../../models/product");
const schemaEvent = require("./schema").ValidatorSchemaOfBody;
const Joi = require("../../lib/joi");

const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

exports.create = (req, res) => {
  const { error } = Joi.validate(req.body, schemaEvent);
  if (error != null) {
    res.status(400).send({ message: "verify Content!" });
    return;
  }

  const product = new Product({
    productName: req.body.productName,
    productDescription: req.body.productDescription,
    productPrice: req.body.productPrice,
    productSize: req.body.productSize,
    productCategorie: req.body.productCategorie,
    productAge: req.body.productAge,
    productGender: req.body.productGender,
    productBrand: req.body.productBrand,
    image_url: req.body.image_url,
    type_livraison: req.body.type_livraison,
    url: req.body.url,
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
};

exports.saveall = async (data) => {
  var count = 0;
  for (const element of data) {
    const { error } = Joi.validate(element, schemaEvent);
    if (error == null) {
      const product = new Product(element);
      await product.save(product);
      count = count + 1;
    }
  }
  return count;
};

exports.findAllWithoutPagination = async (req, res) => {
  const Products = await Product.find();
  if (Products) {
    res.status(200).send(Products);
  } else {
    res.status(404).send("Products not found");
  }
};

exports.findAll = (req, res) => {
  const { page, size, title } = req.query;
  var condition = title
    ? { title: { $regex: new RegExp(title), $options: "i" } }
    : {};

  const { limit, offset } = getPagination(page, size);

  Product.paginate(condition, { offset, limit }).then((data) => {
    res.send({
      totalItems: data.totalDocs,
      products: data.docs,
      totalPages: data.totalPages,
      currentPage: data.page - 1,
    });
  });
};

exports.saveall = async (data) => {
  var count = 0;
  for (const element of data) {
    const { error } = Joi.validate(element, schemaEvent);
    if (error == null) {
      const product = new Product(element);
      await product.save(product);
      count = count + 1;
    }
  }
  return count;
};

exports.findAll = (req, res) => {
  const { page, size, name, brands, pricemin, pricemax } = req.query;
  var condition = {};
  const c1 = name
    ? (condition.productName = { $regex: new RegExp(name), $options: "i" })
    : null;
  const c2 = brands
    ? (condition.productBrand = { $in: brands.split(",") })
    : null;
  const c3 = pricemin
    ? (condition.productPrice = { $gte: pricemin, $lte: pricemax })
    : null;

  const { limit, offset } = getPagination(page, size);

  console.log(condition);
  Product.paginate(condition, {
    offset,
    limit,
    sort: { productPrice: 1, productPrice: -1 },
  })
    .then((data) => {
      res.send({
        totalItems: data.totalDocs,
        products: data.docs,
        totalPages: data.totalPages,
        currentPage: data.page - 1,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving product.",
      });
    });
};

exports.recommandation = (req, res) => {
  Product.find()
    .then((data) => {
      res.send({
        data,
      });
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

exports.filters = async (req, res) => {
  var Prices = 0;
  var brands = [];

  Prices = await Product.aggregate([
    {
      $group: {
        _id: 0,
        MaximumValue: { $max: "$productPrice" },
        MinimumValue: { $min: "$productPrice" },
      },
    },
  ])
  .catch((err) => {});

  console.log(Prices);
  brands = await Product.find()
    .distinct("productBrand")
    .catch((err) => {});
  var filter = {
    maxPrice: Prices[0].MaximumValue,
    minPrice: Prices[0].MinimumValue,
    brands: brands,
  };
  res.send(filter);
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

exports.getSimilarProductsBasedOnPrice = async (req, res) => {
  //Get the product
  const product = await Product.findOne({ _id: req.params.id });
  if (product) {
    //Devide Product name into an array of strings
    var keywords = string_to_array(product.productName);
    var filteredKeywords = keywords.filter(function (e) {
      return e !== "Tjw" && e !== "Femme";
    });
    //Getting Product price
    const prodPrice = parseFloat(
      product.productPrice.replace(/[^0-9.-]+/g, "")
    );

    console.log(prodPrice);
    //Search for products that contains a word of the name of the given product
    var similarProducts = [];

    await Promise.all(
      filteredKeywords.map(async (p) => {
        similarProducts = await Product.find({
          productName: { $regex: p, $options: "i" },
        }).sort({ productPrice: 1 });
      })
    );
    res.send(similarProducts);
  }
};

//Helper method
string_to_array = function (str) {
  return str.trim().split(" ");
};
