import React, { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import * as Icon from "react-feather";

import { addClaim, fetchClaims } from "../../redux/slices/claimSlice";
import { useHistory, useParams } from "react-router-dom";
import { queryApi } from "../../utils/queryApi";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { UserContext } from "../../contexts/userContext";
import jwtDecode from "jwt-decode";

const AddClaim = () => {
  let user;
  const jwtToken = localStorage.getItem("jwt");
  console.log(jwtToken);
  if (jwtToken) {
    // Set auth token header auth
    user = jwtDecode(jwtToken); // Decode token and get user info and exp
  }
  const yupSchema = Yup.object({
    description: Yup.string()
      .min(3, "Minimum 3 caractéres")
      .max(80, "Maximum 80 caractéres"),
  });
  const [loader, setLoader] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [previewSource, setPreviewSource] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const [error, setError] = useState({ visible: false, message: "" });
  // const [user, setUser] = useContext(UserContext);
  const formik = useFormik({
    initialValues: {
      type: "comment",
      description: "",

      state: 1,
      user_id: user._id,
    },
    validationSchema: yupSchema,
    onSubmit: async (values) => {
      console.log(values.type);
      values.image_url = previewSource;
      setLoader(true);
      const [res, err] = await queryApi("claim/addClaim", values, "POST");
      if (err) {
        setLoader(false);
        setError({
          visible: true,
          message: JSON.stringify(err.errors, null, 2),
        });
      } else {
        dispatch(addClaim(res));
        alert("Claim added with success .. wait for adminstrator confirmation");
        history.push("/user/profile/claims");
      }
    },
  });
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreviewSource(reader.result);
    };
  };
  return (
    <>
      <section className="collection section-b-space ratio_square ">
        <h3>Add a personnal Claim..</h3>
        <br></br>
        <br></br>
        <br></br>
        <div className="container">
          <div className="row partition-collection">
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group row">
                <label
                  htmlFor="validationCustom1"
                  className="col-xl-3 col-md-4"
                >
                  <span>*</span> Description
                </label>
                <div className="col-xl-8 col-md-7">
                  <input
                    className="form-control"
                    name="description"
                    id="description"
                    type="text"
                    required
                    value={formik.values.description}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.description && formik.touched.description && (
                    <FormError>{formik.errors.description}</FormError>
                  )}
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="validationCustom2"
                  className="col-xl-3 col-md-4"
                >
                  <span>*</span> image
                </label>
                <div className="col-xl-8 col-md-7">
                  <input
                    className="form-control"
                    type="file"
                    name="image_url"
                    id="image_url"
                    placeholder="Image"
                    onChange={(event) => {
                      formik.setFieldValue("image_url", event.target.files[0]);
                      previewFile(event.target.files[0]);
                    }}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="validationCustom0"
                  className="col-xl-3 col-md-4"
                >
                  <span>*</span> Type Claim
                </label>
                <div className="col-xl-8 col-md-7">
                  <select
                    className="btn btn-primary dropdown-toggle"
                    defaultValue={formik.values.type}
                    name="type"
                    id="type"
                    onChange={formik.handleChange}
                  >
                    <option value="comment">comment claim</option>
                    <option value="product">Product Claim</option>
                  </select>
                </div>
              </div>

              <div className="pull-right">
                <button type="submit" className="btn btn-primary">
                  {!loader ? (
                    "Add Claim"
                  ) : (
                    <div>
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default AddClaim;
const FormError = styled.p`
  color: #f74b1b;
`;
