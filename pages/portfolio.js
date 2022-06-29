import React, { useEffect } from 'react';
import Nav from '../Components/Nav';
import Section from '../Components/Section';
import Carousel from '../Components/Carousel';
import ImageGrid from '../Components/ImageGrid';
import Footer from '../Components/Footer';

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

const projects = [
  {
    image: 'projects/website.png',
    title: 'personal website',
    text: 'the second iteration of my website.',
    route: '../projects/personal-website'
  },
  {
    image: 'projects/ostomate.png',
    title: 'Osto-Mate',
    text: 'branding and promotional materials for the Dempsey Startup Competition.',
    route: '../projects/ostomate'
  }
];

function Portfolio() {
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

  return (
    <React.Fragment>
      <Section name="projects">
        <h2>My projects.</h2>
        <Carousel items={projects} />
      </Section>
      <Section name="illustrations-grid">
        <h2>My illustrations.</h2>
        <ImageGrid items={illustrations} />
      </Section>
      <Nav currentPage="Portfolio" />
      <Footer />
    </React.Fragment>
  )
}

export default Portfolio;