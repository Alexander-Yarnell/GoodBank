import React from "react";

export default function AllData() {
  const [data, setData] = React.useState("");
  const [show, setShow] = React.useState(null);

  React.useEffect(() => {
    fetch("/account/all")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(JSON.stringify(data));
      });
  }, []);

  function handle() {
    if (show != null) {
      setShow(null);
    }
    if (show == null) {
      setShow(data);
    }
  }

  return (
    <>
      <h5>All Data in Store:</h5>
      <button className="btn btn-primary" onClick={handle}>
        Show/Hide Data
      </button>
      <br />
      <br />
      {show}
    </>
  );
}
