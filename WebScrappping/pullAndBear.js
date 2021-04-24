const axios = require("axios");
const cheerio = require("cheerio");
const url = "https://www.pullandbear.com/tn/en/man/clothing/sweatshirts-%26-hoodies-c1030204822.html";

let pullData = async () => {
    const response = await axios.get(url);
    data = [];
    const $ = cheerio.load(response.data);
     console.log($);
    
    return data;
};

module.exports = {
    pullData
}
