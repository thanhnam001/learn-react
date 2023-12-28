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
import store from "./components/redux/store";
// import HooksCakeContainer from "./components/components/HooksCakeContainer";
import UserContainer from "./components/Containers/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Nav />
        <Routes>
          <Route path="/product" element={<Product />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/about" element={<div>I'm Eric</div>} />
          <Route path="/otp" element={<OTP />} />
          <Route
            path="/cakeshop"
            element={
              <UserContainer />
              // <div>
              //   <CakeContainer />
              //   <HooksCakeContainer />
              // </div>
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
          <Route path="*" element={<div>404 not found</div>} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
