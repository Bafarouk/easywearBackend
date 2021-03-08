
const { amazonData } = require("../../WebScrappping/Amazon");
const controller= require("./controller");
const Product = require('../../models/product');


exports.scrap = async (req, res) =>{ 

const amazonD = await amazonData();
const nbr= await controller.saveall(amazonD);
res.status(200).send(` ${nbr} product was added succefully`);
return


};



