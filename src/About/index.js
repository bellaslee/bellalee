import '../assets/css/about.css';
import React, { useEffect } from 'react';
import Section from '../Components/Section';
import Footer from '../Components/Footer';
import Nav from '../Components/Nav';
import Carousel from '../Components/Carousel';
import AboutBlurb from '../Components/AboutBlurb';

const hobbyImgs = [
  {
    image: 'guitar',
    caption: 'playing fingerstyle guitar'
  },
  {
    image: 'coffee',
    caption: 'coffee'
  },
  {
    image: 'illust',
    caption: 'creating illustrations'
  },
  {
    image: 'singing',
    caption: 'singing'
  },
  {
    image: 'anime',
    caption: 'anime and manga'
  }
];

const illustrations = [
  {
    image: 'illustrations/thoma.jpg',
    text: 'Genshin Impact fanart. September 2021.',
    route: '/illustrations/thoma'
  },
  {
    image: 'illustrations/yuta.png',
    text: 'Jujutsu Kaisen 0 fanart. March 2022.',
    route: '/illustrations/yuta'
  },
  {
    image: 'illustrations/aki.jpg',
    text: 'Chainsaw Man fanart. April 2022.',
    route: '/illustrations/aki'
  },
  {
    image: 'illustrations/delusion-childe.png',
    text: 'Genshin Impact fanart. July 2021.',
    route: '/illustrations/childe-delusion'
  },
  {
    image: 'illustrations/snow-childe.png',
    text: 'Genshin Impact fanart. August 2021.',
    route: '/illustrations/childe-snow'
  }
];

function About() {
  useEffect(() => {
    const getScroll = () => {
      document.body.style.setProperty('--scroll',
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    }

    window.addEventListener('scroll', getScroll, false);
    window.scrollTo(0, 0);

    return () => {
      window.removeEventListener('scroll', getScroll)
    }
  }, []);

  /**
   * Generates the images needed for a section from an array of image filenames.
   * @param {Array} imgs - array of images needed.
   * @param {String} className - the class name for the image.
   * @returns {Element} - img tags with proper key, src, and alt.
   */
  function genImages(imgs, className) {
    return imgs.map((img) => {
      const { image, caption } = img;
      return (
        <span className={`${className}__container ${className}__${image}`}>
          <img key={image} src={`./img/assets/${image}.png`} alt="" className={`${className}`} />
          <p className={`${className}__caption`}>{caption}</p>
        </span>
      )
    })
  }

  return (
    <React.Fragment>
      <Section name="intro">
        <img src='./img/assets/starburst.png' alt="" className="intro__image" />
        <div className="content intro__content">
          <AboutBlurb />
        </div>
      </Section>

      <Section name="blurb">
        <div className="content blurb__content">
          <h2>Redefining home.</h2>
          <p>San Diego, Fremont, Hsinchu, Taichung, Kaohsiung, Seattle.</p>
          <p>
            A big move has marked the beginning of every new chapter of my life, from childhood to adulthood, foolishness to maturity. Though I was able to experience various cultures, ideas, and people, I never really had a place I considered “home”.
          </p>
          <p>
            With the turn of each page, I lamented my lack of a reliable anchor point. I desired a place to call my hometown, to grow up with childhood friends with shared memories and secrets.
          </p>
          <p>
            One night, as I looked around me and saw the faces of my smiling friends, I had an epiphany. “Home” did not have to be a defined area; that definition is merely a suggestion, merely a construct. Stories shared over barbecue on a Friday night. Singing our favorite songs as we stroll around the art museum. Laughing so hard that we’re sure six-pack abs will appear the next morning. Home. I’ve found home in the areas where our varied worlds with different backgrounds, ideas, and perspectives overlap, where they come together to lay the foundation for our shared memories and experiences. My new realization of home has made me proud of my identity, cherish those I have around me, and able to find solace no matter where my story takes place.
          </p>
        </div>
        <img src="./img/assets/anchor.png" alt="" className="blurb__image" />
      </Section>

      <Section name="hobby">
        <div className="content hobby__content">
          <h2>Outside of work and studies, I like...</h2>
        </div>
        <div className="hobby__images">
          {genImages(hobbyImgs, 'hobby__image')}
        </div>
      </Section>

      <Section name="illustrations">
        <h2>I'm a big fan of pretty fictional characters.</h2>
        <p>
          You can find more of my illustrations <a href="http://instagram.com/peachyxin" target="_blank" rel="noreferrer"> @peachyxin</a> on Instagram!
        </p>
        <Carousel items={illustrations} />
      </Section>

      <Footer />
      <Nav currentPage="About" />
    </React.Fragment>
  )
}

export default About;