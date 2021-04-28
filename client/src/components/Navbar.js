import React from "react";
import { Link, NavLink } from "react-router-dom";
import Contact from "./Contact";

const Navbar = () => {
  return (
    <>
      {/* header start */}
      <header>
        <div className="mobile-fix-option" />
        <div className="top-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="header-contact">
                  <ul>
                    <li>Welcome to Our store Multikart</li>
                    <li>
                      <i className="fa fa-phone" aria-hidden="true" />
                      Call Us: 123 - 456 - 7890
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 text-right">
                <ul className="header-dropdown">
                  <li className="mobile-wishlist">
                    <a href="fakeNav">
                      <i className="fa fa-heart" aria-hidden="true" />
                    </a>
                  </li>
                  <li className="onhover-dropdown mobile-account">
                    <i className="fa fa-user" aria-hidden="true" />
                    My Account
                    <ul className="onhover-show-div">
                      <li>
                        <Link to="auth/login">Login</Link>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={() => {
                            localStorage.removeItem("jwt");
                            window.location = "/auth/login";
                          }}
                        >
                          Logout
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="main-menu">
                <div className="menu-left">
                  <div className="navbar">
                    <a href="FAKEhREF">
                      <div className="bar-style">
                        <i
                          className="fa fa-bars sidebar-bar"
                          aria-hidden="true"
                        />
                      </div>
                    </a>
                    <div id="mySidenav" className="sidenav">
                      <a href="FAKEhREF" className="sidebar-overlay" />
                      <nav>
                        <div>
                          <div className="sidebar-back text-left">
                            <i
                              className="fa fa-angle-left pr-2"
                              aria-hidden="true"
                            />
                            Back
                          </div>
                        </div>
                        <ul id="sub-menu" className="sm pixelstrap sm-vertical">
                          <li>
                            <a href="fakeNav">clothing</a>
                            <ul className="mega-menu clothing-menu">
                              <li>
                                <div className="row m-0">
                                  <div className="col-xl-4">
                                    <div className="link-section">
                                      <h5>women's fashion</h5>
                                      <ul>
                                        <li>
                                          <a href="fakeNav">dresses</a>
                                        </li>
                                        <li>
                                          <a href="fakeNav">skirts</a>
                                        </li>
                                        <li>
                                          <a href="fakeNav">westarn wear</a>
                                        </li>
                                        <li>
                                          <a href="fakeNav">ethic wear</a>
                                        </li>
                                        <li>
                                          <a href="fakeNav">sport wear</a>
                                        </li>
                                      </ul>
                                      <h5>men's fashion</h5>
                                      <ul>
                                        <li>
                                          <a href="fakeNav">sports wear</a>
                                        </li>
                                        <li>
                                          <a href="fakeNav">western wear</a>
                                        </li>
                                        <li>
                                          <a href="fakeNav">ethic wear</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="col-xl-4">
                                    <div className="link-section">
                                      <h5>accessories</h5>
                                      <ul>
                                        <li>
                                          <a href="fakeNav">
                                            fashion jewellery
                                          </a>
                                        </li>
                                        <li>
                                          <a href="fakeNav">caps and hats</a>
                                        </li>
                                        <li>
                                          <a href="fakeNav">
                                            precious jewellery
                                          </a>
                                        </li>
                                        <li>
                                          <a href="fakeNav">necklaces</a>
                                        </li>
                                        <li>
                                          <a href="fakeNav">earrings</a>
                                        </li>
                                        <li>
                                          <a href="fakeNav">wrist wear</a>
                                        </li>
                                        <li>
                                          <a href="fakeNav">ties</a>
                                        </li>
                                        <li>
                                          <a href="fakeNav">cufflinks</a>
                                        </li>
                                        <li>
                                          <a href="fakeNav">pockets squares</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="col-xl-4">
                                    <a
                                      href="fakeNav"
                                      className="mega-menu-banner"
                                    >
                                      <img
                                        src="/assets/images/mega-menu/fashion.jpg"
                                        className="img-fluid blur-up lazyload"
                                        alt="Fashion"
                                      />
                                    </a>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="fakeNav">bags</a>
                            <ul>
                              <li>
                                <a href="fakeNav">shopper bags</a>
                              </li>
                              <li>
                                <a href="fakeNav">laptop bags</a>
                              </li>
                              <li>
                                <a href="fakeNav">clutches</a>
                              </li>
                              <li>
                                <a href="fakeNav">purses</a>
                                <ul>
                                  <li>
                                    <a href="fakeNav">purses</a>
                                  </li>
                                  <li>
                                    <a href="fakeNav">wallets</a>
                                  </li>
                                  <li>
                                    <a href="fakeNav">leathers</a>
                                  </li>
                                  <li>
                                    <a href="fakeNav">satchels</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="fakeNav">footwear</a>
                            <ul>
                              <li>
                                <a href="fakeNav">sport shoes</a>
                              </li>
                              <li>
                                <a href="fakeNav">formal shoes</a>
                              </li>
                              <li>
                                <a href="fakeNav">casual shoes</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="fakeNav">watches</a>
                          </li>
                          <li>
                            <a href="fakeNav">Accessories</a>
                            <ul>
                              <li>
                                <a href="fakeNav">fashion jewellery</a>
                              </li>
                              <li>
                                <a href="fakeNav">caps and hats</a>
                              </li>
                              <li>
                                <a href="fakeNav">precious jewellery</a>
                              </li>
                              <li>
                                <a href="fakeNav">more..</a>
                                <ul>
                                  <li>
                                    <a href="fakeNav">necklaces</a>
                                  </li>
                                  <li>
                                    <a href="fakeNav">earrings</a>
                                  </li>
                                  <li>
                                    <a href="fakeNav">wrist wear</a>
                                  </li>
                                  <li>
                                    <a href="fakeNav">accessories</a>
                                    <ul>
                                      <li>
                                        <a href="fakeNav">ties</a>
                                      </li>
                                      <li>
                                        <a href="fakeNav">cufflinks</a>
                                      </li>
                                      <li>
                                        <a href="fakeNav">pockets squares</a>
                                      </li>
                                      <li>
                                        <a href="fakeNav">helmets</a>
                                      </li>
                                      <li>
                                        <a href="fakeNav">scarves</a>
                                      </li>
                                      <li>
                                        <a href="fakeNav">more...</a>
                                        <ul>
                                          <li>
                                            <a href="fakeNav">
                                              accessory gift sets
                                            </a>
                                          </li>
                                          <li>
                                            <a href="fakeNav">
                                              travel accessories
                                            </a>
                                          </li>
                                          <li>
                                            <a href="fakeNav">phone cases</a>
                                          </li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="fakeNav">belts &amp; more</a>
                                  </li>
                                  <li>
                                    <a href="fakeNav">wearable</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="fakeNav">house of design</a>
                          </li>
                          <li>
                            <a href="fakeNav">beauty &amp; personal care</a>
                            <ul>
                              <li>
                                <a href="fakeNav">makeup</a>
                              </li>
                              <li>
                                <a href="fakeNav">skincare</a>
                              </li>
                              <li>
                                <a href="fakeNav">premium beaty</a>
                              </li>
                              <li>
                                <a href="fakeNav">more</a>
                                <ul>
                                  <li>
                                    <a href="fakeNav">fragrances</a>
                                  </li>
                                  <li>
                                    <a href="fakeNav">luxury beauty</a>
                                  </li>
                                  <li>
                                    <a href="fakeNav">hair care</a>
                                  </li>
                                  <li>
                                    <a href="fakeNav">tools &amp; brushes</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="fakeNav">home &amp; decor</a>
                          </li>
                          <li>
                            <a href="fakeNav">kitchen</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="brand-logo">
                    <a href="index.html">
                      <img
                        src="/assets/images/icon/logo.png"
                        className="img-fluid blur-up lazyload"
                        alt="logo"
                      />
                    </a>
                  </div>
                </div>
                <div className="menu-right pull-right">
                  <div>
                    <nav id="main-nav">
                      <div className="toggle-nav">
                        <i className="fa fa-bars sidebar-bar" />
                      </div>
                      <ul
                        id="main-menu"
                        className="sm pixelstrap sm-horizontal"
                      >
                        <li>
                          <div className="mobile-back text-right">
                            Back
                            <i
                              className="fa fa-angle-right pl-2"
                              aria-hidden="true"
                            />
                          </div>
                        </li>
                        <li>
                          <NavLink to="/">HOME</NavLink>
                        </li>
                        <li>{<Link to="/contact">Contact</Link>}</li>
                        <li>{<Link to="/about">About</Link>}</li>
                        <li>{<Link to="/products">Products</Link>}</li>
                        <li>{<Link to="/3D">3D</Link>}</li>
                        <li>{<Link to="/getSize">Size</Link>}</li>

                        <li>{<Link to="/event">Events</Link>}</li>
                        <li>
                          <a href="fakeNav">Claims</a>
                        </li>
                        <li>{<Link to="/contact">Contact</Link>}</li>
                        <li>{<Link to="/about">About</Link>}</li>
                        <li>{<Link to="/products">Products</Link>}</li>
                        <li>{<Link to="/3D">3D</Link>}</li>

                        <li>{<Link to="/event">Events</Link>}</li>
                      </ul>
                    </nav>
                  </div>
                  <div>
                    <div className="icon-nav">
                      <ul>
                        <li className="onhover-div mobile-search">
                          <div>
                            <img
                              src="/assets/images/icon/search.png"
                              className="img-fluid blur-up lazyload"
                            />
                            <i className="ti-search" />
                          </div>
                          <div id="search-overlay" className="search-overlay">
                            <div>
                              <span className="closebtn" title="Close Overlay">
                                ×
                              </span>
                              <div className="overlay-content">
                                <div className="container">
                                  <div className="row">
                                    <div className="col-xl-12">
                                      <form>
                                        <div className="form-group">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                            placeholder="Search a Product"
                                          />
                                        </div>
                                        <button
                                          type="submit"
                                          className="btn btn-primary"
                                        >
                                          <i className="fa fa-search" />
                                        </button>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="onhover-div mobile-setting">
                          <div>
                            <img
                              src="/assets/images/icon/setting.png"
                              className="img-fluid blur-up lazyload"
                            />
                            <i className="ti-settings" />
                          </div>
                          <div className="show-div setting">
                            <h6>User</h6>
                            <ul>
                              <li>
                                <Link to="/user/profile">Profile</Link>
                              </li>
                              <li>
                                <a href="fakeNav">Settings</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="onhover-div mobile-cart">
                          <div>
                            <img
                              src="/assets/images/icon/cart.png"
                              className="img-fluid blur-up lazyload"
                            />
                            <i className="ti-shopping-cart" />
                          </div>
                          <ul className="show-div shopping-cart">
                            <li>
                              <div className="media">
                                <a href="fakeNav">
                                  <img
                                    className="mr-3"
                                    src="/assets/images/fashion/product/1.jpg"
                                  />
                                </a>
                                <div className="media-body">
                                  <a href="fakeNav">
                                    <h4>item name</h4>
                                  </a>
                                  <h4>
                                    <span>1 x $ 299.00</span>
                                  </h4>
                                </div>
                              </div>
                              <div className="close-circle">
                                <a href="fakeNav">
                                  <i
                                    className="fa fa-times"
                                    aria-hidden="true"
                                  />
                                </a>
                              </div>
                            </li>
                            <li>
                              <div className="media">
                                <a href="fakeNav">
                                  <img
                                    className="mr-3"
                                    src="/assets/images/fashion/product/2.jpg"
                                  />
                                </a>
                                <div className="media-body">
                                  <a href="fakeNav">
                                    <h4>item name</h4>
                                  </a>
                                  <h4>
                                    <span>1 x $ 299.00</span>
                                  </h4>
                                </div>
                              </div>
                              <div className="close-circle">
                                <a href="fakeNav">
                                  <i
                                    className="fa fa-times"
                                    aria-hidden="true"
                                  />
                                </a>
                              </div>
                            </li>
                            <li>
                              <div className="total">
                                <h5>
                                  subtotal : <span>$299.00</span>
                                </h5>
                              </div>
                            </li>
                            <li>
                              <div className="buttons">
                                <a href="cart.html" className="view-cart">
                                  view cart
                                </a>
                                <a href="fakeNav" className="checkout">
                                  checkout
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* header end */}
    </>
  );
};

export default Navbar;
