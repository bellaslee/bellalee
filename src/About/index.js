import '../assets/css/about.css';
import React, { useEffect } from 'react';
import Section from '../Components/Section';
import Footer from '../Components/Footer';
import Nav from '../Components/Nav';
import Carousel from '../Components/Carousel';
import ScrollIndicator from '../Components/ScrollIndicator';

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
    route: '../illustrations/thoma'
  },
  {
    image: 'illustrations/yuta.png',
    text: 'Jujutsu Kaisen 0 fanart. March 2022.',
    route: '../illustrations/yuta'
  },
  {
    image: 'illustrations/jojoo.jpg',
    text: 'Jojo\'s Bizarre Adventure fanart. April 2022.',
    route: '../illustrations/jojo'
  },
  {
    image: 'illustrations/aki.jpg',
    text: 'Chainsaw Man fanart. April 2022.',
    route: '../illustrations/aki'
  },
  {
    image: 'illustrations/delusion-childe.png',
    text: 'Genshin Impact fanart. July 2021.',
    route: '../illustrations/childe-delusion'
  },
  {
    image: 'illustrations/snow-childe.png',
    text: 'Genshin Impact fanart. August 2021.',
    route: '../illustrations/childe-snow'
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
        <h2>Hi, I'm Bella!</h2>
        <ScrollIndicator position="100" />
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
          If you're interested in commissioning an illustration, you can find more information <a href="http://peachyxin.com/commissions" target="_blank" rel="noreferrer">here</a>.
        </p>
        <Carousel items={illustrations} />
      </Section>

      <Footer />
      <Nav currentPage="About" />
    </React.Fragment>
  )
}

export default About;