import React, { useEffect, useState } from "react";
import "./Contact.css";
// import Login from "./Login";
// import Register from "./Register";

const Contact = () => {
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);

  const isActive = login ? "active" : "";
  const isNotActive = register ? "active" : "login";
  const handleClickLogin = () => {
    setLogin(true);
    setRegister(false);
  };
  const handleClickRegister = () => {
    setLogin(false);
    setRegister(true);
  };

  return (
    <form
      className="text-center border border-light p-5"
      action="#!"
      style={{ width: "500px" }}
    >
      <p className="h4 mb-4">Contact us</p>

      <input
        type="text"
        id="defaultContactFormName"
        className="form-control mb-4"
        placeholder="Name"
      />

      <input
        type="email"
        id="defaultContactFormEmail"
        className="form-control mb-4"
        placeholder="E-mail"
      />

      <div className="form-group">
        <textarea
          className="form-control rounded-0"
          id="exampleFormControlTextarea2"
          rows="3"
          placeholder="Message"
        ></textarea>
      </div>

      <button className="btn btn-info btn-block" type="submit">
        Send
      </button>
    </form>
  );
};
export default Contact;
