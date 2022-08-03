import React from 'react';

export default function AboutBlurb() {
  return (
    <React.Fragment>
      <h2>Hi! I'm Bella.</h2>
      <p>
        I am a first-year student at the University of Washington intending on
        majoring in Informatics. My dream is to work in the intersection between
        visual communication and technology; lately, I've become very interested
        in creative coding. I hope to make information more accessible,
        intuitive, and enjoyable to consume through my work.
      </p>
      <p>
        I am the Chief Design Officer at{' '}
        <a
          href="http://instagram.com/smirk_uw"
          target="_blank"
          rel="noreferrer"
        >
          Smirk UW
        </a>{' '}
        and the web development team leader at the{' '}
        <a href="https://www.uwseal.org/" target="_blank" rel="noreferrer">
          Sensors, Energy, and Automation Laboratory
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
    </React.Fragment>
  );
}
