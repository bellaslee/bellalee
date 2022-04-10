import Section from '../Components/Section';

export default function Thoma() {
  return (
    <div className="illust">
      <Section>
        <img
          src="/img/illustrations/thoma.jpg"
          alt="drawing of Thoma from Genshin Impact"
        />
        <div className="info">
          <h2>Thoma</h2>
          <h3>Genshin Impact fanart. September 2021.</h3>
          <p>Time taken: 8 hr</p>
          <p>Program: Clip Studio Paint</p>
        </div>
      </Section>

      <Section name="process">
        <div className="info">
          <h2>Process</h2>
          <p>
            In this piece, I decided to experiment a bit with adding vibrant
            colors! I learned that I can make saturated colors look natural if I
            use them for lighting, such as in highlights or bounce lights.
          </p>
        </div>
        <img
          src="/img/illustrations/thoma.gif"
          alt="process video of drawing"
        />
      </Section>
    </div>
  );
}
