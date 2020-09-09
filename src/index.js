import React from "react";
import ReactDOM from "react-dom";
import Footer from "./Footer";
import "./index.css";
import Navbar from "./Navbar";

// Create React component.
const App = () => {
  return (
    <div>
      <Navbar/>
      <Footer/>
    </div>
  );
}

// Take the React component and render it to the screen.
ReactDOM.render(<App />, document.querySelector("#root"));
