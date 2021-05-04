import React from "react";

import * as Icon from "react-feather";
import jwtDecode from "jwt-decode";
import { Link } from "react-router-dom";

const NavbarBack = () => {
  let user;
  const jwtToken = localStorage.getItem("jwt");
  console.log(jwtToken);
  if (jwtToken) {
    // Set auth token header auth
    user = jwtDecode(jwtToken); // Decode token and get user info and exp
  }
  return (
    <>
      {/* page-wrapper Start*/}
      <div className="page-wrapper">
        {/* Page Header Start*/}
        <div className="page-main-header">
          <div className="main-header-right row">
            <div className="main-header-left d-lg-none w-auto">
              <div className="logo-wrapper">
                <a href="index.html">
                  <img
                    className="blur-up lazyloaded"
                    src="/assetsBack/images/mark.jpg"
                    alt="img"
                  />
                </a>
              </div>
            </div>
            <div className="mobile-sidebar w-auto">
              <div className="media-body text-end switch-sm">
                <label className="switch">
                  <a href="#">
                    <i id="sidebar-toggle" data-feather="align-left" />
                  </a>
                </label>
              </div>
            </div>
            <div className="nav-right col">
              <ul className="nav-menus">
                <li>
                  <form className="form-inline search-form">
                    <div className="form-group">
                      <input
                        className="form-control-plaintext"
                        type="search"
                        placeholder="Search.."
                      />
                      <span className="d-sm-none mobile-search">
                        <i data-feather="search" />
                      </span>
                    </div>
                  </form>
                </li>
                <li>
                  <a
                    className="text-dark"
                    href="#!"
                    onclick="javascript:toggleFullScreen()"
                  >
                    <Icon.Globe />
                  </a>
                </li>
                <li className="onhover-dropdown">
                  <a className="txt-dark" href="#">
                    <h6>EN</h6>
                  </a>
                  <ul className="language-dropdown onhover-show-div p-20">
                    <li>
                      <a href="#" data-lng="en">
                        <i className="flag-icon flag-icon-is" /> English
                      </a>
                    </li>
                    <li>
                      <a href="#" data-lng="es">
                        <i className="flag-icon flag-icon-um" /> Spanish
                      </a>
                    </li>
                    <li>
                      <a href="#" data-lng="pt">
                        <i className="flag-icon flag-icon-uy" /> Portuguese
                      </a>
                    </li>
                    <li>
                      <a href="#" data-lng="fr">
                        <i className="flag-icon flag-icon-nz" /> French
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="onhover-dropdown">
                  <Icon.Bell />
                  <span className="badge badge-pill badge-primary pull-right notification-badge">
                    3
                  </span>
                  <span className="dot" />
                  <ul className="notification-dropdown onhover-show-div p-0">
                    <li>
                      Notification{" "}
                      <span className="badge badge-pill badge-primary pull-right">
                        3
                      </span>
                    </li>
                    <li>
                      <div className="media">
                        <div className="media-body">
                          <h6 className="mt-0">
                            <span>
                              <Icon.ShoppingBag />
                            </span>
                            Your order ready for Ship..!
                          </h6>
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetuer.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="media">
                        <div className="media-body">
                          <h6 className="mt-0 txt-success">
                            <span>
                              <i
                                className="download-color font-success"
                                data-feather="download"
                              />
                            </span>
                            Download Complete
                          </h6>
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetuer.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="media">
                        <div className="media-body">
                          <h6 className="mt-0 txt-danger">
                            <span>
                              <i
                                className="alert-color font-danger"
                                data-feather="alert-circle"
                              />
                            </span>
                            250 MB trash files
                          </h6>
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetuer.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="txt-dark">
                      <a href="#">All</a> notification
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <Icon.MessageSquare />
                    <span className="dot" />
                  </a>
                </li>
                <li className="onhover-dropdown">
                  <div className="media align-items-center">

                    {user && (
                      <img
                        className="align-self-center pull-right img-50 rounded-circle blur-up lazyloaded"
                        src={user.image_url}
                        alt="header-user"
                      />
                    )}

                    <div className="dotted-animation">
                      <span className="animate-circle" />
                      <span className="main-circle" />
                    </div>
                  </div>
                  <ul className="profile-dropdown onhover-show-div p-20 profile-dropdown-hover">
                    <li>
                      {user && (
                        <Link
                          to={{
                            pathname: "/editUserBack",
                            id: user._id,
                          }}
                        >
                          <i data-feather="user" />
                          Edit Profile
                        </Link>
                      )}
                    </li>
                    <li>
                      <a href="#">
                        <i data-feather="mail" />
                        Inbox
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i data-feather="lock" />
                        Lock Screen
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i data-feather="settings" />
                        Settings
                      </a>
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
              <div className="d-lg-none mobile-toggle pull-right">
                <i data-feather="more-horizontal" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-sidebar">
        <div className="main-header-left d-none d-lg-block">
          <div className="logo-wrapper">
            <a href="index.html">
              <img
                className="blur-up lazyloaded"
                src="/assetsBack/images/mark.jpg"
                alt="img"
                style={{ width: 200 }}
              />
            </a>
          </div>
        </div>
        <div className="sidebar custom-scrollbar"></div>
      </div>
      <div className="right-sidebar" id="right_side_bar">
        <div>
          <div className="container p-0">
            <div className="modal-header p-l-20 p-r-20">
              <div className="col-sm-8 p-0">
                <h6 className="modal-title font-weight-bold">FRIEND LIST</h6>
              </div>
              <div className="col-sm-4 text-end p-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-settings me-2"
                >
                  <circle cx={12} cy={12} r={3} />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="friend-list-search mt-0">
            <input type="text" placeholder="search friend" />
            <i className="fa fa-search" />
          </div>
          <div className="p-l-30 p-r-30">
            <div className="chat-box">
              <div className="people-list friend-list">
                <ul className="list">
                  <li className="clearfix">
                    <img
                      className="rounded-circle user-image"
                      src="/assets/images/dashboard/user.png"
                      alt="img"
                    />
                    <div className="status-circle online" />
                    <div className="about">
                      <div className="name">Vincent Porter</div>
                      <div className="status"> Online</div>
                    </div>
                  </li>
                  <li className="clearfix">
                    <img
                      className="rounded-circle user-image"
                      src="/assets/images/dashboard/user1.jpg"
                      alt="img"
                    />
                    <div className="status-circle away" />
                    <div className="about">
                      <div className="name">Ain Chavez</div>
                      <div className="status"> 28 minutes ago</div>
                    </div>
                  </li>
                  <li className="clearfix">
                    <img
                      className="rounded-circle user-image"
                      src="/assets/images/dashboard/user2.jpg"
                      alt="img"
                    />
                    <div className="status-circle online" />
                    <div className="about">
                      <div className="name">Kori Thomas</div>
                      <div className="status"> Online</div>
                    </div>
                  </li>
                  <li className="clearfix">
                    <img
                      className="rounded-circle user-image"
                      src="/assets/images/dashboard/user3.jpg"
                      alt="img"
                    />
                    <div className="status-circle online" />
                    <div className="about">
                      <div className="name">Erica Hughes</div>
                      <div className="status"> Online</div>
                    </div>
                  </li>
                  <li className="clearfix">
                    <img
                      className="rounded-circle user-image"
                      src="/assets/images/dashboard/man.png"
                      alt="img"
                    />
                    <div className="status-circle offline" />
                    <div className="about">
                      <div className="name">Ginger Johnston</div>
                      <div className="status"> 2 minutes ago</div>
                    </div>
                  </li>
                  <li className="clearfix">
                    <img
                      className="rounded-circle user-image"
                      src="/assets/images/dashboard/user5.jpg"
                      alt="img"
                    />
                    <div className="status-circle away" />
                    <div className="about">
                      <div className="name">Prasanth Anand</div>
                      <div className="status"> 2 hour ago</div>
                    </div>
                  </li>
                  <li className="clearfix">
                    <img
                      className="rounded-circle user-image"
                      src="/assets/images/dashboard/designer.jpg"
                      alt="img"
                    />
                    <div className="status-circle online" />
                    <div className="about">
                      <div className="name">Hileri Jecno</div>
                      <div className="status"> Online</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarBack;
