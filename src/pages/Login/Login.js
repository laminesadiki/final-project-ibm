import React from "react";
import { Link } from "react-router-dom";

function Login(props) {
  // const { handleClickRegister} = props
  return (
    <div className="d-flex justify-content-center">
      <div
        className="tab-pane fade show active"
        style={{ width: "500px", border: "1px solid black", margin: "20px" }}
        id="pills-login"
        role="tabpanel"
        aria-labelledby="tab-login"
      >
        <form>
          <div className="form-outline mb-4">
            <label className="form-label" for="loginName">
              Email Ou nom d'utilisateur
            </label>
            <input type="email" id="loginName" className="form-control" />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label" for="loginPassword">
              Mot de passe
            </label>
            <input
              type="password"
              id="loginPassword"
              className="form-control"
            />
          </div>

          <div className="row mb-4">
            <div className="col-md-6 d-flex justify-content-center">
              <div className="form-check mb-3 mb-md-0">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="loginCheck"
                />
                <label className="form-check-label" for="loginCheck">
                  {" "}
                  Souviens-mois{" "}
                </label>
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-block mb-4">
            Se Connecter
          </button>

          <div className="text-center">
            <p>
              Je suis pas un membre? <Link to="/register">Inscrire</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
