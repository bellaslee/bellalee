import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Section from '../components/Section';
import Carousel from '../components/Carousel';
import AboutBlurb from '../components/AboutBlurb';
import Head from 'next/head';

const aboutImgs = ['girl', 'small-stars-left', 'small-stars-right', 'big-star'];
const projects = [
  {
    image: 'projects/website.png',
    title: 'personal website',
    text: 'the second iteration of my website.',
    route: '/projects/personal-website'
  },
  {
    image: 'projects/ostomate.png',
    title: 'Osto-Mate',
    text: 'branding and promotional materials for the Dempsey Startup Competition at UW.',
    route: '../projects/ostomate'
  }
];

function Home() {
  useEffect(() => {
    const getScroll = () => {
      document.body.style.setProperty('--scroll',
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    }

    window.addEventListener('scroll', getScroll, false);

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
      return (
        <img key={img} src={`./img/assets/${img}.png`} alt="" className={`${className} ${className}__${img}`} />
      )
    })
  }

  return (
    <>
      <Head>
        <title>home | bella lee</title>
        <meta property="og:title" content="home | bella lee" key="title" />
      </Head>
      <Section name="header">
        <img src="./img/assets/bee.png" alt="" className="header__image" />
        <div className="content header__content">
          <h1>Bella Lee</h1>
          <h3>student at the University of Washington</h3>
        </div>
      </Section>

      <Section name="about">
        {genImages(aboutImgs, 'about__image')}
        <div className="content about__content">
          <AboutBlurb />
        </div>
      </Section>

      <Section name="projects">
        <h2>My projects.</h2>
        <Carousel items={projects} />
      </Section>

      <Footer />
      <Nav currentPage="Home" />
    </>
  );
}

export default Home;