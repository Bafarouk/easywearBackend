import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

const EmailVerified = () => {
  return (
    <>
      <div className="breadcrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="page-title">
                <h2>Email verified</h2>
              </div>
            </div>
            <div className="col-sm-6">
              <nav aria-label="breadcrumb" className="theme-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Email verified
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <section className="about-page section-b-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-section">
                <img
                  src="/assets/images/about/about%20us.jpg"
                  className="img-fluid blur-up lazyloaded"
                  alt
                />
              </div>
            </div>
            <div className="col-sm-12">
              <br></br>
              <h4>
                Email verified and account is activated you can now{" "}
                <Link className="navbar-brand" to="/auth/login">
                  login
                </Link>
                .
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmailVerified;
