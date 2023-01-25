import doctorChess from "../../images/dw-chess-scene.jpg";
import sceneRender from "../../images/scene-render2.png";
import "./Main.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle as fasCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircle as farCircle } from "@fortawesome/free-regular-svg-icons";

function Main() {
  const [selectedImage, setSelectedImage] = useState(doctorChess);
  const [firstBubble, setFirstBubble] = useState(fasCircle);
  const [secondBubble, setSecondBubble] = useState(farCircle);

  const handleImageChange = (e) => {
    e.preventDefault();
    const target = e.target.id;
    if (target === "firstBubble" && firstBubble !== fasCircle) {
      console.log("first bubble clicked");
      setFirstBubble(fasCircle);
      setSecondBubble(farCircle);
      setSelectedImage(doctorChess);
    } else if (target === "secondBubble" && secondBubble !== fasCircle) {
      setSelectedImage(sceneRender);
      setFirstBubble(farCircle);
      setSecondBubble(fasCircle);
    }
  };
  return (
    <div className="bodySection">
      <img
        id="doctorChess"
        src={selectedImage}
        alt="the doctor behind a chessboard"
      />
      <div id="image-selector">
        <FontAwesomeIcon
          icon={firstBubble}
          id="firstBubble"
          onClick={(event) => handleImageChange(event)}
        />
        <FontAwesomeIcon
          icon={secondBubble}
          id="secondBubble"
          onClick={(event) => handleImageChange(event)}
        />
      </div>
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
      <h3 className="doctorFont leftHeader">The Missing Knight.</h3>
      <p>
        While working on these pieces and meticulously analyzing many images and
        scenes from this show, I realized there was something wrong. The chess
        game the Doctor and his opponent played was not a famous game or of any
        major significance, but there is something missing from the image above.
      </p>
      <p>
        The white pieces are all accounted for, on and off the board. The black
        pieces, however, are lacking a Knight. Of course, it could be a simple
        error by the prop department or whoever is responsible for ensuring
        continuity, but how much cooler would it be if it were on purpose?
      </p>
      <p>
        At first I thought the Doctor was playing black and it was symbolism.
        The Doctor's side has one less Knight because he is the Knight. The
        black Knight, saving the day. Making decisions and sacrifices no one
        else can. And he is always tricky. However, the Doctor was playing as
        white, so that theory went out the window.
      </p>
      <p>
        My second idea was that maybe they were implying the Doctor cheated
        while the Cybermen mainframe was inhibited. Reasonable, but less cool.
        Maybe in a deleted scene the Cybermen got cocky and decided to give it
        away and tossed it to the side. Whatever it is, I hope it was on
        purpose. What do you think?
      </p>
    </div>
  );
}

export default Main;
