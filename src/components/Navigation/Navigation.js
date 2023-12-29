import { NavLink } from "react-router-dom";
import "./Navigation.scss";
import { useAuth } from "../Auth";

const Nav = () => {
  const auth = useAuth();
  return (
    <div className="topnav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/otp">OTP App</NavLink>
      <NavLink to="/product">Product</NavLink>
      <NavLink to="/weather">Weather</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/cakeshop">Cake Shop</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      {!auth.user && (
        <NavLink to="/login" className="login">
          Log In
        </NavLink>
      )}
    </div>
  );
};

export default Nav;
