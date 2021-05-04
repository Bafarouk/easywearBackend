import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { queryApi } from "../../utils/queryApi";

import { formatDate } from "../../helpers/dateConvert";
const UserFrame = styled.div`
  border-radius: 25px;
  min-height: 150px;
  min-width: 150px;
  background-color: rgb(110, 110, 110, 0.7);
  margin: 10px;
  display: flex;
  flex-direction: column;
`;
const UserImageWrapper = styled.div`
  margin: 5px;
`;
const UserImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
`;

const UserProfile = (props) => {
  let user;
  const jwtToken = localStorage.getItem("jwt");
  const [currentUser, setCurrentUser] = useState();
  if (jwtToken) {
    // Set auth token header auth
    user = jwtDecode(jwtToken); // Decode token and get user info and exp
  }
  useEffect(() => {
    async function fetchUser() {
      const [res, err] = await queryApi("user/getUser/" + user._id, {}, "GET");
      console.log("#### res ####");
      console.log(res);
      console.log("##########");
      user = res;
      setCurrentUser(res);
    }

    fetchUser();
    console.log("current user");
    console.log(currentUser);
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>USer profile</title>
      </Helmet>
      <div className="breadcrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="page-title">
                <h2>User profile</h2>
              </div>
            </div>
            <div className="col-sm-6">
              <nav aria-label="breadcrumb" className="theme-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    User profile
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <section className="register-page section-b-space">
        <div className="container">
          <div className="row my-2">
            <div className="col-lg-8 order-lg-2">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a
                    href=""
                    data-target="#profile"
                    data-toggle="tab"
                    className="nav-link active"
                  >
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href=""
                    data-target="#messages"
                    data-toggle="tab"
                    className="nav-link"
                  >
                    Edit profile
                  </a>
                </li>
              </ul>
              <div className="tab-content py-4">
                <div className="tab-pane active" id="profile">
                  <h5 className="mb-3">First Name</h5>
                  <div className="row">
                    <div className="col-md-6">
                      {currentUser && (
                        <p className="mb-3">{currentUser.first_name}</p>
                      )}

                      <hr />
                      <h5 className="mb-3">Last Name</h5>

                      {currentUser && (
                        <p className="mb-3">{currentUser.last_name}</p>
                      )}
                      <hr />
                      <h5 className="mb-3">Birthday</h5>

                      {currentUser && (
                        <p className="mb-3">
                          {formatDate(currentUser.date_naissance)}
                        </p>
                      )}
                      <hr />
                      <h5 className="mb-3">Phone Number</h5>

                      {currentUser && (
                        <p className="mb-3">{currentUser.numero_tel}</p>
                      )}
                      <hr />
                      <h5 className="mb-3">Email</h5>

                      {currentUser && (
                        <p className="mb-3">{currentUser.email}</p>
                      )}
                      <hr />
                      <h5 className="mb-3">Allergies</h5>

                      {currentUser && (
                        <p className="mb-3">{currentUser.alergie}</p>
                      )}
                      <hr />
                      <h5 className="mb-3">Height</h5>

                      {currentUser && (
                        <p className="mb-3">{currentUser.height}</p>
                      )}

                      <hr />
                      <h5 className="mb-3">Weight</h5>

                      {currentUser && (
                        <p className="mb-3">{currentUser.weight}</p>
                      )}
                      <hr />
                      <h5 className="mb-3">Favorite Color</h5>

                      {currentUser && (
                        <p className="mb-3">{currentUser.fav_color}</p>
                      )}
                      <hr />
                      <h5 className="mb-3">Gender</h5>

                      {currentUser && (
                        <p className="mb-3">{currentUser.gender}</p>
                      )}
                      <hr />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="messages">
                  <div className="alert alert-info alert-dismissable">
                    <a className="panel-close close" data-dismiss="alert">
                      ×
                    </a>{" "}
                    In this tab you can{" "}
                    <strong>modify your profile information</strong>.
                  </div>
                  <table className="table table-hover table-striped">
                    <tbody>
                      <tr>
                        <td>
                          <span className="float-right font-weight-bold">
                            *
                          </span>{" "}
                          Click on this button to modify your profile
                          information.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="float-right font-weight-bold"></span>{" "}
                          <Link
                            className="btn btn-primary"
                            to={`/user/editprofile/${user._id}`}
                          >
                            Edit Profile
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-lg-1 text-center">
              <UserImageWrapper>
                {currentUser && (
                  <UserImage
                    className="mx-auto img-fluid img-circle d-block"
                    src={currentUser.image_url}
                  ></UserImage>
                )}
              </UserImageWrapper>
              <h6 className="mt-2">Profile Photo</h6>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default UserProfile;
