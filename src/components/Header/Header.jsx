import React, { useState, useEffect } from "react";

import "./Header.scss";

import DefaultLogo from "../../assets/images/logos/logoDefault.png";
import Cart from "../../assets/icons/cart.svg";
import Menu from "../../assets/icons/menu.svg";
import classNames from "classnames";
import { Modal } from "../Modals/Modal";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const [active, setActive] = useState(false);
  const { page } = props;

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const isActive = (e) => {
    window.scrollY >= 50 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  });

  const menuNavegate = (url) => {
    navigate(url);
  };

  return (
    <header
      className={classNames({
        "active-header": active,
      })}
    >
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}

      <div className="container">
        <div className="logo" onClick={() => menuNavegate("/")}>
          <img src={DefaultLogo} alt="default-logo" />
        </div>
        <div className="menu">
          <nav>
            <ul>
              <li onClick={() => menuNavegate("/about")} className= {page === 'about' ? 'menuActive' : ''}>About Us</li>
              <li onClick={() => menuNavegate("/menu")} className= {page === 'menu' ? 'menuActive' : ''}>Menu</li>
              <li onClick={() => menuNavegate("/reviews")} className= {page === 'reviews' ? 'menuActive' : ''}>Reviews</li>
              <li onClick={() => menuNavegate("/blog")} className= {page === 'blog' ? 'menuActive' : ''}>Blog</li>
              <li onClick={() => menuNavegate("/contacts")} className= {page === 'contacts' ? 'menuActive' : ''}>Contacts</li>
            </ul>
          </nav>
          <div className="buttons">
            <button className="button-secondary">
              <img src={Cart} alt="" />
            </button>
            <button className="button-menu">
              <img src={Menu} alt="" />
            </button>
            <button
              className="button-primary"
              onClick={() => setShowModal(true)}
            >
              Reserve Table
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
