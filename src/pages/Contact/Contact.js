import React, { useEffect, useState } from "react";
import "./Contact.css";
import Login from "./Login";
import Register from "./Register";

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

  // return (<Register />)

  return (
    <div className="contact">
      <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${isActive}`}
            id="tab-login"
            onClick={handleClickLogin}
          >
            Se connecter
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${isNotActive}`}
            id="tab-register"
            onClick={handleClickRegister}
          >
            S'inscrire
          </button>
        </li>
      </ul>
      {login && <Login handleClickRegister={handleClickRegister} />}

      {register && <Register />}
    </div>
  );
};
export default Contact;
