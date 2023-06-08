import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div className="d-flex vh-100 bg-dark justify-content-center align-items-center">
        <div className="table w-50 bg-white rounded p-4">
          <h2>Super Admin!!</h2>
          <hr />

          <Link to="/accepted" className="">
            Accepted Users
          </Link>
          <br />
          <Link to="/requested" className="">
            Requested Users
          </Link>
          <br />
          <Link to="/rejected" className="">
            Rejected Users
          </Link>
          <br />
          <Link to="/add" className="btn btn-success mt-3">
            Add User
          </Link>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
