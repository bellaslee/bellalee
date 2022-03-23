import '../assets/css/about.css';
import React, { useEffect, useState } from 'react';
import Section from '../Components/Section';
import Footer from '../Components/Footer';
import Nav from '../Components/Nav';

const introImgs = ['starburst'];
const blurbImgs = ['anchor'];
const hobbyImgs = ['guitar', 'illust', 'anime', 'coffee', 'singing'];

function About() {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      document.body.style.setProperty('--scroll',
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    }, false);
    window.pageXOffset = 0;
  }, []);

  /**
   * Generates the images needed for a section from an array of image filenames.
   * @param {Array} imgs - array of images needed.
   * @param {String} className - the class name for the image.
   * @returns {Element} - img tags with proper key, src, and alt.
   */
  function genImages(imgs, className) {
    return imgs.map((img) => {
      return (
        <img key={img} src={`./img/assets/${img}.png`} alt="" className={`${className} ${className}__${img}`} />
      )
    })
  }

  return (
    <React.Fragment>
      <Section name="message">
        <p>This page is still under construction!</p>
      </Section>

      <Section name="intro">
        {genImages(introImgs, 'intro__image')}
        <div className="content intro__content">
          <h2>Hi! I'm Bella.</h2>
          <p>
            I am a first-year student at the University of Washington intending on majoring
            in Informatics. I started out 100% sure I wanted to be a graphic designer, but I
            unexpectedly fell in love with web programming instead. Now, I strive to bridge
            the worlds between visual communication and technology. If I’m able to make even
            one person’s life easier or more enjoyable through my creations, then I can be
            satisfied.
          </p>
          <p>
            I’m currently working on UX Design, Back-End Development, and Web Development for
            the Stoma Project in the Sensors, Energy, and Automation Laboratory, as well as
            Graphic Design for @smirk_uw on Instagram.
          </p>
          <p>
            In my own time, I like to create illustrations of my favorite characters, record
            covers of my favorite songs, and dance in my room as I play my favorite playlist
            through my Bluetooth speaker. If I’m not on campus, you can most definitely find
            me at my favorite restaurant, Meesum Pastry, indulging in the nostalgic and
            comforting taste of Taiwanese cuisine.
          </p>
        </div>
      </Section>

      <Section name="hobby">
        <div className="content hobby__content">
          <h2>Outside of work and studies, I like...</h2>
        </div>
        <div className="hobby__images">
          {genImages(hobbyImgs, 'hobby__image')}
        </div>
      </Section>

      <Footer />
      <Nav currentPage="About" />
    </React.Fragment>
  )
}

export default About;