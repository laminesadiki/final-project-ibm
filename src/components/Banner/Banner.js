import { Button } from "@mui/material";
import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="banner_content">
        <h1>BURGER SHOP</h1>
        <h5>Prenez le temps de vous offrir un savoureux burger</h5>
        {/* <Button>Consultez le Menu</Button> */}
        <button
          className="btn"
          style={{ backgroundColor: "#9C003C", color: "white" }}
        >
          Consultez le Menu
        </button>
      </div>
    </div>
  );
}

export default Banner;
