import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
const Add = () => {
  const navigate = useNavigate();
  //State to manage the initial values of the form and to update once values are entered
  const [book, setBook] = useState({
    title: "",
    bookAuthor: "",
    isbn: "",
    dateOfPublication: "",
    author: "",
    dob: "",
    description: "",
  });

  //Conditions to validate the form
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    bookAuthor: Yup.string().required("Author name is required"),
    isbn: Yup.string().matches(/^-?\d+\.?\d*$/,"Invalid ISBN number").required("ISBN number is required"),
    dateOfPublication: Yup.string().matches(/^\d{2}([./-])\d{2}\1\d{4}$/,"Invalid date format").required("Date of publication is required"),
    author: Yup.string().required("Author name is required"),
    dob: Yup.string().matches(/^\d{2}([./-])\d{2}\1\d{4}$/,"Invalid date format").required("Date of birth of the author is required"),
    description: Yup.string().required("A short bio of the author is required"),
  });

  const formik = useFormik({
    initialValues:book,
    validationSchema: validationSchema,

    //Function to be executed once the "Create" button is clicked
    onSubmit: async (values) => {
      await axios
        .post('https://6642ed793c01a059ea20d240.mockapi.io/api/library/', values)
        .then((res) => {
            setBook(res.data);
        })
        .catch((error) => console.log(error));
        navigate('/');
    }
  });
  return (
    <div>
      <h1 className="text-center">Add New Book</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            <h4>Book Title</h4>
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
          />
        </div>
        <h5 className="error-message">{formik.errors.title}</h5>
        <div className="mb-3">
          <label htmlFor="bookAuthor" className="form-label">
            <h4>Author</h4>
          </label>
          <input type="text" className="form-control" name="bookAuthor" id="bookAuthor" value={formik.values.bookAuthor}
            onChange={formik.handleChange}/>
        </div>
        <h5 className="error-message">{formik.errors.bookAuthor}</h5>
        <div className="mb-3">
          <label htmlFor="isbn" className="form-label" >
            <h4>ISBN Number</h4>
          </label>
          <input type="text" className="form-control" name="isbn" id="isbn" value={formik.values.isbn}
            onChange={formik.handleChange}/>
        </div>
        <h5 className="error-message">{formik.errors.isbn}</h5>
        <div className="mb-3">
          <label htmlFor="dateOfPublication" className="form-label" >
            <h4>Date of Publication</h4>
          </label>
          <input type="text" className="form-control" name="dateOfPublication" id="dateOfPublication" value={formik.values.dateOfPublication}
            onChange={formik.handleChange}/>
        </div>
        <h5 className="error-message">{formik.errors.dateOfPublication}</h5>
        <h1 className="text-center">Add New Author</h1>
        <div className="mb-3">
          <label htmlFor="author" className="form-label" >
            <h4>Author Name</h4>
          </label>
          <input type="text" className="form-control"  name="author" id="author" value={formik.values.author}
            onChange={formik.handleChange}/>
        </div>
        <h5 className="error-message">{formik.errors.author}</h5>
        <div className="mb-3">
          <label htmlFor="dob" className="form-label" >
            <h4>DOB</h4>
          </label>
          <input type="text" className="form-control" name="dob" id="dob" value={formik.values.dob}
            onChange={formik.handleChange}/>
        </div>
        <h5 className="error-message">{formik.errors.dob}</h5>
        <div className="mb-3">
          <label htmlFor="description" className="form-label" >
            <h4>Biography</h4>
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows={4}
            columns={10}
            value={formik.values.description}
            onChange={formik.handleChange}
          />
        </div>
        <h5 className="error-message">{formik.errors.description}</h5>
        <button type="submit" className="btn btn-success">
          Create
        </button>
      </form>
    </div>
  );
};

export default Add;
