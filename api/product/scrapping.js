const { amazonData } = require("../../WebScrappping/Amazon"); // fichier elli fih web scrapping
const controller= require("./controller");

//lien de test (Post ,body vide ) :http://localhost:3100/api/product/scrapping 

exports.scrap = async (req, res) =>{ 
var tot =0;


const amazonD = await amazonData(); // esm function
const nbr= await controller.saveall(amazonD); //sauvgard f base




tot = nbr ; // + nbr1 + ......
res.status(200).send(` ${tot} product was added succefully`);
return


};


