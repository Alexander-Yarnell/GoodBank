import React from "react";
import Card from "./card";
import bank from "./Bank.jpg";
import UserContext from "./context";

//create account function
function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");

  return (
    <>
      <div className="filter">
        <Card
          height="auto"
          bgcolor="light"
          txtcolor="black"
          header="GoodBank"
          status={status}
          body={
            show ? (
              <CreateForm setShow={setShow} />
            ) : (
              <CreateMsg setShow={setShow} />
            )
          }
        />
      </div>
      <img src={bank} className="bg" />
    </>
  );
}

function CreateMsg(props) {
  const { handleLogout } = React.useContext(UserContext);
  return (
    <>
      <h5>Success</h5>
      <button
        type="submit"
        className="btn btn-warning"
        onClick={() => {
          props.setShow(true);
          handleLogout();
        }}
      >
        Add another account
      </button>
    </>
  );
}

function CreateForm(props) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { handleLogin } = React.useContext(UserContext);

  function handle() {
    console.log(name, email, password);
    const url = `/account/create/${name}/${email}/${password}`;
    (async () => {
      var res = await fetch(url);
      fetch(`/account/login/${email}/${password}`)
        .then((response) => response.text())
        .then((text) => {
          try {
            const data = JSON.parse(text);
            handleLogin(data.name, data.email, data.balance);
            props.setShow(false);
          } catch (err) {
            console.log("err:", err);
          }
        });
    })();
  }

  return (
    <>
      Name
      <br />
      <input
        type="input"
        className="form-control"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
      />
      <br />
      Email address
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
        <a className="btn btn-light" href="#/Login">
          Login
        </a>
        <button type="submit" className="btn btn-warning" onClick={handle}>
          Sign Up
        </button>
      </div>
    </>
  );
}
//export createAccount
export default CreateAccount;
