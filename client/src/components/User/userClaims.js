import React, { useEffect } from "react";
import * as Icon from "react-feather";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import { queryApi } from "../../utils/queryApi";
import CommentClaims from "../Claims/CommentClaims";
import PostClaims from "../Claims/PostClaims";
import ProductClaims from "../Claims/ProductClaims";
import { useDispatch, useSelector } from "react-redux";
import {
  selectClaims,
  setErrors,
  fetchClaimByType,
} from "../../redux/slices/claimSlice";
import AddClaim from "../Claims/addClaim";
import jwtDecode from "jwt-decode";

const UserClaims = () => {
  let user;
  const jwtToken = localStorage.getItem("jwt");
  console.log(jwtToken);
  if (jwtToken) {
    // Set auth token header auth
    user = jwtDecode(jwtToken); // Decode token and get user info and exp
  }

  //console.log(user);
  const dispatch = useDispatch();
  const showClaims = async (type) => {
    dispatch(fetchClaimByType(type, user._id));
  };
  useEffect(() => {
    showClaims();
  }, [dispatch]);

  return (
    <>
      <div className="collection-wrapper">
        <div className="collection-content ratio_asos">
          <div className="page-main-content">
            <div className="row">
              <div className="col-xl-12">
                <div className="filter-main-btn">
                  <span className="filter-btn btn btn-theme">
                    <i className="fa fa-filter" aria-hidden="true" /> Filter
                  </span>
                </div>
              </div>
            </div>
            <div className="collection-product-wrapper">
              <div className="product-wrapper-grid">
                <div className="row">
                  <div className="slide-6 no-arrow slick-initialized slick-slider">
                    <div className="slick-list draggable">
                      <div className="slick-track">
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index={13}
                          aria-hidden="true"
                          style={{ width: 173 }}
                        >
                          <div
                            className="category-block"
                            style={{
                              width: "100%",
                              display: "inline-block",
                            }}
                          >
                            <a
                              onClick={(e) => {
                                e.preventDefault();
                                showClaims("product");
                              }}
                            >
                              {" "}
                              {
                                <Link
                                  to="/user/profile/claims/productClaims"
                                  tabIndex={-1}
                                >
                                  <div className="category-image">
                                    <Icon.Package></Icon.Package>
                                  </div>
                                </Link>
                              }
                            </a>
                            <div style={{ marginLeft: 30 }}>
                              <h5>Products Claims</h5>
                            </div>
                          </div>
                        </div>

                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index={14}
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 173 }}
                        >
                          <div>
                            <div
                              className="category-block"
                              style={{
                                width: "100%",
                                display: "inline-block",
                              }}
                            >
                              <a
                                onClick={(e) => {
                                  e.preventDefault();
                                  showClaims("post");
                                }}
                              >
                                {" "}
                                {
                                  <Link
                                    to="/user/profile/claims/postClaims"
                                    tabIndex={-1}
                                  >
                                    <div className="category-image">
                                      <Icon.Image></Icon.Image>
                                    </div>
                                  </Link>
                                }
                              </a>
                              <div style={{ marginLeft: 33 }}>
                                <h5>Posts Claims</h5>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index={14}
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 173 }}
                        >
                          <div>
                            <div
                              className="category-block"
                              style={{
                                width: "100%",
                                display: "inline-block",
                              }}
                            >
                              <a
                                onClick={(e) => {
                                  e.preventDefault();
                                  showClaims("comment");
                                }}
                              >
                                {" "}
                                {
                                  <Link
                                    to="/user/profile/claims/commentClaims"
                                    tabIndex={-1}
                                  >
                                    <div className="category-image">
                                      <Icon.MessageSquare></Icon.MessageSquare>
                                    </div>
                                  </Link>
                                }{" "}
                              </a>
                              <div style={{ marginLeft: 30 }}>
                                <h5>Comments Claims</h5>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index={14}
                          aria-hidden="true"
                          tabIndex={-1}
                          style={{ width: 173 }}
                        >
                          <div>
                            <div
                              className="category-block"
                              style={{
                                width: "100%",
                                display: "inline-block",
                              }}
                            >
                              <Link
                                to="/user/profile/claims/addClaim"
                                tabIndex={-1}
                              >
                                <div className="category-image">
                                  <Icon.PlusCircle></Icon.PlusCircle>
                                </div>
                              </Link>

                              <div style={{ marginLeft: 30 }}>
                                <h5>Add a Claim</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Route
                      path="/user/profile/claims/productClaims"
                      component={ProductClaims}
                    ></Route>

                    <Route
                      path="/user/profile/claims/postClaims"
                      component={PostClaims}
                    ></Route>
                    <Route
                      path="/user/profile/claims/commentClaims"
                      component={CommentClaims}
                    ></Route>
                    <Route
                      path="/user/profile/claims/addClaim"
                      component={AddClaim}
                    ></Route>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserClaims;
