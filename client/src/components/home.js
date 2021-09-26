import React from "react";
import Card from "./card";
import Login from "./login";
import bank from "./Bank.jpg";
import "./css/home.css";

export default function Home() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [status, setStatus] = React.useState("");
  return (
    <div>
      <div className="filter">
        <div className="card" style={{ maxWidth: "18rem" }}>
          <div className="card-header">Good Bank</div>
          <div className="card-body">
            Email
            <br />
            <input
              type="input"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <br />
            Password
            <br />
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <br />
            <div className="card-buttons">
              <a href="#" className="btn btn-warning">
                Login
              </a>
              <a href="#" className="btn btn-light">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
      <img src={bank} className="bg" />
    </div>
  );
}
