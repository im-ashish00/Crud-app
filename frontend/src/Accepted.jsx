import React, { useEffect, useState } from "react";
import axios from "axios";

function Accepted() {
  const [data, setData] = useState([]);
  // { id: "1", name: "ashish", email: "ashish9907660@gmail.com", status: "accepted" }
  useEffect(() => {
    axios
      .get("http://localhost:5000/accepted")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="d-flex vh-100 bg-dark justify-content-center align-items-center">
        <table className="table w-50 bg-white rounded">
          <tbody>
            <tr className="p-14">
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </tbody>
          <tbody>
            {data.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Accepted;
