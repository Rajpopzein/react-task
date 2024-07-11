import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      <h2>About Page</h2>
      <p>Welcome to the About Page!</p>
    </div>
  );
};

export default About;
