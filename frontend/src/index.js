import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import Accepted from "./Accepted";
import Requested from "./Requested";
import Rejected from "./Rejected";
import AddUser from "./AddUser";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/accepted" element={<Accepted />} />
        <Route path="/requested" element={<Requested />} />
        <Route path="/rejected" element={<Rejected />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
