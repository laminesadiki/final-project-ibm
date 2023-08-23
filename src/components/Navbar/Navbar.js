import React from "react";
import { Link } from "react-router-dom";
import { IoFastFoodOutline } from "react-icons/io5";

const NavItem = (props) => {
  const { name, path } = props;
  return (
    <li className="nav-item">
      <Link className="nav-link text-white" to={path}>
        {name}
      </Link>
    </li>
  );
};

const DropDownItem = (props) => {
  const { name, path } = props;
  return (
    <li>
      <Link className="dropdown-item" to={path}>
        {name}
      </Link>
    </li>
  );
};

function Navbar() {
  const pages = [
    { name: "Accueil", path: "/" },
    { name: "A propos", path: "/about" },
    { name: "Nous Contacter", path: "/contact" },
    { name: "Menus", path: "/menu" },
    { name: "Livraison", path: "/shipping" },
    { name: "Se Connecter", path: "/login" },
    { name: "S'inscire", path: "/register" },
  ];

  const settings = [
    { name: "Profile", path: "/me" },
    { name: "Mes Commandes", path: "/myOrders" },
    { name: "Détails de la Commande", path: "/orderDetails" },
  ];

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#9C003C", paddingLeft: "80px" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <IoFastFoodOutline style={{ fontSize: "30px", color: "white" }} />
        </Link>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav w-100">
            {pages.map((item, index) => (
              <NavItem key={index} name={item.name} path={item.path} />
            ))}

            <li className="nav-item dropdown ms-auto" style={{marginRight: "80px"}}>
              <a
                className="nav-link dropdown-toggle text-white"
                href="#!"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Mon Compte
              </a>
              <ul className="dropdown-menu">
                {settings.map((item, index) => (
                  <DropDownItem key={index} name={item.name} path={item.path} />
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
