import { NavLink } from "react-router-dom";
import "./Navigation.scss";

const Nav = () => {
  return (
    <div className="topnav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/otp">OTP App</NavLink>
      <NavLink to="/product">Product</NavLink>
      <NavLink to="/weather">Weather</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  );
};

export default Nav;
