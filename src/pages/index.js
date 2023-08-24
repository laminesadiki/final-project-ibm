import { Checkout } from "../components/Checkout/Checkout";
import About from "./About/About";
import Cart from "./Cart/Cart";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Menu from "./Menu/Menu";
import MyOrders from "./MyOrders/MyOrders";
import OrderDetails from "./OrderDetails/OrderDetails";
import Register from "./Register/Register";
import Shipping from "./Shipping/Shipping";

export {
  About,
  Cart,
  Contact,
  Home,
  Login,
  Menu,
  MyOrders,
  OrderDetails,
  Register,
  Shipping,
};

export const ROUTES = [
  {
    component: Home,
    path: "/",
  },
  {
    component: About,
    path: "/about",
  },
  {
    component: Cart,
    path: "/cart",
  },
  {
    component: Contact,
    path: "/contact",
  },
  {
    component: Login,
    path: "/login",
  },
  {
    component: Menu,
    path: "/menu",
  },
  {
    component: MyOrders,
    path: "/myOrders",
  },
  {
    component: OrderDetails,
    path: "/orderDetails",
  },
  {
    component: Register,
    path: "/register",
  },
  {
    component: Shipping,
    path: "/shipping",
  },
  {
    component: Checkout,
    path: "/checkout",
  },
];
