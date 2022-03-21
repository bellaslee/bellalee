import '../assets/css/Footer.css';
import Section from './Section';

function Footer() {
  return (
    <div className="footer__wrapper">
      <Section name="footer">
        <div className="footer__content">
          <h2>Let's get in touch.</h2>
          <ul className="link-list footer__link-list">
            <li className="footer__link-list__item">bella@bellalee.com</li>
            <li className="footer__link-list__item">
              <a href="https://www.linkedin.com/in/bellasylee/" target="_blank" rel="noreferrer">Linkedin</a>
            </li>
            <li className="footer__link-list__item">
              <a href="https://github.com/bellaslee" target="_blank" rel="noreferrer">Github</a>
            </li>
          </ul>
        </div>
        <img src="./img/assets/touch.png" alt="" className="footer__image" />
      </Section>
      <div className="copyright">
        &copy; 2022 Bella Lee.
      </div>
    </div>
  );
}

export default Footer;