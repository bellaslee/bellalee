import Section from '../../Components/Section';
import ScrollIndicator from '../../Components/ScrollIndicator';

export default function Jojo() {
  return (
    <div className="illust">
      <Section>
        <img
          src="/img/illustrations/jojoo.jpg"
          alt="drawing of Jotaro from Jojo's Bizarre Adventure"
        />
        <div className="info">
          <h2>Kujo Jotaro</h2>
          <h3>Jojo's Bizarre Adventure fanart. April 2022.</h3>
          <p>Time taken: 8 hr</p>
          <p>Program: Clip Studio Paint</p>
        </div>
        <ScrollIndicator />
      </Section>

      <Section name="process">
        <div className="info">
          <h2>Process</h2>
          <p>
            I just wanted to draw my favorite character from the series. I
            initially included the wave in the background because of an inside
            joke, but because it made the composition nicer, I had to keep it...
          </p>
        </div>
        <img
          src="/img/illustrations/jojoo.gif"
          alt="process video of drawing"
        />
      </Section>
    </div>
  );
}
