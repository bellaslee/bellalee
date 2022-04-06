import Section from '../Components/Section';

export default function ChildeDelusion() {
  return (
    <div className="illust">
      <Section>
        <img
          src="/img/illustrations/delusion-childe.png"
          alt="drawing of Childe from Genshin Impact"
        />
        <div className="info">
          <h2>Tartaglia</h2>
          <h3>Genshin Impact Fanart. July 2021.</h3>
          <p>Time taken: 8 hr</p>
          <p>Program: Clip Studio Paint</p>
        </div>
      </Section>

      <Section name="process">
        <div className="info">
          <h2>Process</h2>
          <p>
            I created this piece for my portfolio back when I was applying to
            fanzines to demonstrate that I could draw backgrounds and dynamic
            poses.
          </p>
        </div>
      </Section>
    </div>
  );
}
