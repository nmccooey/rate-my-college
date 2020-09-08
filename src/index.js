import React from "react";
import ReactDOM from "react-dom";
import Footer from "./Footer";
import "./index.css";

// Create React component.
const App = () => {
  return <Footer/>
}

// Take the React component and render it to the screen.
ReactDOM.render(<App />, document.querySelector("#footer"));
