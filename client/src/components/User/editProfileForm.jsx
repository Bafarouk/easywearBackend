import Joi from "joi-browser";
import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { queryApi } from "../../utils/queryApi";
import { useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";
import { updateUser } from "../../redux/slices/userSlice";
import { UserContext } from "../../contexts/userContext";
import { Helmet } from "react-helmet";

const EditProfileForm = (props) => {
  const [error, setError] = useState({ visible: false, message: "" });
  const dispatch = useDispatch();
  const currentUser = useContext(UserContext);
  const [previewSource, setPreviewSource] = useState("");
  let i = 0;
  const [user, setUser] = useState({});
  const history = useHistory();

  useEffect(() => {
    async function fetchUser() {
      const [res, err] = await queryApi("user/profile", {}, "GET");
      setUser(res);
    }

    fetchUser();
  }, []);

  const [info, setInfo] = useState({
    data: {
      first_name: "",
      last_name: "",
      email: "",
      /* password: "", */
      date_naissance: "",
      numero_tel: "",
      alergie: "",
      fav_color: "",
      height: "",
      weight: "",
      gender: "",
      image_url: "",
      role: "",
    },
    errors: {},
  });
  const schema = {
    first_name: Joi.string().allow("").label("First Name"),
    last_name: Joi.string().allow("").label("Last Name"),
    email: Joi.string().email().allow("").label("Email"),
    /* password: Joi.string().min(8).allow("").label("Password"), */
    date_naissance: Joi.date().allow("").label("Birthday"),
    numero_tel: Joi.number().min(8).allow("").label("Phone Number"),
    alergie: Joi.string().allow("").label("Allergy"),
    fav_color: Joi.string().allow("").label("Favorite Color"),
    height: Joi.number().min(1).max(3).allow("").label("Height"),
    weight: Joi.number().min(1).max(300).allow("").label("Weight"),
    gender: Joi.string().allow("").label("Gender"),
    image_url: Joi.string().allow("").label("Image"),
    role: Joi.string().allow("").label("Role"),
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

    if (errors) {
      setInfo({ data, errors });
    }
    // setInfo({ errors: errors || {} });
    info.data.role = "user";
    info.data.image_url = previewSource;
    console.log(Object.keys(info.data));
    if (info.data.image_url === "") {
      console.log("image empty");
      delete info.data["image_url"];
    }
    for (let key of Object.keys(info.data)) {
      if (info.data[key] === "") {
        delete info.data[key];
      }
    }
    console.log(info.data);
    const userData = info.data;
    const [res, err] = await queryApi(
      "user/update/" + user._id,
      userData,
      "PUT"
    );
    if (res.hasOwnProperty("error")) {
      console.log("errrrror");
      setError({
        visible: true,
        message: res["error"],
      });
    } else {
      dispatch(updateUser(res));
      console.log("user updated");
      props.history.push("/user/userProfile");
      // window.location = "/user/profile";
    }
  }
  function handleChange(e) {
    console.log(e.currentTarget.name);
    if (e.currentTarget.name === "image_url") {
      previewFile(e.currentTarget.files[0]);
      console.log(previewSource);
    }
    const data = { ...info.data };
    const errors = { ...info.errors };
    const errorMessage = validateProperty(e.currentTarget);
    if (errorMessage) errors[e.currentTarget.name] = errorMessage;
    else delete errors[e.currentTarget.name];
    data[e.currentTarget.name] = e.currentTarget.value;
    setInfo({ data, errors });
  }

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreviewSource(reader.result);
    };
  };

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Edit profile</title>
      </Helmet>
      <div className="breadcrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="page-title">
                <h2>edit profile</h2>
              </div>
            </div>
            <div className="col-sm-6">
              <nav aria-label="breadcrumb" className="theme-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    edit profile
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <section className="register-page section-b-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>edit profile</h3>
              <div className="theme-card">
                <form onSubmit={handleSubmit} className="theme-form">
                  <div className="form-row">
                    <div className="col-md-6">
                      <label htmlFor="first_name">First Name:*</label>
                      <input
                        type="text"
                        name="first_name"
                        onChange={handleChange}
                        className="form-control"
                        id="first_name"
                        placeholder="First Name"
                        required=""
                        defaultValue={user.first_name}
                      />
                      {info.errors["first_name"] && (
                        <div className="alert alert-danger">
                          <strong>{info.errors["first_name"]}</strong>
                        </div>
                      )}
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="last_name">Last Name:*</label>
                      <input
                        type="text"
                        name="last_name"
                        onChange={handleChange}
                        className="form-control"
                        id="last_name"
                        placeholder="Last Name"
                        required=""
                        defaultValue={user.last_name}
                      />
                      {info.errors["last_name"] && (
                        <div className="alert alert-danger">
                          <strong>{info.errors["last_name"]}</strong>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-md-6">
                      <label htmlFor="email">email:*</label>
                      <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        required=""
                        defaultValue={user.email}
                      />
                      {info.errors["email"] && (
                        <div className="alert alert-danger">
                          <strong>{info.errors["email"]}</strong>
                        </div>
                      )}
                    </div>
                    {/*  <div className="col-md-6">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        className="form-control"
                        id="password"
                        placeholder="Enter your password"
                        required=""
                        defaultValue={user.password}
                      />
                      {info.errors["password"] && (
                        <div className="alert alert-danger">
                          <strong>{info.errors["password"]}</strong>
                        </div>
                      )}
                    </div> */}
                    <div className="col-md-6">
                      <label htmlFor="date_naissance">Birthday:*</label>
                      <input
                        type="date"
                        name="date_naissance"
                        onChange={handleChange}
                        className="form-control"
                        id="date_naissance"
                        placeholder="Enter your birthday"
                        required=""
                        defaultValue={user.date_naissance}
                      />
                      {info.errors["date_naissance"] && (
                        <div className="alert alert-danger">
                          <strong>{info.errors["date_naissance"]}</strong>
                        </div>
                      )}
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="numero_tel">Phone Number:*</label>
                      <input
                        type="number"
                        name="numero_tel"
                        onChange={handleChange}
                        className="form-control"
                        id="numero_tel"
                        placeholder="Enter your Phone Number"
                        required=""
                        defaultValue={user.numero_tel}
                      />
                      {info.errors["numero_tel"] && (
                        <div className="alert alert-danger">
                          <strong>{info.errors["numero_tel"]}</strong>
                        </div>
                      )}
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="alergie">Allergy</label>
                      <input
                        type="text"
                        name="alergie"
                        onChange={handleChange}
                        className="form-control"
                        id="alergie"
                        placeholder="Enter your Allergy"
                        required=""
                        defaultValue={user.alergie}
                      />
                      {info.errors["alergie"] && (
                        <div className="alert alert-danger">
                          <strong>{info.errors["alergie"]}</strong>
                        </div>
                      )}
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="fav_color">Favoite Color</label>
                      <input
                        type="text"
                        name="fav_color"
                        onChange={handleChange}
                        className="form-control"
                        id="fav_color"
                        placeholder="Favorite Color"
                        required=""
                        defaultValue={user.fav_color}
                      />
                      {info.errors["fav_color"] && (
                        <div className="alert alert-danger">
                          <strong>{info.errors["fav_color"]}</strong>
                        </div>
                      )}
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="height">Height</label>
                      <input
                        type="number"
                        name="height"
                        step="0.01"
                        onChange={handleChange}
                        className="form-control"
                        id="height"
                        placeholder="Height"
                        required=""
                        defaultValue={user.height}
                      />
                      {info.errors["height"] && (
                        <div className="alert alert-danger">
                          <strong>{info.errors["height"]}</strong>
                        </div>
                      )}
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="weight">Weight</label>
                      <input
                        type="number"
                        name="weight"
                        onChange={handleChange}
                        className="form-control"
                        id="weight"
                        placeholder="Weight"
                        required=""
                        defaultValue={user.weight}
                      />
                      {info.errors["weight"] && (
                        <div className="alert alert-danger">
                          <strong>{info.errors["weight"]}</strong>
                        </div>
                      )}
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="last_name">Gender:*</label>
                      <select
                        id="gender"
                        name="gender"
                        onChange={handleChange}
                        required=""
                        class="form-select col"
                        aria-label="Default select example"
                        style={{
                          height: "50%",
                          marginTop: "1px",
                          borderColor: "#eaeaea",
                        }}
                        defaultValue={user.gender}
                      >
                        {/*   <option>Choose your gender</option> */}
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                      {info.errors["gender"] && (
                        <div className="alert alert-danger">
                          <strong>{info.errors["gender"]}</strong>
                        </div>
                      )}
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="image_url">Image:*</label>
                      <input
                        type="file"
                        name="image_url"
                        onChange={handleChange}
                        className="form-control"
                        id="image_url"
                        placeholder="image_url"
                        required=""
                      />
                      {info.errors["image_url"] && (
                        <div className="alert alert-danger">
                          <strong>{info.errors["image_url"]}</strong>
                        </div>
                      )}
                    </div>
                    {error.visible && (
                      <div className="alert alert-danger col-12">
                        <strong>{error.message}</strong>
                      </div>
                    )}
                    <button
                      type="submit"
                      disabled={validate()}
                      className="btn btn-solid"
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default EditProfileForm;
