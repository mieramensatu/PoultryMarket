import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <p>&copy; 2024 AyamTernakKu. All rights reserved.</p>
      <div className="social-media">
        <Link to="/">
          <i className="fab fa-facebook-f"></i>
        </Link>
        <Link to="/">
          <i className="fab fa-twitter"></i>
        </Link>
        <Link to="/">
          <i className="fab fa-instagram"></i>
        </Link>
        <Link to="/">
          <i className="fab fa-linkedin-in"></i>
        </Link>
      </div>
    </>
  );
}

export default Footer;
