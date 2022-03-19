import '../assets/css/Footer.css';
import React from 'react';

function Footer() {
  return (
    <section className="footer">
      <div className="container">
        <div className="content">
          <h2>Let's get in touch.</h2>
          <ul>
            <li>bella@bellalee.com</li>
            <li>
              <a href="https://www.linkedin.com/in/bellasylee/" target="_blank" rel="noreferrer">Linkedin</a>
            </li>
            <li>
              <a href="https://github.com/bellaslee" target="_blank" rel="noreferrer">Github</a>
            </li>
          </ul>
        </div>
        <img src="./img/assets/touch.png" alt="" />
      </div>
    </section>
  );
}

export default Footer;