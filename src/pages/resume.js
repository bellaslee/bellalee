import React, { useEffect } from 'react';
import Section from '../components/section.js';
import Footer from '../components/footer.js';
import Nav from '../components/nav.js';
import Spacer from '../components/spacer.js';
import Head from 'next/head';

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
    <>
      <Head>
        <title>resume | bella lee</title>
        <meta property="og:title" content="resume | bella lee" key="title" />
      </Head>
      <div className="resume">
        <Section name="intro">
          <h1>Bella Lee</h1>
          <h3>illustrator and designer seeking opportunities in front-end web development.</h3>
        </Section>
        <Spacer />
        <Section name="profile">
          <h2>Profile.</h2>
          <div className="content">
            <ul>
              <li>First-year student at the University of Washington intending on majoring in Visual Communication Design and Informatics.</li>
              <li>6+ years of experience in illustration, graphic design, and social media management.</li>
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
              <li>Adobe Photoshop / Illustrator / After Effects</li>
              <li>Figma / Clip Studio Paint / Procreate</li>
              <li>HTML / CSS / SCSS / JS / React</li>
              <li>Node / SQLite</li>
            </ul>
          </div>
        </Section>
        <Spacer />
        <Section name="experience">
          <div>
            <h2>Experience.</h2>
            {/* <p>To see my work, head over to my <Link to="../portfolio">portfolio</Link>!</p> */}
          </div>
          <div className="content">
            <div className="experience__job">
              <h3>Smirk UW</h3>
              <p className="job-title">Chief Design Officer</p>
              <p className="time">May 2022 — present</p>
              <ul>
                <li>Critique and approve designers' weekly posts.</li>
                <li>Coordinate advertisement post design and details with clients.</li>
                <li>Manage company branding and design guides.</li>
                <li>Participate in weekly meetings to generate content ideas and handle communications.</li>
              </ul>
              <p className="job-title">Graphic Designer</p>
              <p className="time">December 2021 — May 2022</p>
              <ul>
                <li>Designed two Instagram posts per week for @smirk_uw using Canva.</li>
                <li>Participated in weekly meetings to generate content ideas.</li>
              </ul>
            </div>

            <div className="experience__job">
              <h3>Sensors, Energy, and Automation Laboratory (SEAL)</h3>
              <p className="job-title">Web Developer</p>
              <p className="time">Feb 2022 — present</p>
              <ul>
                <li>Server-side development for Osto-Mate mobile application.</li>
              </ul>
              <p className="job-title">Designer</p>
              <p className="time">Feb 2022 — present</p>
              <ul>
                <li>UI/UX design and usability testing for Osto-Mate mobile application using Figma.</li>
                <li>Create branding and promotional materials for Dempsey Startup Competition.</li>
              </ul>
            </div>

            <div className="experience__job">
              <h3>Peachyxin Illustration</h3>
              <p className="job-title">Freelance</p>
              <p className="time">December 2016 — present</p>
              <ul>
                <li>Design merchandise and produced full-color digital illustrations for independent publications.</li>
                <li>Produce custom full-color digital illustrations for independent clients. Handle customer service via email and online chatting platforms.</li>
                <li>Managed social media presence on Twitter and Instagram.</li>
                <li>Designed, sourced, ordered, and marketed merchandise, making 39 sales in a 3 month period in 2018.</li>
              </ul>
            </div>

            <div className="experience__job">
              <h3>Muscle Fuel</h3>
              <p className="job-title">Graphic Designer</p>
              <p className="time">June 2018 — August 2020</p>
              <ul>
                <li>Created graphics and illustrations for promotional material using Clip Studio Paint, Adobe Illustrator, and Adobe InDesign.</li>
                <li>Shot and edited product photos for online store.</li>
                <li>Managed social media presence and handled marketing on Instagram and Facebook.</li>
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
    </>
  )
}

export default Resume;