import '../assets/css/Header.css';
import React from 'react';

function Header() {
  return (
    <section className="header">
      <div className="container">
        <img src="./img/assets/bee.png" alt="" />
        <div className="content">
          <h1>Bella Lee</h1>
          <h3>student at the University of Washington</h3>
        </div>
      </div>
    </section>
  );
}

export default Header;