import Section from '../../Components/Section';
import ScrollIndicator from '../../Components/ScrollIndicator';

export default function ChildeSnow() {
  return (
    <div className="illust">
      <Section>
        <img
          src="/img/illustrations/snow-childe.png"
          alt="drawing of Childe from Genshin Impact"
        />
        <div className="info">
          <h2>Just Casually Committing Murder, No Big Deal</h2>
          <h3>Genshin Impact fanart. July 2021.</h3>
          <p>Time taken: 8 hr</p>
          <p>Program: Clip Studio Paint</p>
        </div>
        <ScrollIndicator />
      </Section>

      <Section name="process">
        <div className="info">
          <h2>Process</h2>
          <p>
            I thought the contrast between a clearly violent scene and the
            character's relaxed expression would be kind of funny. I also just
            wanted to play with perspective and lighting.
          </p>
        </div>
      </Section>
    </div>
  );
}
