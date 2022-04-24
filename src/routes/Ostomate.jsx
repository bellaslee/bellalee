import Section from '../Components/Section';
import Spacer from '../Components/Spacer';

export default function Ostomate() {
  return (
    <div className="project">
      <Section name="description">
        <img src="/img/projects/ostomate.png" alt="ostomate logo" />
        <h3>
          branding and promotional materials for the Dempsey Startup Competition
          at UW.
        </h3>
      </Section>

      <Section name="process">
        <h2>The process.</h2>
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
        </p>
      </Section>
    </div>
  );
}
