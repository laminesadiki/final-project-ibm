import React from "react";

function Login(props) {
    const { handleClickRegister} = props
  return (
    <div
      className="tab-pane fade show active"
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
          <input type="password" id="loginPassword" className="form-control" />
        </div>

        <div className="row mb-4">
          <div className="col-md-6 d-flex justify-content-center">
            <div className="form-check mb-3 mb-md-0">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="loginCheck"
                checked
              />
              <label className="form-check-label" for="loginCheck">
                {" "}
                Souviens-mois{" "}
              </label>
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4">
          Sign in
        </button>

        <div className="text-center">
          <p>
            Je suis pas un membre? <a href="#!" onClick={handleClickRegister}>Inscrire</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
