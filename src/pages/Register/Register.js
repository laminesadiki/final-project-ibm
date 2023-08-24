import React from "react";

function Register() {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="tab-pane"
        id="pills-register"
        style={{ width: "500px", border: "1px solid black", margin: "20px" }}
      >
        <form>
          <div className="form-outline mb-4">
            <label className="form-label" for="registerUsername">
              Nom d'utilisateur
            </label>
            <input type="text" id="registerUsername" className="form-control" />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label" for="registerEmail">
              Email
            </label>
            <input type="email" id="registerEmail" className="form-control" />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label" for="registerPassword">
              Mot de passe
            </label>
            <input
              type="password"
              id="registerPassword"
              className="form-control"
            />
          </div>

          <div className="form-check d-flex justify-content-center mb-4">
            <input
              className="form-check-input me-2"
              type="checkbox"
              value=""
              id="registerCheck"
              aria-describedby="registerCheckHelpText"
            />
            <label className="form-check-label" for="registerCheck">
              J'ai lu et j'accepte les conditions
            </label>
          </div>

          <button type="submit" className="btn btn-primary btn-block mb-3">
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
