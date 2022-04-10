import Section from '../Components/Section';

export default function Aki() {
  return (
    <div className="illust">
      <Section>
        <img
          src="/img/illustrations/aki.jpg"
          alt="drawing of Aki from Chainsaw Man"
        />
        <div className="info">
          <h2>Aki</h2>
          <h3>Chainsaw Man fanart. April 2022.</h3>
          <p>Time taken: 12 hr</p>
          <p>Program: Clip Studio Paint</p>
        </div>
      </Section>

      <Section name="process">
        <div className="info">
          <h2>Process</h2>
          <p>
            I was inspired to create this piece because of the{' '}
            <a
              href="https://www.youtube.com/watch?v=eyonP1AgC0k"
              target="_blank"
              rel="noreferrer"
            >
              Chainsaw Man trailer
            </a>
            . I thought it would be cool to draw him and the fox demon that he
            summons in the same frame! He is definitely my favorite character
            from the series and I am very excited to see him animated. The
            biggest challenges I ran into while doing this piece were rendering
            the fox's fur to look believable and making sure the contrast was
            enough for the subject to stand out while still maintaining
            believable lighting.
          </p>
        </div>
        <img src="/img/illustrations/aki.gif" alt="process video of drawing" />
      </Section>
    </div>
  );
}
