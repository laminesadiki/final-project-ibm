import React from "react";
import { Link } from "react-router-dom";
import { IoFastFoodOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

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

function Navbar() {
  const pages = [
    { name: "Accueil", path: "/" },
    { name: "A propos", path: "/about" },
    { name: "Menus", path: "/menu" },
    { name: "Nous Contacter", path: "/contact" },
    { name: "Se Connecter", path: "/login" },
    { name: "S'inscire", path: "/register" },
  ];

  const bugers = useSelector((state) => state.burgerReducer.burgers);

  const cartCount = bugers.length;

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

            <div className="ms-auto row">
              <div className="menu-right">
                <Link to="/cart">
                  <i class="fas fa-shopping-bag fa-2x grey"></i>
                  <span class="badge badge-pill badge-success">
                    {cartCount}
                  </span>
                </Link>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
