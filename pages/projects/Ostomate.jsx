import Section from '../../Components/Section';
import Spacer from '../../Components/Spacer';
import ScrollIndicator from '../../Components/ScrollIndicator';

export default function Ostomate() {
  return (
    <div className="project">
      <Section name="description">
        <img src="/img/projects/ostomate.png" alt="ostomate logo" />
        <h3>
          branding and promotional materials for the Dempsey Startup Competition
          at UW.
        </h3>
        <ScrollIndicator />
      </Section>
      <Section name="process">
        <h2>The process.</h2>
        <p>
          I was in charge of creating the logo and assets for various marketing
          materials for my research lab team at the Dempsey Startup Competition.
          To create the logo, I started off with a few thumbnails.
        </p>
        <span>
          <img
            src="/img/projects/ostomate-logo-sketches.png"
            alt="logo sketches"
            style={{ height: '23vw' }}
          />
          <img
            src="img/projects/ostomate-logo.jpg"
            alt="logo"
            style={{ height: '23vw' }}
          />
        </span>
        <p>
          I decided to go with the version on the bottom left. However, as I was
          designing, I soon realized that the composition of the logo looked
          off. It was hard to make it readable at a smaller size, and the visual
          language did not look friendly enough. After ideating with a friend,
          the image on the right became the final logo.
        </p>
        <p>
          After finalizing the logo design, I moved on to creating illustrations
          that would be used for stickers, the poster, and a flyer. Here is the
          end result:
        </p>
        <img src="img/projects/ostomate-flyer.jpg" alt="flyer" />
        <p>
          I tried my best to illustrate in a style that would be attractive to
          viewers but still highlight the importance of the issue we are
          solving. The main goal of the graphics for this project was to attract
          and retain the attention of as many judges as possible.
        </p>
      </Section>
      <Spacer />
      <Section>
        <h2>The outcome.</h2>
        <p>
          Osto-Mate was able to advance to the Sweet Sixteen Semi-Final Round
          for the competition. I helped finalize the design for the pitch deck
          and, after hours of discussion and memorization, we finally pitched to
          a panel of seven judges on May 26th, 2022. Unfortunately, we did not
          make it to the top four, but we did win the $2,500 Karr Tuttle
          Campbell Best Health and Wellness Impact Idea Prize.{' '}
          <a
            href="https://blog.foster.uw.edu/2022-awards-dempsey-startup-competition/"
            target="_blank"
            rel="noreferrer"
          >
            Read more about the competition results here
          </a>
          !
        </p>
      </Section>
      <Spacer />
      <Section name="learning-outcomes">
        <h2>Learning outcomes.</h2>
        <p>
          Through this project, I learned:
          <ul>
            <li>
              How to create graphics with a target audience in mind (in this
              case, the judges that would be giving us investmend dollars).
            </li>
            <li>Logo design in Adobe Illustrator.</li>
            <li>
              Layouts where there is the same amount of text as (or more text
              than) images. I had previously only worked with designs with
              minimal text.
            </li>
            <li>Public speaking and presentation-making.</li>
          </ul>
          I hope to have the chance to work with more information-focused design
          in the future, too, as this was a really interesting challenge for me
          to solve!
        </p>
      </Section>
    </div>
  );
}
