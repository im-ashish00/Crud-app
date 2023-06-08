import React, { useEffect, useState } from "react";
import axios from "axios";

function Requested() {
  const [data, setData] = useState([
    { id: "1", name: "ashish", email: "ashish9907660@gmail.com" },
  ]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/rejected")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/delete/${id}`)
      .then((res) => {
        document.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="d-flex vh-100 bg-dark justify-content-center align-items-center">
        <table className="table w-50 bg-white rounded p-14">
          <tbody>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </tbody>
          <tbody>
            {data.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button 
                      onClick={() => handleDelete(user.id)}
                      className="btn btn-sm btn-danger "
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
    </>
  );
}

export default Requested;
