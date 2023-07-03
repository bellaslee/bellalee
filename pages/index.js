import React, { useEffect } from 'react';
import Footer from '../components/footer.js';
import Section from '../components/section.js';
import Head from 'next/head';
import Gallery from '../components/gallery.js';

const aboutImgs = ['girl', 'small-stars-left', 'small-stars-right', 'big-star'];

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
  function genAboutImages(imgs, className) {
    return imgs.map((img) => {
      return (
        <img key={img} src={`../img/assets/${img}.png`} alt="" className={`${className} ${className}__${img}`} />
      )
    })
  }

  function genHobbyImages(imgs, className) {
    return imgs.map((img) => {
      const { image, caption } = img;
      return (
        <span className={`${className}__container ${className}__${image}`}>
          <img key={image} src={`../img/assets/${image}.png`} alt="" className={`${className}`} />
          <p className={`${className}__caption`}>{caption}</p>
        </span>
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
        <img src="../img/assets/bee.png" alt="" className="header__image" />
        <div className="content header__content">
          <h1>Bella Lee</h1>
          <h3>student at the University of Washington</h3>
        </div>
      </Section>

      <Section name="about">
        {genAboutImages(aboutImgs, 'about__image')}
        <div className="content about__content">
          <h2>Hi! I'm Bella.</h2>
          <p>
            I am a sophomore at the University of Washington majoring
            in Informatics. My dream is to work in the intersection between visual
            communication and technology; lately, I've become very interested in
            creative coding. I hope to make information more accessible, intuitive,
            and enjoyable to consume through my work.
          </p>
          <p>
            I am the Chief Design Officer at{' '}
            <a
              href="http://instagram.com/smirk_uw"
              target="_blank"
              rel="noreferrer"
            >
              Smirk UW
            </a>
            .
          </p>
          <p>
            In my own time, I like to create illustrations, play fingerstyle guitar,
            sing, and get completely engrossed in my latest interest — lately, I'm
            really into the designs of{' '}
            <a href="https://www.pili.com.tw/" target="_blank" rel="noreferrer">
              traditional Taiwanese puppetry
            </a>
            !
          </p>
        </div>
      </Section>

      <Section name="hobby">
        <div className="content hobby__content">
          <h2>Outside of work and studies, I like...</h2>
        </div>
        <div className="hobby__images">
          {genHobbyImages(hobbyImgs, 'hobby__image')}
        </div>
      </Section>

      {/* <Section name="illustrations">
        <h2>I'm a big fan of pretty fictional characters.</h2>
        <Gallery />
      </Section> */}

      <Footer />
    </>
  );
}

export default Home;