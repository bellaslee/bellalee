import Section from '../Components/Section';

export default function Yuta() {
  return (
    <div className="illust">
      <Section>
        <img
          src="/img/illustrations/yuta.png"
          alt="drawing of Yuta from Jujutsu Kaisen"
        />
        <div className="info">
          <h2>Yuta</h2>
          <h3>Jujutsu Kaisen 0 Fanart. March 2022.</h3>
          <p>Time taken: 10 hr</p>
          <p>Program: Clip Studio Paint</p>
        </div>
      </Section>

      <Section name="process">
        <div className="info">
          <h2>Process</h2>
          <p>
            I started this piece because I wanted to try the hack that I found
            on TikTok where artists use a greenish gray as the base color for
            skin. I picked a reference image off of Pinterest and thought it
            suited Yuta's character! I watched the movie{' '}
            <em>Jujutsu Kaisen 0</em> just the day before and was quite touched
            by it. This is one of my favorite pieces because I think it has the
            strongest composition and formal contrast that I've ever pulled off.
            Through this piece, I also realized that I prefer rendering in a
            semi-realistic style as opposed to an anime-esque one!
          </p>
        </div>
        <img src="/img/illustrations/yuta.gif" alt="process video of drawing" />
      </Section>
    </div>
  );
}
