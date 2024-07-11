import React from "react";
import { Link, useNavigate, useResolvedPath } from "react-router-dom";

const NavigateButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return <button onClick={handleClick}>Go to Home</button>;
};

const About = () => {
  let pathnames = useResolvedPath("").pathname;
  return (
    <div>
      <h2>About Page</h2>
      <NavigateButton />
      <br/>
      <Link to={`${pathnames}/moreinfo`}>More Info</Link>
      <br />
      <Link to="/">Go to Home</Link>
      <br />
      <Link to="/contact">Go to Contact</Link>
    </div>
  );
};

export default About;
