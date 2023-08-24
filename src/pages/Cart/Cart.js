import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateCart, removeFromCart } from "../../redux/actions";
import { deleteBurger } from "../../redux/burgerSlice";
import { burgers } from "../Menu/menu.contant";
import "./Cart.css";

// const burgers = [
//   { title: "AA", ref: "aa", price: 100, qty: 5, total: 500 },
//   { title: "BB", ref: "bb", price: 200, qty: 7, total: 700 },

// ];

const Row = ({ item }) => {
  const dispatch = useDispatch();
  const { ref, title, price, qty, img, id } = item;
  const [quantity, setQuantity] = useState(qty);
  return (
    <tr>
      <td>
        <img width="70" height="70" src={img} alt={"item.name"} />
      </td>
      <td>{ref}</td>
      <td>€{price}</td>
      <td>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
              }
            }}
          >
            -
          </button>
          <span className="btn btn-light">{quantity}</span>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              setQuantity(quantity + 1);
            }}
          >
            +
          </button>
        </div>
      </td>
      <td>{price * quantity} €</td>
      <td>
        <button
          type="button"
          className="btn btn-danger remove"
          onClick={() => {
            dispatch(deleteBurger({ id }));
          }}
        >
          X
        </button>
      </td>
    </tr>
  );
};

const Table = (props) => {
  const burgers = useSelector((state) => state.burgerReducer.burgers);
  console.log({
    burgers,
  });
  return (
    <table>
      <tr>
        <th width="200">Title</th>
        <th width="80">Reference</th>
        <th width="150">Price</th>
        <th width="150">Quantity</th>
        <th width="200">Total</th>
      </tr>
      {burgers.map((burger) => {
        return <Row item={burger} />;
      })}
    </table>
  );
};

export const CartPage = () => {
  const burgers = useSelector((state) => state.burgerReducer.burgers);
  const [subTotal, setSubTotal] = useState(0.0);
  const [total, setTotal] = useState(0.0);
  const shipping = 10.0;

  useEffect(() => {
    let totals = burgers?.map(item => {
      return item?.qty * item?.price
    })
    setSubTotal(totals.reduce((item1, item2) => item1 + item2, 0))
    setTotal(subTotal + shipping)
    console.log(`Subtotal:  €${subTotal} `)
    console.log(`You have ${burgers.length} in your cart`)
  }, [burgers, subTotal, total])
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-sm cart">
            <Table />
          </div>

          <div className="col-sm-3 order-summary">
            <ul className="list-group">
              <li className="list-group-item">Order Summary</li>

              <li className="list-group-item">
                <ul className="list-group d-flex">
                  <li className="text-left">Subtotal</li>
                  <li className="text-right">€{subTotal.toFixed(2)}</li>
                </ul>
                <ul className="list-group d-flex">
                  <li className="text-left">shipping</li>
                  <li className="text-right">{shipping}</li>
                </ul>
              </li>

              <li className="list-group-item ">
                <ul className="list-group d-flex">
                  <li className="text-left">Total</li>
                  <li className="text-right">€{subTotal == 0.00 ? "0.00" : total.toFixed(2)}</li>
                </ul>
              </li>
            </ul>
            <Link
              to="/checkout"
              className={`white btn btn-light btn-lg btn-block checkout  bg-crimson`}
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CartPage;
