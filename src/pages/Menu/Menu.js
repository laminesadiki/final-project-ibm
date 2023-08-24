import React from "react";
import Card from "../../components/Card/Card";
import { MENU_LIST, burgers } from "./menu.contant";
import "./Menu.css";

function Menu() {
  return (
    <div className="container menu">
      <div className="row">
        {burgers.map((item, index) => (<Card item={item} key={index} />))}
      </div>
    </div>
  );
}

export default Menu;
