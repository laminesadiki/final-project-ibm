import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";
import "./Footer.css";

const Footer = () => {
  return (
    <footer >
      <div className="row m-3">
        <div className="col-md-8" style={{textAlign: "left"}}>
          <div className="row">
            <h2 style={{ color: "#9C003C" }}>Burger Shop</h2>
            <p>Nous nous efforçons de vous offrir le meilleur goût possible.</p>
            <em>Vos commentaires sont les bienvenus.</em>
            <strong>Tous droits réservés @burgershop</strong>
          </div>
        </div>
        <aside className="col-md-4">
          <div className="row">
            <h4>Suivez nous sur</h4>
            <a href="https://youtube.com">
              <AiFillYoutube style={{fontSize: "30px", color: "white"}} />
            </a>
            <a href="https://instagram.com">
              <AiFillInstagram style={{fontSize: "30px", color: "white"}}  />
            </a>
            <a href="https://github.com">
              <AiFillGithub style={{fontSize: "30px", color: "white"}}  />
            </a>
          </div>
        </aside>
      </div>
    </footer>
  );
};
export default Footer;
