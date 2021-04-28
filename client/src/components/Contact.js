import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import * as Icon from "react-feather";

import { addContact } from "../redux/slices/contactSlice";
import { useHistory, useParams } from "react-router-dom";
import { queryApi } from "../utils/queryApi";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { UserContext } from "../contexts/userContext";
const Contact = () => {
  const yupSchema = Yup.object({
    firstName: Yup.string()
      .min(5, "Minimum 5 caractéres")
      .max(10, "Maximum 10 caractéres"),
    lastName: Yup.string()
      .min(5, "Minimum 5 caractéres")
      .max(10, "Maximum 10 caractéres"),
    description: Yup.string()
      .min(3, "Minimum 3 caractéres")
      .max(80, "Maximum 80 caractéres"),
    Phone: Yup.number(),
    Email: Yup.string()
      .min(3, "Minimum 3 caractéres")
      .max(80, "Maximum 80 caractéres"),
  });
  const [loader, setLoader] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [previewSource, setPreviewSource] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const [error, setError] = useState({ visible: false, message: "" });

  //const [user, setUser] = useContext(UserContext);


  const formik = useFormik({
    initialValues: {},
    validationSchema: yupSchema,
    onSubmit: async (values) => {
      console.log(values.type);

      setLoader(true);
      const [res, err] = await queryApi("contact/addContact", values, "POST");
      if (err) {
        setLoader(false);
        setError({
          visible: true,
          message: JSON.stringify(err.errors, null, 2),
        });
      } else {
        if (window.confirm("Are you sure of Your Message ?") === true) {
          dispatch(addContact(res));
          alert(
            "Your Message has been sent to the adminstrator with success .."
          );
          history.push("/");
        }
      }
    },
  });

  return (
    <>
      <div className='breadcrumb-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-6'>
              <div className='page-title'>
                <h2>contact</h2>
              </div>
            </div>
            <div className='col-sm-6'>
              <nav aria-label='breadcrumb' className='theme-breadcrumb'>
                <ol className='breadcrumb'>
                  <li className='breadcrumb-item'>
                    <a href='index.html'>Home</a>
                  </li>
                  <li className='breadcrumb-item active'>contact</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <section className='contact-page section-b-space'>
        <div className='container'>
          <div className='row section-b-space'>
            <div className='col-lg-7 map'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1605.811957341231!2d25.45976406005396!3d36.3940974010114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1550912388321'
                allowFullScreen
              />
            </div>
            <div className='col-lg-5'>
              <div className='contact-right'>
                <ul>
                  <li>
                    <div className='contact-icon'>
                      <img
                        src='/assets/images/icon/phone.png'
                        alt='Generic placeholder image'
                      />
                      <h6>Contact Us</h6>
                    </div>
                    <div className='media-body'>
                      <p>+91 123 - 456 - 7890</p>
                      <p>+86 163 - 451 - 7894</p>
                    </div>
                  </li>
                  <li>
                    <div className='contact-icon'>
                      <i className='fa fa-map-marker' aria-hidden='true' />
                      <h6>Address</h6>
                    </div>
                    <div className='media-body'>
                      <p>ABC Complex,Near xyz, New York</p>
                      <p>USA 123456</p>
                    </div>
                  </li>
                  <li>
                    <div className='contact-icon'>
                      <img
                        src='/assets/images/icon/email.png'
                        alt='Generic placeholder image'
                      />
                      <h6>Address</h6>
                    </div>
                    <div className='media-body'>
                      <p>Support@Shopcart.com</p>
                      <p>info@shopcart.com</p>
                    </div>
                  </li>
                  <li>
                    <div className='contact-icon'>
                      <i className='fa fa-fax' aria-hidden='true' />
                      <h6>Fax</h6>
                    </div>
                    <div className='media-body'>
                      <p>Support@Shopcart.com</p>
                      <p>info@shopcart.com</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-12'>
              <form className='theme-form' onSubmit={formik.handleSubmit}>
                <div className='form-row'>
                  <div className='col-md-6'>
                    <label htmlFor='name'>First Name</label>
                    <input
                      type='text'
                      className='form-control'
                      id='firstName'
                      name='firstName'
                      placeholder='Enter Your First name'
                      required
                      onChange={formik.handleChange}
                      value={formik.values.firstName}
                    />
                    {formik.errors.firstName && formik.touched.firstName && (
                      <span>{formik.errors.firstName}</span>
                    )}
                  </div>
                  <div className='col-md-6'>
                    <label htmlFor='email'>Last Name</label>
                    <input
                      type='text'
                      className='form-control'
                      id='last-name'
                      name='lastName'
                      placeholder='Enter Your Last name'
                      required
                      onChange={formik.handleChange}
                      value={formik.values.lastName}
                    />
                    {formik.errors.lastName && formik.touched.lastName && (
                      <span>{formik.errors.lastName}</span>
                    )}
                  </div>
                  <div className='col-md-6'>
                    <label htmlFor='review'>Phone number</label>
                    <input
                      type='text'
                      className='form-control'
                      id='Phone'
                      name='Phone'
                      minLength='8'
                      maxLength='8'
                      placeholder='Enter your number'
                      required
                      onChange={formik.handleChange}
                      value={formik.values.Phone}
                    />
                    {formik.errors.Phone && formik.touched.Phone && (
                      <span>{formik.errors.Phone}</span>
                    )}
                  </div>
                  <div className='col-md-6'>
                    <label htmlFor='email'>Email</label>
                    <input
                      type='email'
                      className='form-control'
                      id='Email'
                      name='Email'
                      placeholder='Email'
                      required
                      onChange={formik.handleChange}
                      value={formik.values.Email}
                    />
                    {formik.errors.Email && formik.touched.Email && (
                      <span>{formik.errors.Email}</span>
                    )}
                  </div>
                  <div className='col-md-12'>
                    <label htmlFor='review'>Write Your Message</label>
                    <textarea
                      className='form-control'
                      placeholder='Write Your Message'
                      id='description'
                      name='description'
                      rows={6}
                      defaultValue={""}
                      onChange={formik.handleChange}
                      value={formik.values.description}
                    />
                    {formik.errors.description &&
                      formik.touched.description && (
                        <span>{formik.errors.description}</span>
                      )}
                  </div>
                  <div className='col-md-12'>
                    <button
                      className='btn btn-solid'
                      disabled={formik.isSubmitting}
                      type='submit'
                    >
                      Send Your Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
