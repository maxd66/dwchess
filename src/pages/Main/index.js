import doctorChess from "../../images/dw-chess-scene.jpg";
import "./Main.css";

function Main() {
  return (
    <div className="bodySection">
      <img
        id="doctorChess"
        src={doctorChess}
        alt="the doctor behind a chessboard"
      />
      <h2 className="doctorFont leftHeader">Hello.</h2>
      <p>
        My name is <strong>not</strong> the Doctor, but I am a huge nerd. I did
        my best to replicate a chess set from Nightmare in Silver because
        apparently no one else on the internet has. Although I will not claim it
        is a perfect replica and there is a lot that could be improved, I am
        extremely proud of how they came out. Hopefully, you find them
        impressive as well.
      </p>
      <p>
        {" "}
        I made this website to showcase more renders of the individual pieces
        and scenes from the episode that I've tried to recreate. I've also
        included some more details on the process of making them and some of the
        problems I had to over come in the process. Because I'm vain I guess.
      </p>
      <h3 className="doctorFont leftHeader">Me.</h3>
      <p>
        I recently started binging Doctor Who and was immediately drawn in by
        the whimsy, wacky plot, and the dark and interesting subtext the show
        carries. Season 7 Episode 12, Nightmare in Silver sort of revolves
        around chess. I was extremely excited because I am a secret chess nerd.
        I've been looking for a chess set that I really loved, so that I could
        display it and never convince my friends to play with me. The set from
        this episode grew on me as I watched. It is simple, but classy.
        Unnecessarily and unapologetically large. A piece could practically fill
        out the Doctor's fist. And I started to think that they might be a
        symbol for the Doctor himself.
      </p>
      <p>
        In a glance he's a simple concept.Time traveling alien adventuring with
        his companions, but in reality he is larger than life and one of the
        most complex characters ever written.{" "}
      </p>
      <p>
        So I was determined to find this chess set and it was going to be the
        one I show off. Low and behold, it wasn't something I could just buy. So
        like any rational person I decided to make them myself. So, I did my
        best and here they are. I hope you enjoy.
      </p>
    </div>
  );
}

export default Main;
