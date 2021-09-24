import React from "react";
import UserContext from "./context";

export default function NavBar(props) {
  const ctx = React.useContext(UserContext);
  const { handleLogout } = React.useContext(UserContext);
  if (ctx.name <= 0) {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          GoodBank
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#/CreateAccount/">
                Create Account
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/login/">
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            GoodBank
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#/deposit/">
                  Deposit
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/withdraw/">
                  Withdraw
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/balance/">
                  Balance
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/alldata/">
                  AllData
                </a>
              </li>
            </ul>
            <div className="navbar-text">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" onClick={handleLogout} href="/">
                    Logout
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active">{ctx.name}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
