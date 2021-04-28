import React, { Component } from "react";
import * as productsActions from "../../redux/actions/ProductsActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loadProducts } from "./../../redux/actions/ProductsActions";
import { queryApi } from "../../utils/queryApi";
//import jwtDecode from "jwt-decode";
import RecommendedProductView from "./RecommendedProductView";

class RecommendedProductsList extends Component {
  //jwtToken = localStorage.getItem("jwt");

  componentDidMount() {
    /*queryApi(
      "recommendation/getSuggestions/" + this.state.connectedUser._id,
      {},
      "GET"
    ).then((res) => {
      //console.log(res[0].suggestion);
      const { products, actions } = this.props;

      actions.loadProducts();
      let test = [];
      // console.log(this.state.products[0].id);
      res[0].suggestion.forEach((element) => {
        test.push(
          this.state.products.find(
            (prod) => prod?.id === element?.product_id
          )
        );
      });
    });*/
    this.loadProducts();
    this.loadRecommendedProducts();
  }

  constructor(props) {
    super(props);
    const user = null; // jwtDecode(this.jwtToken);

    this.state = {
      suggestedproducts: [],
      products: [],
      connectedUser: user,
    };
  }

  loadProducts = async () => {
    const [res, err] = await queryApi("product/getAllProducts", {}, "GET");
    this.setState({ products: res });
  };

  loadRecommendedProducts = async () => {
    if (this.state.connectedUser) {
      const [res, err] = await queryApi(
        "recommendation/getSuggestions/" + this.state.connectedUser._id,
        {},
        "GET"
      );
      const { products, actions } = this.props;

      //actions.loadProducts();

      let recommendedResponse = [];
      // console.log(this.state.products[0].id);
      res.suggestion?.forEach((element) => {
        recommendedResponse.push(
          this.state.products.find((prod) => prod?.id === element?.product_id)
        );
      });
      this.setState({ suggestedproducts: recommendedResponse });
      if (err) {
        this.setState({ suggestedproducts: [] });
      }
    } else {
      this.setState({ suggestedproducts: [] });
    }
  };

  render() {
    return (
      <>
        <section className="section-b-space p-t-0 ratio_asos">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="product-4 product-m no-arrow slick-initialized slick-slider">
                  <button
                    className="slick-prev "
                    aria-label="Previous"
                    type="button"
                    style={{ display: "inline-block" }}
                  >
                    Previous
                  </button>
                  <div className="slick-list draggable">
                    {
                      /* Loop will be here */
                      console.log(this.state.suggestedproducts)
                    }

                    {this.state.suggestedproducts?.map((p) => {
                      return <RecommendedProductView key={p.id} product={p} />;
                    })}
                  </div>
                  <button
                    className="slick-next "
                    aria-label="Next"
                    type="button"
                    style={{ display: "inline-block" }}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productsActions, dispatch),
  };
}

function mapStateToProps(state) {
  return {
    products: state.products,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecommendedProductsList);
