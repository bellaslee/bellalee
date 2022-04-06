import '../assets/css/Nav.css';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const links = [
  {
    page: "Home",
    url: "/"
  },
  {
    page: "About",
    url: "../about"
  },
  {
    page: "Resume",
    url: "../resume"
  }
]

function Nav({ currentPage }) {
  const [isOpen, setIsOpen] = useState(false);

  const topRef = useRef();
  const bottomRef = useRef();

  const renderLinks = links.map((link) => {
    return (
      <li
        key={link.page}
        className={`nav__link-list__item ${link.page === currentPage ? 'nav__link-list__item--current' : ''}`}
      >
        <Link to={link.url}>{link.page}</Link>
      </li>
    )
  });

  return (
    <section className="nav">
      <section className={`nav__menu ${isOpen ? '' : 'nav__menu--hidden'}`}>
        <ul className="link-list nav__link-list">
          {renderLinks}
        </ul>
      </section>

      <div
        className="nav__button"
        onClick={() => {
          setIsOpen(!isOpen);
        }}>
        <img
          ref={topRef}
          src={`/img/assets/nav-rectangle-${isOpen ? 'light' : 'dark'}.png`}
          alt="navigation"
          className={`nav__icon-component nav__icon-component__top ${isOpen ? 'nav__icon-component__top--active' : ''}`}
        />
        <img
          ref={bottomRef}
          src={`/img/assets/nav-rectangle-${isOpen ? 'light' : 'dark'}.png`}
          alt="navigation"
          className={`nav__icon-component nav__icon-component__bottom ${isOpen ? 'nav__icon-component__bottom--active' : ''}`}
        />
      </div>
    </section>
  );
}

export default Nav;