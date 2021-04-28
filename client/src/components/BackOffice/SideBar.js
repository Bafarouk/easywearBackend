import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as Icon from "react-feather";
import { fetchClaims, selectClaims } from "../../redux/slices/claimSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts, selectContacts } from "../../redux/slices/contactSlice";
import { fetchUsers, selectUsers } from "../../redux/slices/userSlice";
import jwtDecode from "jwt-decode";

const SideBar = () => {
  let user;
  const jwtToken = localStorage.getItem("jwt");
  const [userr, setUserr] = useState({
    first_name: "",
    last_name: "",
    email: "",

    date_naissance: "",
    numero_tel: "",
    alergie: "",
    fav_color: "",
    height: "",
    weight: "",
    gender: "",
    image_url: "/assetsBack/images/dashboard/multikart-logo.png",
    role: "",
  });
  console.log(jwtToken);
  if (jwtToken) {
    // Set auth token header auth
    user = jwtDecode(jwtToken); // Decode token and get user info and exp
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchClaims());
    dispatch(fetchContacts());
    dispatch(fetchUsers());
    console.log("############");
    /* const jj = localStorage.getItem("jwt"); */
    setUserr(user);
    //console.log(jwtDecode(jj).image_url);
  }, [dispatch]);
  const [claims, error] = useSelector(selectClaims);
  const [contacts, err] = useSelector(selectContacts);
  const [users, userErrors] = useSelector(selectUsers);
  return (
    <>
      {/* page-wrapper Start*/}
      <div className="page-wrapper">
        {/* Page Header Start*/}

        {/* Page Header Ends */}
        {/* Page Body Start*/}
        <div className="page-body-wrapper">
          {/* Page Sidebar Start*/}
          <div className="page-sidebar">
            <div className="main-header-left d-none d-lg-block">
              <div className="logo-wrapper">
                <a href="index.html">
                  <img
                    className="blur-up lazyloaded"
                    src="/assetsBack/images/dashboard/multikart-logo.png"
                    alt="img"
                  />
                </a>
                <s div></s>
              </div>
              <s div>
                <div className="sidebar custom-scrollbar">
                  <div className="sidebar-user text-center">
                    <div>
                      {userr && (
                        <img
                          className="img-60 rounded-circle lazyloaded blur-up"
                          src={userr.image_url}
                          alt="#"
                        />
                      )}
                    </div>
                    {userr && (
                      <h3>
                        {userr.first_name} {userr.last_name}
                      </h3>
                    )}
                    {userr && <p>{userr.role}</p>}
                  </div>
                  <ul className="sidebar-menu">
                    <li>
                      <a className="sidebar-header" href="index.html">
                        <Icon.Home />
                        <span>Dashboard</span>
                      </a>
                    </li>
                    <li>
                      <a className="sidebar-header" href="#">
                        <Icon.Box /> {<Link to="/Products">Products</Link>}
                        <i className="fa fa-angle-right pull-right" />
                      </a>
                    </li>

                    <li>
                      <a className="sidebar-header" href="#">
                        <Icon.Activity />
                        {<Link to="/Events">Events</Link>}
                        <i className="fa fa-angle-right pull-right" />
                      </a>
                    </li>
                    <li>
                      <a className="sidebar-header" href="#">
                        <Icon.Users />
                        {<Link to="/UsersBack">Users ({users.length})</Link>}
                        <i className="fa fa-angle-right pull-right" />
                      </a>
                    </li>
                    <li>
                      <a className="sidebar-header" href="#">
                        <Icon.Umbrella />
                        <span>Brands</span>
                        <i className="fa fa-angle-right pull-right" />
                      </a>
                    </li>
                    <li>
                      <a className="sidebar-header" href="#">
                        <Icon.Chrome />
                        <span>Localization</span>
                        <i className="fa fa-angle-right pull-right" />
                      </a>
                    </li>
                    <li>
                      <a className="sidebar-header">
                        <Icon.BarChart />
                        {<Link to="/ClaimsBack">Claims ({claims.length})</Link>}
                        <i className="fa fa-angle-right pull-right" />
                      </a>
                    </li>

                    <li>
                      <a className="sidebar-header" href="#">
                        <Icon.MessageSquare />
                        {
                          <Link to="/Contacts">
                            Messages ({contacts.length})
                          </Link>
                        }
                        <i className="fa fa-angle-right pull-right" />
                      </a>
                    </li>
                    <li>
                      <a className="sidebar-header" href="#">
                        <Icon.Settings />
                        <span>Settings</span>
                        <i className="fa fa-angle-right pull-right" />
                      </a>
                    </li>

                    <li>
                      <a className="sidebar-header" href="login.html">
                        <Icon.LogIn />
                        <span>Login</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </s>
            </div>
            <s div>
              {/* Page Sidebar Ends*/}
              {/* Right sidebar Start*/}
              <div className="right-sidebar" id="right_side_bar">
                <div>
                  <div className="container p-0">
                    <div className="modal-header p-l-20 p-r-20">
                      <div className="col-sm-8 p-0">
                        <h6 className="modal-title font-weight-bold">
                          FRIEND LIST
                        </h6>
                      </div>
                      <div className="col-sm-4 text-end p-0">
                        <Icon.Settings />
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
                              src="/assetsBack/images/dashboard/user.png"
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
                              src="/assetsBack/images/dashboard/user1.jpg"
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
                              src="/assetsBack/images/dashboard/user2.jpg"
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
                              src="/assetsBack/images/dashboard/user3.jpg"
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
                              src="/assetsBack/images/dashboard/man.png"
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
                              src="/assetsBack/images/dashboard/user5.jpg"
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
                              src="/assetsBack/images/dashboard/designer.jpg"
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
              {/* Right sidebar Ends*/}
              {/* Container-fluid Ends*/}{" "}
            </s>
          </div>
        </div>
      </div>
    </>
  );
};
export default SideBar;
