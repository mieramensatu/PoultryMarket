import React from "react";
import { Link } from "react-router-dom";
import Logo from "./../../assets/logo/logo-ayam-removebg-preview1.png";

function NavbarProduct() {
  return (
    <>
      <nav className="nav">
        <Link to="/" className="nav-logo to-link">
          <img src={Logo} alt="Makanear Logo" />
          <span>AyamTernakKu</span>
        </Link>
        <div className="nav-main">
          <div className="search">
            <button>
              <span className="material-symbols-rounded"> travel_explore </span>
            </button>
            <input type="text" placeholder="Search in MakaNear" />
          </div>
        </div>
        <div className="nav-others">
          <span className="material-symbols-rounded"> local_mall </span>
          <Link href="/dashboard">
            <span className="material-symbols-rounded"> storefront </span>
          </Link>
          <Link className="to-login" to="/login">
            <span className="material-symbols-rounded"> account_circle </span>
          </Link>
          <span className="material-symbols-rounded logout"> move_item </span>
        </div>
      </nav>
    </>
  );
}

export default NavbarProduct;
