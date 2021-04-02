const axios = require("axios");
const cheerio = require("cheerio");
const url =
  "https://www.amazon.fr/s?i=fashion&bbn=22951683031&rh=n%3A11961521031%2Cn%3A22951683031%2Cn%3A12422072031%2Cn%3A436559031&dc&pf_rd_i=11961521031&pf_rd_m=A1X6FK5RDHNB96&pf_rd_p=a89c64cd-cbf1-4170-96f3-547d39ac07a1&pf_rd_r=XX7RKBJM808V2SH15JCN&pf_rd_s=merchandised-search-5&pf_rd_t=101&qid=1614848508&rnid=12422072031&ref=sr_nr_n_5";

let amazonData = async () => {
  const response = await axios.get(url);
  data = [];
  const $ = cheerio.load(response.data);
  // console.log($);
  $(
    "div.sg-col-4-of-12" &&
      ".s-result-item " &&
      ".s-asin" &&
      ".sg-col-4-of-16 " &&
      ".sg-col " &&
      ".sg-col-4-of-20"
  ).each((i, elem) => {
    data.push({
      //title : $(elem).text()
      productBrand: $(elem).find("h5.s-line-clamp-1").children("span").text(),
      productName: $(elem)
        .find("a.a-link-normal " && ".a-text-normal")
        .children(
          "span.a-size-base-plus " && ".a-color-base " && ".a-text-normal"
        )
        .text(),
      type_livraison: $(elem)
        .find("div.a-section " && ".a-spacing-none " && ".a-spacing-top-micro")
        .children("div.a-row")
        .children("div.a-row")
        .children("span")
        .children("span:nth-child(1)")
        .text()
        .trim(),
      productPrice: $(elem)
        .find("a.a-size-base " && ".a-link-normal " && ".a-text-normal")
        .children("span.a-price")
        .children("span.a-offscreen")
        .text(),
      url: "https://www.amazon.fr" + $(elem)
        .find("a.a-link-normal" && ".s-no-outline")
        .attr("href"),
      image_url: $(elem).find("img.s-image").attr("src"),
    });
  });
  return data;
};

module.exports = { amazonData };