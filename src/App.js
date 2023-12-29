import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./App.scss";
import Home from "./components/Home";
import AddProduct from "./components/AddProduct";
import Product from "./components/Products/ProductView";
import Nav from "./components/Navigation/Navigation";
import Weather from "./components/Weather/Weather";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OTP from "./components/OTP/OTP";
import WeatherByLocation from "./components/Weather/WeatherByLocation";
import { Provider } from "react-redux";
import CakeContainer from "./components/Containers/CakeContainer";
import IceCreamContainer from "./components/Containers/IceCreamContainer";
import store from "./components/redux/store";
import HookCakeContainer from "./components/Containers/HookCakeContainer";
import UserContainer from "./components/Containers/UserContainer";
import LogInHome from "./components/LogIn/LogInHome";
import { AuthProvider } from "./components/Auth";
import { Profile } from "./components/Profile/Profile";
import { RequireAuth } from "./components/RequireAuth";

// import { About } from "./components/About/About";
const LazyAbout = React.lazy(() => import("./components/About/About"));

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Router>
          <Nav />
          <Routes>
            <Route path="/product" element={<Product />} />
            <Route path="/weather" element={<Weather />} />
            <Route
              path="/about"
              element={
                <React.Suspense fallback="Loading...">
                  <LazyAbout />
                </React.Suspense>
              }
            />
            <Route path="/otp" element={<OTP />} />
            <Route
              path="/cakeshop"
              element={
                // <UserContainer />
                <div>
                  <CakeContainer />
                  <HookCakeContainer />
                  <IceCreamContainer />
                </div>
              }
            />
            <Route
              path="/"
              element={
                <div className="App">
                  <header className="App-header content-left">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p></p>
                    <a
                      className="App-link"
                      href="https://reactjs.org"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn React
                    </a>
                    <Home />
                  </header>
                  <div className="content-right">
                    <AddProduct />
                    <hr />
                    <Product />
                  </div>
                </div>
              }
            />
            <Route
              path="/weather/detail/:location"
              element={<WeatherByLocation />}
            />
            <Route
              path="profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
            <Route path="login" element={<LogInHome />} />
            <Route path="*" element={<div>404 not found</div>} />
          </Routes>
        </Router>
      </AuthProvider>
    </Provider>
  );
}

export default App;
