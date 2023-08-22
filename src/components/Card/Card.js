import React from "react";

function Card(props) {
  const { img, price, title} = props;
  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <img
        src={img}
        width="200px"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{price}</h5>

        <p className="card-text">{title}</p>
        <button className="btn btn-primary" style={{ backgroundColor: "#9C003C", color: "white", width:"200px" }}>Acheter</button>
      </div>
    </div>
  );
}

export default Card;
