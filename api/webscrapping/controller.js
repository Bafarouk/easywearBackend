const rp = require("request-promise");
//const productController = require("d:/easywearBackend/api/product/controller");
const $ = require("cheerio");
const Product = require("../../models/product");
const url = "https://www.zara.com/tn/fr/homme-maille-l681.html?v1=1717716";
const puppeteer = require("puppeteer");

async function getUrl(req, res) {
  rp(url)
    .then(function (html) {
      //success!s
      console.log("######### length");
      console.log($(".product-grid__product-list a ", html).length);
      console.log("######### html");
      // console.log($('.product-link product-grid-product__link', html));

      $(".product-grid__product-list a", html).each((index, singleLink) => {
        let img = [];
        let size = [];
        let product = new Product();
        product.productSize = "";
        product.productPrice = 0;

        console.log(index);
        var singleHref = $(singleLink).attr("href");
        console.log(singleHref);
        if (singleHref.includes("zara.com") && index < 10) {
          product.url = singleHref;
          puppeteer
            .launch()
            .then(function (browser) {
              return browser.newPage();
            })
            .then(function (page) {
              return page.goto(singleHref).then(function () {
                return page.content();
              });
            })
            .then(function (html) {
              $("h1", html).each(function () {
                product.productName = $(this).text();
                console.log($(this).text());
              });

              $(".price__amount", html).each((index, data) => {
                if (index == 0) {
                  console.log($(data).text());
                  //console.log(($(data).text()).replace('TND',''))
                  let price = $(data).text().replace("TND", "");
                  let price1 = Number(price.replace(",", "."));
                  // console.log(price1)
                  product.productPrice = price1;
                }
              });

              $(".expandable-text__inner-content", html).each((index, data) => {
                if (index == 1) {
                  console.log($(data).text());
                  product.productDescription = $(data).text();
                }
              });

              $(".product-size-info__name", html).each((index, data) => {
                console.log($(data).text());
                size.push($(data).text());
                //product.productSize=$(data).text()
              });
              $("img", html).each((index, data) => {
                var data1 = $(data).attr("src");
                if (data1.includes("https://static.zara.net/photos///")) {
                  img.push(data1);
                  console.log(data1);
                }
              });

              product.image_url = img[4];
              product.productCategorie = "tshirt";
              product.productAge = 30;
              product.productGender = "Homme";
              product.productBrand = "Zara";
              product.type_livraison = "--";
              product.productSize = size.toString();

              console.log(product);

              product.save(product).then((data) => {
                //res.send(data);
                console.log("saved");
              });
              /* .catch((err) => {
                  res.status(500).send({
                    message:
                      err.message ||
                      "Some error occurred while creating the product.",
                  });
                }); */

              /*
                 productController.createweb(req,res,product)
                .catch(err =>{
                        console.log(err)
                })*/
              //console.log(img)
              //console.log(size.toString())
            })
            .catch(function (err) {
              //handle error
            });
        }
      });

      /*$('.product-grid__product-list a').each((i,el) => {
          const link = $(el).attr('href');
          console.log(link)
      });*/
      res.send("ok");
    })
    .catch(function (err) {
      //handle error
    });
}

module.exports = {
  getUrl,
};
