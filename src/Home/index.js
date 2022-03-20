import '../assets/css/styles.css';
import '../assets/css/home.css';
import React from 'react';
import Footer from '../Components/Footer';
import Section from './Section';

const headerImgs = ['bee'];
const aboutImgs = ['girl', 'small-stars-left', 'small-stars-right', 'big-star'];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { scrollIndex: 0 };
    this.animationRef = React.createRef();
  }

  animateImage(currentIndex) {
    if (currentIndex <= (window.innerHeight || document.documentElement.clientHeight)) {
      console.log('animation starting!');
    }
  }

  render() {
    return (
      <div className="home">
        <Section name="header" imgs={headerImgs}>
          <h1>Bella Lee</h1>
          <h3>student at the University of Washington</h3>
        </Section>

        <Section name="about" imgs={aboutImgs} animation={this.animateImage}>
          <h2>Hi! I'm Bella.</h2>
          <p>
            I am a first-year student at the University of Washington intending on majoring
            in Informatics. I started out 100% sure I wanted to be a graphic designer, but I
            unexpectedly fell in love with web programming instead. Now, I strive to bridge
            the world between visual communication and technology. If I’m able to make even
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
            me at my favorite restaurant, Meesum Pastry, indulging in the nostalgic and comforting
            taste of Taiwanese cuisine.
          </p>
        </Section>

        <Footer />
      </div>
    );
  }
}

export default Home;