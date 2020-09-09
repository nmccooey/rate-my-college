import React from "react";
import 'materialize-css/dist/css/materialize.min.css';

const Footer = () => {
  return (
    <footer className="page-footer blue darken-4">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">About Rate My College</h5>
            <p className="grey-text text-lighten-4">Our mission is to provide college reviews and information for students in order to help them choose the correct school for their needs.</p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li><a className="grey-text text-lighten-3" href="#!">About</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Contact</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Terms &amp; Conditions</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
        © 2020 RateMyCollege.com
        <a className="grey-text text-lighten-4 right" href="https://github.com/nmccooey" target="_blank">Created By: Nicholas McCooey | <i class="fab fa-github"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;