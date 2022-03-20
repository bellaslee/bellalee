import '../assets/css/Footer.css';
import React from 'react';
import Image from './Image';
import Section from './Section';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    window.addEventListener('scroll', () => {
      document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    }, false);
  }

  render() {
    return (
      <div className="wrapper">
        <Section name="footer">
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
          <Image src="./img/assets/touch.png" alt="" className="touch" />
        </Section>
        <div className="copyright">
          &copy; 2022 Bella Lee.
        </div>
      </div>
    );
  }
}

export default Footer;