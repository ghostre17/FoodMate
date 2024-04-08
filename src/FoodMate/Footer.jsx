import React from "react";
import "./Index.css";

class Footer extends React.Component {
  render() {
    return (
      <container>
        <div className="Footer-container">
          <footer className="Footer">
            <div className="Footer-flex">
              <h2>FoodMate</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="Footer-flex">
              <h2>Working Hours</h2>
              <div className="Time">
                <p>Monday - Friday</p>
                <p>15.00 - 22.00</p>
              </div>
              <div className="Time">
                <p>Saturday</p>
                <p>15.00 - 00.00</p>
              </div>
              <div className="Time">
                <p>Sunday</p>
                <p>17.00 - 23.00</p>
              </div>
            </div>
            <div className="Footer-flex">
              <h2>Find Us</h2>
              <p>4140 Parker Rd. Allentown, New Mexico 31134</p>
              <p>(201) 555-0124</p>
              <p>http://www.FoodMate.com</p>
              <p>FoodMate@gmail.com</p>
            </div>
          </footer>
        </div>
        <div className="End-Footer">
          <div className="Footer-Flex">
          <p>
            Copyright &copy; {new Date().getFullYear()} FoodMate. All rights
            reserved
          </p>
          <div className="Footer-Nav">
            <a href="404">Privacy Policy</a>|
            <a href="404">Terms of Use</a>|
            <a href="404">Site Map</a>
          </div>
          </div>
          <p>Indonesia</p>
        </div>
      </container>
    );
  }
}

export default Footer;
