import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../Auth";

const userLoginInfo = {
  username: "nam",
  password: "123",
};

const LogInHome = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/";
  const handleLogin = () => {
    if (
      username === userLoginInfo.username &&
      password === userLoginInfo.password
    ) {
      auth.login(username);
      navigate(redirectPath, { replace: true });
    }
  };
  return (
    <fieldset className="log-in-form">
      <h1>Login</h1>
      <div className="input-box">
        <input
          type="text"
          placeholder="Username"
          required
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div className="input-box">
        <input
          type="password"
          placeholder="Password"
          required
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="remember-forgot">
        <label htmlFor="">
          <input type="checkbox" />
          Remember me
        </label>
        <Link>Forgot password?</Link>
      </div>
      <button
        type="submit"
        onClick={() => {
          handleLogin();
        }}
      >
        Login
      </button>
      <div className="register">
        Don't have an account? <Link>Register</Link>
      </div>
    </fieldset>
  );
};

export default LogInHome;
