import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <h2>Contact Page</h2>
      <p>Welcome to the Contact Page!</p>
    </div>
  );
};

export default Contact;
