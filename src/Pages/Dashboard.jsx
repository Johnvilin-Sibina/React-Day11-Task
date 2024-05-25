import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ setId }) => {
  //State to manage the datas fetched from the api
  const [book, setBook] = useState([]);

  //State to manage delete
  const [deleteBook, setDeleteBook] = useState([]);

  //Function to fetch all the datas from the API
  const fetchData = async () => {
    await axios
      .get("https://6642ed793c01a059ea20d240.mockapi.io/api/library/")
      .then((res) => setBook(res.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  });

  const navigate = useNavigate();

  //Function to update the id of the particular data in the state to manage id 
  //and navigate to the edit page
  const handleEdit = (id) => {
    setId(id);
    navigate(`/edit/${id}`);
  };

  //Function to delete the data based on the id of the particular data
  const handleDelete = async (id) => {
    await axios
      .delete(`https://6642ed793c01a059ea20d240.mockapi.io/api/library/${id}`)
      .then((res) => setDeleteBook(res.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    handleDelete();
  }, [deleteBook]);

  return (
    <div>
      <h1 className="text-center">Books</h1>
      <div className="table-responsive">
        <table className="table text-center shadow">
          <thead>
            <tr className="shadow">
              <th className="shadow">Book</th>
              <th className="shadow">Author</th>
              <th className="shadow">ISBN Number</th>
              <th className="shadow">Date of Publication</th>
              <th colSpan={2} className="shadow">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {book.map((item, index) => {
              return (
                <tr key={item.id} className="shadow">
                  <td className="shadow">{item.title}</td>
                  <td className="shadow">{item.bookAuthor}</td>
                  <td className="shadow">{item.isbn}</td>
                  <td className="shadow">{item.dateOfPublication}</td>
                  <td className="shadow">
                    <button
                      className="btn btn-outline-warning"
                      onClick={() => handleEdit(item.id)}
                    >
                      Edit
                    </button>
                  </td>
                  <td className="shadow">
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <h1 className="text-center mt-5">Authors</h1>
      <div className="table-responsive">
        <table className="table shadow text-center">
          <thead>
            <tr className="shadow">
              <th className="shadow">Author</th>
              <th className="shadow">DOB</th>
              <th className="shadow">Biography</th>
              <th colSpan={2} className="shadow">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {book.map((item, index) => {
              return (
                <tr key={item.id} className="shadow">
                  <td className="shadow">{item.author}</td>
                  <td className="shadow">{item.dob}</td>
                  <td className="shadow">{item.description}</td>
                  <td className="shadow">
                    <button
                      className="btn btn-outline-warning"
                      onClick={() => handleEdit(item.id)}
                    >
                      Edit
                    </button>
                  </td>
                  <td className="shadow">
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
