import "./price-range.css";
import * as productfiltersActions from "../../redux/actions/ProductFiltersActions";
import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import Slider from '@material-ui/core/Slider';
function valuetext(value) {
  return `${value} euro`;
}


 function RangeSlider(props) {
  
   const [value, setValue] = React.useState([0,100]);
   
  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.loadPrice(newValue);
  };

   return (
     <Slider
       value={value}
       onChange={handleChange}
       min={props.filters ?  parseFloat(props.filters?.minPrice) : 100}
      max={props.filters ? parseFloat(props.filters?.maxPrice) : 10}
      valueLabelDisplay="auto"
      aria-labelledby="range-slider"
      getAriaValueText={valuetext}
    />
  );
}

class SidebarProduct extends React.Component {
  brands = [];

  componentDidMount() {
    const { productfilters, actions } = this.props;
  
    if (productfilters.length === 0) {
      actions.loadfilters().catch((error) => {});
    }
  
  }
   

  handleSubmit = (event) => {
    this.brands.includes(event.target.value)
      ? (this.brands = this.brands.filter((b) => b !== event.target.value))
      : this.brands.push(event.target.value);

    this.props.brandload(this.brands);
  };

  handleChange = (event, newValue)=>{
    this.value = newValue;
  }

  render() {
    return (
      <>
        <div className="collection-filter-block">
          <div className="collection-mobile-back">
            <span className="filter-back">
              <i className="fa fa-angle-left" aria-hidden="true"></i> back
            </span>
          </div>
          <div className="collection-collapse-block open">
            <h3 className="collapse-block-title">brand</h3>
            <div className="collection-collapse-block-content">
              <div className="collection-brand-filter">
                {this.props.productfilters.brands ? (
                  this.props.productfilters.brands.map((b) => (
                    <div
                      key={b}
                      className="custom-control custom-checkbox collection-filter-checkbox"
                    >
                      <input
                        type="checkbox"
                        onClick={this.handleSubmit}
                        value={b}
                      />
                      &nbsp; {b}
                    </div>
                  ))
                ) : (
                  <div> </div>
                )}
              </div>
            </div>
          </div>

          <div className="collection-collapse-block border-0">
            <h3 className="collapse-block-title">price</h3>
            <div className="collection-collapse-block-content">
              <div className="wrapper mt-3">
                <RangeSlider
                  loadPrice={this.props.priceload}
                  filters={this.props.productfilters}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productfiltersActions, dispatch),
  };
}

function mapStateToProps(state) {
  return {
    productfilters: state.productfilters,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SidebarProduct);

/* color and size
          <div className="collection-collapse-block">
            <h3 className="collapse-block-title">colors</h3>
            <div
              className="collection-collapse-block-content"
              style={{ display: "none" }}
            >
              <div className="color-selector">
                <ul>
                  <li className="color-1 active"></li>
                  <li className="color-2"></li>
                  <li className="color-3"></li>
                  <li className="color-4"></li>
                  <li className="color-5"></li>
                  <li className="color-6"></li>
                  <li className="color-7"></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="collection-collapse-block border-0">
            <h3 className="collapse-block-title">size</h3>
            <div
              className="collection-collapse-block-content"
              style={{ display: "none" }}
            >
              <div className="collection-brand-filter">
                <div className="custom-control custom-checkbox collection-filter-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="hundred"
                  />
                  <label className="custom-control-label">s</label>
                </div>
                <div className="custom-control custom-checkbox collection-filter-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="twohundred"
                  />
                  <label className="custom-control-label">m</label>
                </div>
                <div className="custom-control custom-checkbox collection-filter-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="threehundred"
                  />
                  <label className="custom-control-label">l</label>
                </div>
                <div className="custom-control custom-checkbox collection-filter-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="fourhundred"
                  />
                  <label className="custom-control-label">xl</label>
                </div>
              </div>
            </div>
          </div>
*/
