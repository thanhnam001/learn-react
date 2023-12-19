import logo from "./logo.svg";
import "./App.css";
import "./App.scss";
import Home from "./components/Home";
import AddProduct from "./components/AddProduct";
import Product from "./components/Products/ProductView";
import Nav from "./components/Navigation/Navigation";
import Weather from "./components/Weather/Weather";
import {
  BrowserRouter as Router,
  // Switch,
  Routes,
  Route,
  // Link,
} from "react-router-dom";
import OTP from "./components/OTP/OTP";
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/product" element={<Product />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/about" element={<div>I'm Eric</div>} />
        <Route path="/otp" element={<OTP />} />
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
        <Route path="*" element={<div>404 not found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
