import Joi from "joi-browser";
import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import { queryApi } from "../../utils/queryApi";
import { useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";
import { addUser } from "../../redux/slices/userSlice";
import { UserContext } from "../../contexts/userContext";
import { Helmet } from "react-helmet";

const LoginForm = () => {
  const [error, setError] = useState({ visible: false, message: "" });
  const history = useHistory();
  const dispatch = useDispatch();
  const currentUser = useContext(UserContext);

  const [info, setInfo] = useState({
    data: {
      email: "",
      password: "",
    },
    errors: {},
  });
  const schema = {
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().min(8).required().label("Password"),
  };

  function validate() {
    const options = {
      abortEarly: false,
    };
    const { error } = Joi.validate(info.data, schema, options);
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  }

  function validateProperty({ name, value }) {
    const obj = { [name]: value };
    const schemaa = { [name]: schema[name] };
    const { error } = Joi.validate(obj, schemaa);
    return error ? error.details[0].message : null;
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const data = { ...info.data };
    const errors = validate();
    console.log(errors);
    /* console.log("context");
    console.log(currentUser.connectedUser);
    console.log("####### after update");
    currentUser.onLoggedIn({
      username: "alouiomar@mail.tn",
      password: "12345678",
      role: "user",
      _id: "23aaaaaaaaa",
    });
    console.log(currentUser.connectedUser); */
    if (errors) {
      setInfo({ data, errors });
    }
    // setInfo({ errors: errors || {} });
    console.log(info.data);
    const userData = info.data;
    const [res, err] = await queryApi("user/login", userData, "POST");
    if (res.hasOwnProperty("error")) {
      console.log("errrrror");
      setError({
        visible: true,
        message: res["error"],
      });
    } else {
      currentUser.onLoggedIn(jwtDecode(res));
      localStorage.setItem("jwt", res);
      dispatch(addUser(jwtDecode(res)));
      if (jwtDecode(res).role === "user") {
        window.location = "/user/profile";
      } else {
        window.location = "/UsersBack";
      }
    }
  }
  function handleChange(e) {
    console.log(e.currentTarget.name);
    const data = { ...info.data };
    const errors = { ...info.errors };
    const errorMessage = validateProperty(e.currentTarget);
    if (errorMessage) errors[e.currentTarget.name] = errorMessage;
    else delete errors[e.currentTarget.name];
    data[e.currentTarget.name] = e.currentTarget.value;
    setInfo({ data, errors });
  }

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
      </Helmet>
      <div className="breadcrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="page-title">
                <h2>customer's login</h2>
              </div>
            </div>
            <div className="col-sm-6">
              <nav aria-label="breadcrumb" className="theme-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active">login</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <section className="login-page section-b-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h3>Login</h3>
              <div className="theme-card">
                <form onSubmit={handleSubmit} className="theme-form">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      name="email"
                      onChange={handleChange}
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      required=""
                    />
                  </div>
                  {info.errors["email"] && (
                    <div className="alert alert-danger">
                      <strong>{info.errors["email"]}</strong>
                    </div>
                  )}
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                      required=""
                    />
                  </div>
                  {info.errors["password"] && (
                    <div className="alert alert-danger">
                      <strong>{info.errors["password"]}</strong>
                    </div>
                  )}

                  {error.visible && (
                    <div className="alert alert-danger">
                      <strong>{error.message}</strong>
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={validate()}
                    className="btn btn-solid"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-6 right-login">
              <h3>New Customer</h3>
              <div className="theme-card authentication-right">
                <h6 className="title-font">Create A Account</h6>
                <p>
                  Sign up for a free account at our store. Registration is quick
                  and easy. It allows you to be able to order from our shop. To
                  start shopping click register.
                </p>
                <button
                  type="button"
                  onClick={() => history.push("/auth/register")}
                  className="btn btn-solid"
                >
                  Create an Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default LoginForm;
