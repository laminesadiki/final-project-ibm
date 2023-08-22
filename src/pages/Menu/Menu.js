import React from "react";
import Card from "../../components/Card/Card";
import { MENU_LIST } from "./menu.contant";
import "./Menu.css";

function Menu() {
  return (
    <div className="menu container row ml-1">
      <h1>Menu</h1>
      {MENU_LIST.map((menu, index) => (
        <Card
          key={index}
          img={menu.img}
          price={menu.price}
          title={menu.title}
        />
      ))}
    </div>
  );
}

export default Menu;
