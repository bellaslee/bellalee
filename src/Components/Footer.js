import '../assets/css/Footer.css';
import Section from './Section';

const links = [
  {
    page: 'bellalee.com',
    url: '',
  },
  {
    page: 'Linkedin',
    url: 'https://www.linkedin.com/in/bellasylee/',
    new_tab: true
  },
  {
    page: 'Github',
    url: 'https://github.com/bellaslee',
    new_tab: true
  }
];

function Footer() {
  const renderLinks = links.map((link) => {
    const hasUrl = <a href={link.url} target="_blank" rel="noreferrer">{link.page}</a>

    return (
      <li
        key={link.page}
        className={`footer__link-list__item`}
      >
        {link.url !== '' ? hasUrl : link.page}
      </li>
    )
  });

  return (
    <div className="footer__wrapper">
      <Section name="footer">
        <div className="footer__content">
          <h2>Let's get in touch.</h2>
          <ul className='link-list footer__link-list'>
            {renderLinks}
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