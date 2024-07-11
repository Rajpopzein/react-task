import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => (
  <div>
    <h2>Contact Page</h2>
    <Link to="/">Go to Home</Link>
    <br />
    <Link to="/about">Go to About</Link>
  </div>
);

export default Contact;
