import React, { useState, useEffect } from "react";

import * as Icon from "react-feather";
import { formatDate } from "../../helpers/dateConvert";
import Modal from "react-bootstrap/Modal";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import {
  deleteContact,
  fetchContacts,
  selectContact,
  selectContacts,
  selectedContact,
  selectSelectedContact,
  setErrors,
} from "../../redux/slices/contactSlice";

import * as emailjs from "emailjs-com";
import { useHistory, useParams } from "react-router-dom";
import { queryApi } from "../../utils/queryApi";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
const Contacts = () => {
  //
  const { id } = useParams();
  const history = useHistory();
  const [show, setShow] = useState(false);

  const [contacts, err] = useSelector(selectContacts);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const deleteContactEvent = async (id) => {
    const [res, err] = await queryApi(
      "contact/deleteContact/" + id,
      {},
      "DELETE"
    );
    if (err) {
      dispatch(setErrors(err));
      console.log(err);
    } else {
      dispatch(deleteContact(id));
      dispatch(fetchContacts());
    }
  };
  const [error, setError] = useState({ visible: false, message: "" });
  const [loader, setLoader] = useState(false);

  const openConfirmation = async (claim) => {
    if (
      window.confirm("are you sure you want to delete this Message?") === true
    ) {
      deleteContactEvent(claim._id);
    }
  };
  //pagination variables
  const [pageNumber, setPageNumber] = useState(0);
  const claimsperPage = 4;
  const pageVisited = pageNumber * claimsperPage;
  const displayContacts = contacts.slice(
    pageVisited,
    pageVisited + claimsperPage
  );
  const pageCount = Math.ceil(contacts.length / claimsperPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const [search, setsearch] = useState(null);

  const searchSpace = async (event) => {
    let keyword = event.target.value;
    setsearch(keyword);
  };
  const items = displayContacts.filter((data) => {
    if (search == null) return data;
    else if (
      data.firstName.toLowerCase().includes(search.toLowerCase()) ||
      data.lastName.toLowerCase().includes(search.toLowerCase()) ||
      data.Email.toLowerCase().includes(search.toLowerCase()) ||
      data.description.toLowerCase().includes(search.toLowerCase())
    ) {
      return data;
    }
  });
  const FindOneClaimEvent = async (prod) => {
    handleShow();
    dispatch(selectContact(prod));
  };

  const contact = useSelector(selectSelectedContact);

  const [contactContent, setcontactContent] = useState();
  const handleSubmit1 = async (evt) => {
    evt.preventDefault();
    console.log(contact.Email);
    const [res, err] = await queryApi(
      "contact/sendMail/",
      {
        Email: contact.Email,
        Subject: "Good Morning Sir/Madam : " + contact.firstName,
        Text: contactContent,
      },
      "POST"
    );
    if (err) {
      dispatch(setErrors(err));
      console.log(err);
    } else {
      handleClose();
    }
  };
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Send Mail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit1}>
            <Form.Group controlId="formGriddescription">
              <Form.Label>Write Your Text ..</Form.Label>

              <Form.Control
                type="text"
                name="description"
                id="description"
                required
                minLength="5"
                onChange={(e) => setcontactContent(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Send
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div style={{ marginLeft: 250 }} className="page-wrapper">
        <div className="page-body-wrapper">
          {/* Container-fluid starts*/}
          <div className="container-fluid">
            <div className="page-header">
              <div className="row">
                <div className="col-lg-6">
                  <div className="page-header-left">
                    <h3>
                      Contacts
                      <small>Manage Contacts</small>
                    </h3>
                  </div>
                </div>

                <div className="col-lg-6">
                  <ol className="breadcrumb pull-right">
                    <li className="breadcrumb-item">
                      <a href="index.html">
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
                          className="feather feather-home"
                        >
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                          <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                      </a>
                    </li>
                    <li className="breadcrumb-item">DashBoard</li>
                    <li className="breadcrumb-item active">Contacts</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {/* Container-fluid Ends*/}
          {/* Container-fluid starts*/}
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <br></br>
                  <div style={{ marginLeft: 900 }} className="nav-right col">
                    <div>
                      <input
                        style={{ width: 400, height: 40 }}
                        type="text"
                        placeholder="Search.."
                        onChange={(e) => searchSpace(e)}
                      />
                      <Icon.Search></Icon.Search>
                    </div>
                  </div>

                  <div className="card-body order-datatable">
                    <div
                      id="basic-1_wrapper"
                      className="dataTables_wrapper no-footer"
                    >
                      <table
                        className="display dataTable no-footer"
                        id="basic-1"
                        role="grid"
                        aria-describedby="basic-1_info"
                      >
                        <thead>
                          <tr role="row">
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="basic-1"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Product: activate to sort column ascending"
                              style={{ width: 160 }}
                            >
                              First Name
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="basic-1"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Payment Status: activate to sort column ascending"
                              style={{ width: 215 }}
                            >
                              Last Name
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="basic-1"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Payment Method: activate to sort column ascending"
                              style={{ width: 178 }}
                            >
                              Phone
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="basic-1"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Order Status: activate to sort column ascending"
                              style={{ width: 138 }}
                            >
                              Email
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="basic-1"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Date: activate to sort column ascending"
                              style={{ width: 109 }}
                            >
                              Date
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="basic-1"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Total: activate to sort column ascending"
                              style={{ width: 87 }}
                            >
                              Details
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="basic-1"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Total: activate to sort column ascending"
                              style={{ width: 107 }}
                            >
                              treat
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          {items.map((data, index) => (
                            <tr key={index} role="row" className="odd">
                              <td>{data.firstName}</td>
                              <td>{data.lastName}</td>
                              <td>{data.Phone}</td>
                              <td>{data.Email}</td>

                              <td>{formatDate(data.date_contact)}</td>
                              <td>{data.description}</td>
                              <td
                                className="jsgrid-cell jsgrid-align-center"
                                style={{ width: 50 }}
                              >
                                <a
                                  className="btn btn-secondary"
                                  onClick={() => openConfirmation(data)}
                                >
                                  <Icon.Delete />
                                </a>
                                <br></br>

                                <button
                                  type="button"
                                  className="btn btn-primary"
                                  data-bs-toggle="modal"
                                  data-original-title="test"
                                  data-bs-target="#exampleModal"
                                  onClick={() => FindOneClaimEvent(data)}
                                >
                                  <Icon.Send />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"next"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"pagination"}
                        previousLinkClassName={"pagination__link"}
                        nextLinkClassName={"pagination__link"}
                        disabledClassName={"pagination__link--disabled"}
                        activeClassName={"pagination__link--active"}
                      ></ReactPaginate>
                      <div
                        className="dataTables_paginate paging_simple_numbers"
                        id="basic-1_paginate"
                      ></div>
                    </div>
                  </div>
                  <div className="container mt-4 mb-4">
                    <div className="row justify-content-md-center">
                      <div className="col-md-12 col-lg-8">
                        <label>Send Your Email</label>
                        <div className="form-group">
                          <textarea id="editor" defaultValue={""} />
                        </div>
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Container-fluid Ends*/}
        </div>
      </div>
    </>
  );
};
export default Contacts;
