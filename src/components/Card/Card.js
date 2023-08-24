import React from "react";
import { useDispatch } from "react-redux";
import { addBurger } from "../../redux/burgerSlice";
import Modal from "../Modal/Modal";

function Card({ item }) {
  const { img, price, title, ref } = item;
  return (
    <div className="col-sm-4">
      <div className="card">
        <img
          width="170"
          height="170"
          src={img}
          alt="citron"
        />
        <div className="card-body">
          <div className="row">
            <div className="col-sm-6">
              <h4>{title}</h4>
            </div>
            <div className="col-sm-6">
              <p>
                  {price}/unit
              </p>
              <button className="btn btn-sm btn-danger btn-red" data-bs-toggle="modal" data-bs-target={`#${ref}`}>view product</button>
            </div>
          </div>
        </div>
      </div>
      <Modal item={item}/>
    </div>
  );
}


export default Card;
