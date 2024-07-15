import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img
          src="/assets/b-logo-small.jpg"
          alt="B logo"
          className="w-full h-full object-cover"
        />
      </Link>
    </div>
  );
};

export default Logo;
