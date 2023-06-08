import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function AddUser() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    status: "accepted",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/create", values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
    console.log(values);
  };
  return (
    <>
      <div className="d-flex vh-100 bg-dark justify-content-center align-items-center">
        <div className="table w-50 bg-white rounded p-4">
          <form onSubmit={handleSubmit}>
            <h2>Add User</h2> <hr />
            <div className="form-group">
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={(e) =>
                    setValues({ ...values, email: e.target.value })
                  }
                  required
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="username">User Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Enter the username"
                  onChange={(e) =>
                    setValues({ ...values, name: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            <div className="form-group mt-3">
              <span>Status Type :</span>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="statusType"
                  id="statusType1"
                  value="accepted"
                  checked
                  onChange={(e) => {
                    if (e.target.checked === false) return;
                    setValues({ ...values, status: e.target.value });
                  }}
                />
                <label className="form-check-label" htmlFor="statusType1">
                  Accepted
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="statusType"
                  id="statusType3"
                  value="rejected"
                  onChange={(e) => {
                    if (e.target.checked === false) return;
                    setValues({ ...values, status: e.target.value });
                  }}
                />
                <label className="form-check-label" htmlFor="statusType3">
                  Rejected
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="statusType"
                  id="statusType2"
                  value="requested"
                  onChange={(e) => {
                    if (e.target.checked === false) return;
                    setValues({ ...values, status: e.target.value });
                  }}
                />
                <label className="form-check-label" htmlFor="statusType2">
                  Requested
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default AddUser;
