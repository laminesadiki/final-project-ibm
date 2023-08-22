import React from "react";

function Register() {
  return (
    <div
      className="tab-pane"
      id="pills-register"
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
            checked
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
  );
}

export default Register;
