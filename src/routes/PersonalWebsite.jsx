import Section from '../Components/Section';
import Spacer from '../Components/Spacer';

export default function PersonalWebsite() {
  return (
    <div className="project">
      <Section name="description">
        <img src="/img/projects/website.png" alt="my website" />
        <h1>Personal Website</h1>
        <h3>the website you are looking at right now!</h3>
      </Section>

      <Section name="process">
        <h2>The process.</h2>
        <p>
          I decided to build my personal website after taking the course{' '}
          <em>CSE 154: Web Programming</em> at the University of Washington
          during the winter quarter of 2022. I wanted to push myself out of my
          comfort zone, so I binged a React course on Udemy over spring break
          while completing this project.
        </p>
        <p>
          I started with a mockup of my website using Figma. I knew that I
          wanted it to have a pencil-sketched quality to it, as I've been
          especially into the work of artist{' '}
          <a
            href="https://www.instagram.com/914.001/"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            @914.001
          </a>{' '}
          on Instagram lately.
        </p>
        <img src="/img/projects/914001.png" alt="my inspiration" />
        <p>
          I spent an afternoon sketching out images of things I liked. Fun fact:
          I use a bee as my logo because if you delete the middle of my name,
          that's what you get! (B)ella L(ee)! Hahaha...
        </p>
        <p>
          After I finished prototyping, I started to work on coding the
          components. I must've spent at least 8 hours trying to figure out how
          to get my assets to animate as I scrolled down the page, but I think
          it was worth it and it's my favorite part of my website! After that,
          the next most difficult component to build was probably the carousel.
          I spent a long time figuring out how to wrap the elements, but decided
          to just forgo that in the end. I probably deployed at least 3 versions
          of the carousel before deciding on the current one.
        </p>
        <p>
          In between creating each component and page, I brushed up on my React
          skills with Stephen Grider's <em>Modern React With Redux</em> course
          on Udemy. It was a lot of conent to go through in 3 days, but I also
          learned a lot of skills that I applied to this project immediately.
        </p>
        <p>
          It took me about a week to get my website to a satisfactory state.
        </p>
        <p>
          Fun fact: my website used to look like this! I think I've come a long
          way since fall 2020...
        </p>
        <img src="/img/projects/old-design.png" alt="my old website" />
      </Section>
      <Spacer />
      <Section name="inspiration">
        <h2>More inspiration.</h2>
        <h3>
          <a
            href="https://www.designbyroka.com/"
            target="_blank"
            rel="noreferrer"
          >
            Design by Roka
          </a>
        </h3>
        <p>
          Shawn Park's website is the prettiest website I've ever seen. Though
          my skill level is nowhere near his yet, his website really inspired me
          to create a delightful user experience through animations and smooth
          transitions.
        </p>
        <h3>
          <a href="https://www.brunog.design/" target="_blank" rel="noreferrer">
            Bruno Givotovsky
          </a>
        </h3>
        <p>
          I love the way that Bruno Givotovsky's organizes his project pages in
          his portfolio website! Though my process is not as well documented as
          his, the way this page is structed is <em>very</em> loosely inspired
          by his work. Maybe some day it will look as nice as his!
        </p>
      </Section>
      <Spacer />
      <Section name="learning-outcomes">
        <h2>Learning outcomes.</h2>
        <p>
          Through this project, I learned:
          <ul>
            <li>React.js + Sass.</li>
            <li>How to create re-usable components.</li>
            <li>More advanced and efficient DOM navigation.</li>
            <li>How to factor out code redundancy on a larger scale.</li>
            <li>What to consider when doing UX design from scratch.</li>
            <li>CSS animation.</li>
            <li>Fun JavaScript tricks I didn't get to learn in class.</li>
          </ul>
          This list will probably grow as I continue to improve and maintain my
          website! With this project, I also realized how much I love web
          development and design and am aiming to pursue a career in it in the
          future.
        </p>
      </Section>
    </div>
  );
}
