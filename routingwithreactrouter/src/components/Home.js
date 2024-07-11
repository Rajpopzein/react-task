import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Home Page</h2>
    <Link to="/about">Go to About</Link>
    <br />
    <Link to="/contact">Go to Contact</Link>
  </div>
);

export default Home;
