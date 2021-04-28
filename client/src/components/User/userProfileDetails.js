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
  max-width: 150px;
`;
const UserImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
`;

const UserProfileDetails = () => {
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
    <>
      <div className="col-lg-9">
        <Helmet>
          <meta charSet="utf-8" />
          <title>User Profile</title>
        </Helmet>
        <div className="dashboard-right">
          <div className="dashboard">
            <UserImageWrapper>
              {currentUser && (
                <UserImage src={currentUser.image_url}></UserImage>
              )}
            </UserImageWrapper>
            <div className="page-title">
              <h2>My Dashboard</h2>
            </div>
            <div className="welcome-msg">
              <div>
                Hello, {/* {user.first_name} {user.last_name} */}
                {currentUser && (
                  <div>
                    {currentUser.first_name} {currentUser.last_name}
                  </div>
                )}{" "}
                !
              </div>
              <p>
                From your My Account Dashboard you have the ability to view a
                snapshot of your recent account activity and update your account
                information. Select a link below to view or edit information.
              </p>
            </div>
            <div className="box-account box-info">
              <div className="box-head">
                <h2>Account Information</h2>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="box">
                    <div className="box-title">
                      <h3>Contact Information</h3>
                      {/*  <a href="#">Edit</a> */}
                    </div>
                    <div className="box-content">
                      <h6>
                        {/*   {user.first_name} {user.last_name} */}
                        {currentUser && (
                          <div>
                            {currentUser.first_name} {currentUser.last_name}
                          </div>
                        )}
                      </h6>
                      <h6>
                        {/*  {user.email} */}
                        {currentUser && <div>{currentUser.email}</div>}
                      </h6>
                      <h6>{/* <a href="#">Change Password</a> */}</h6>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="box">
                    <div className="box-title">
                      <h3>Allergies</h3>
                      <Link to={`/user/editprofile/${user._id}`}>Edit</Link>
                    </div>
                    <div className="box-content">
                      <div>
                        {/* {user.alergie} */}{" "}
                        {currentUser && <div>{currentUser.alergie}</div>}.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="box">
                  <div className="box-title">
                    <h3>User information</h3>
                    {/*  <a href="#">Manage Addresses</a> */}
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <h6>
                        Height: {/* {user.height} */}
                        {currentUser && <div>{currentUser.height}</div>}
                      </h6>
                      <h6>
                        Favorite Color: {/* {user.fav_color} */}{" "}
                        {currentUser && <div>{currentUser.fav_color}</div>}
                        <br />
                        {/* <a href="#">Edit Address</a> */}
                      </h6>
                      <h6>
                        Gender: {/* {user.gender} */}
                        {currentUser && <div>{currentUser.gender}</div>}
                      </h6>
                    </div>
                    <div className="col-sm-6">
                      <h6>
                        Weight: {/* {user.weight} */}
                        {currentUser && <div>{currentUser.weight}</div>}
                      </h6>
                      <h6>
                        Phone Number: {/* {user.numero_tel} */}
                        {currentUser && <div>{currentUser.numero_tel}</div>}
                        <br />
                        {/* <a href="#">Edit Address</a> */}
                      </h6>
                      <h6>
                        Birthday: {/* {formatDate(user.date_naissance)} */}
                        {currentUser && (
                          <div>{formatDate(currentUser.date_naissance)}</div>
                        )}
                      </h6>
                    </div>
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

export default UserProfileDetails;
