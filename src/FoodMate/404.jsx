import React from "react";
import "./Index.css";

class Error extends React.Component {
  render() {
    return (
      <div className="Error">
        <p>
          <h1>FOODMATE</h1>
          404. Not Found.
          <p>
            The requested URL /doesntexist was not found on this server. That’s
            all we know.
          </p>
        </p>
      </div>
    );
  }
}

export default Error;
