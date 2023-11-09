import React from "react";
import "./Contact.css";

const Contact = () => {

  return (
    <div className="d-flex justify-content-center">
      <form
        className="text-center border border-light p-5"
        action="#!"
        style={{ width: "500px" }}
      >
        <p className="h4 mb-4">Nous Contacter</p>

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
    </div>
  );
};
export default Contact;
