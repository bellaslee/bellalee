import '../assets/css/resume.css';
import React, { useEffect } from 'react';
import Section from '../Components/Section';
import Footer from '../Components/Footer';
import Nav from '../Components/Nav';
import Spacer from '../Components/Spacer';

function Resume() {
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
    <div className="resume">
      <Section name="intro">
        <h1>Bella Lee</h1>
        <h3>first-year student at the University of Washington seeking opportunities in front-end or full-stack web development.</h3>
      </Section>
      <Spacer />
      <Section name="profile">
        <h2>Profile.</h2>
        <div className="content">
          <ul>
            <li>First-year student at the University of Washington intending on majoring in Informatics.</li>
            <li>5+ years of experience in illustration, graphic design, and social media management.</li>
            <li>Adept at designing and developing functional and intuitive user interfaces and experiences.</li>
            <li>Experienced in leading and balancing multiple projects, as well as communicating with different organizations to host events.</li>
          </ul>
        </div>
      </Section>
      <Spacer />
      <Section name="skills">
        <h2>Skills.</h2>
        <div className="content">
          <ul>
            <li>UI/UX design</li>
            <li>Full-stack web development</li>
            <li>Figma / Illustrator / Photoshop</li>
            <li>HTML / CSS / JS / React</li>
            <li>Node / SQLite</li>
          </ul>
        </div>
      </Section>
      <Spacer />
      <Section name="experience">
        <h2>Experience.</h2>
        <div className="content">
          <div className="experience__job">
            <h3>Sensors, Energy, and Automation Laboratory (SEAL)</h3>
            <p className="job-title">Web Developer</p>
            <p className="time">Feb 2022 — present</p>
            <ul>
              <li>Server-side development for Osto-Mate mobile application.</li>
            </ul>
            <p className="job-title">UX Designer</p>
            <p className="time">Feb 2022 — present</p>
            <ul>
              <li>UI/UX design and usability testing for Osto-Mate mobile application using Figma.</li>
              <li>Usability testing for the initial prototype with patients.</li>
            </ul>
          </div>

          <div className="experience__job">
            <h3>Smirk UW</h3>
            <p className="job-title">Graphic Designer</p>
            <p className="time">December 2021 — present</p>
            <ul>
              <li>Design two Instagram posts per week for @smirk_uw using Canva.</li>
              <li>Participate in weekly meetings to generate content ideas.</li>
            </ul>
          </div>

          <div className="experience__job">
            <h3>Peachyxin Illustration</h3>
            <p className="job-title">Freelance</p>
            <p className="time">December 2016 — present</p>
            <ul>
              <li>
                Design merchandise and produced full-color digital illustrations for independent publications.
                <ul>
                  <li>Princes and Swords (BTS fanzine): double-sided acrylic charm and tarot card</li>
                  <li>Conviction (Genshin Impact character fanzine): spot illustration for short story</li>
                  <li><a href="https://twitter.com/thoma_zine/status/1501966112652763138" target="_blank" rel="noreferrer">Morningtide</a> (Genshin Impact character fanzine): full-page illustration</li>
                </ul>
              </li>
              <li>Produce custom full-color digital illustrations for independent clients. Handle customer service via email and online chatting platforms.</li>
              <li>Managed social media presence on Twitter and Instagram.</li>
              <li>Designed, sourced, ordered, and marketed merchandise, making 39 sales in a 3 month period in 2018.</li>
            </ul>
          </div>

          <div className="experience__job">
            <h3>ESL Tutor</h3>
            <p className="job-title">Freelance</p>
            <p className="time">May 2021 — August 2021</p>
            <ul>
              <li>Tutored third and fifth graders to improve their English.</li>
              <li>Created unique lesson plans weekly that focused on vocabulary, grammar, and writing structure.</li>
            </ul>
          </div>

          <div className="experience__job">
            <h3>World Scholar's Cup</h3>
            <p className="job-title">Club Vice President</p>
            <p className="time">August 2019 — May 2021</p>
            <ul>
              <li>Instructed both middle and high school in writing and debate.</li>
              <li>Handled financial planning for cross-country trip to a competition site.</li>
              <li>Gold medalist in multiple areas, including 1st place in team writing in March 2021, as well as school top scholar in 2019.</li>
            </ul>
          </div>

          <div className="experience__job">
            <h3>Cadenza</h3>
            <p className="job-title">Club President</p>
            <p className="time">August 2019 — May 2021</p>
            <ul>
              <li>Led weekly meetings and planned 4 performances each schoolyear.</li>
              <li>Managed documents adn files for auditions and performance quality checks.</li>
              <li>Coordinated event logistics with school IT office. Helped set up and test technology before events at the venue.</li>
              <li>Recorded and edited covers of popular songs using Logic Pro X. Managed social media presence on Instagram and YouTube.</li>
            </ul>
          </div>

          <div className="experience__job">
            <h3>Muscle Fuel</h3>
            <p className="job-title">Graphic Designer</p>
            <p className="time">June 2018 — August 2020</p>
            <ul>
              <li>Created graphics and illustrations for marketing purposes using Clip Studio Paint, Adobe Illustrator, and Adobe InDesign.</li>
              <li>Shot and edited product photos for online store.</li>
              <li>Managed social media presence and marketing on Instagram and Facebook.</li>
            </ul>
          </div>
        </div>
      </Section>
      <Spacer />
      <Section name="education">
        <h2>Education.</h2>
        <div className="content">
          <ul>
            <li>CSE 154: Web Programming</li>
            <li>DESIGN 166: Design Foundations</li>
            <li>HCDE 210: Explorations in Human Centered Design and Engineering</li>
            <li>Udemy: Modern React with Redux</li>
          </ul>
        </div>
      </Section>

      <Footer />
      <Nav currentPage="Resume" />
    </div>
  )
}

export default Resume;