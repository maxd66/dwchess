import "./Queen.css";
import p1 from "../../images/queen/p1.png";
import p2 from "../../images/queen/p2.png";
import p3 from "../../images/queen/p3.png";
import p4 from "../../images/queen/p4.png";
import ref from "../../images/queen/qRef.png";

function Queen() {
  return (
    <div className="pieceContainer">
      <img
        id="queenRender1"
        className="pieceImg"
        src={p1}
        alt="Queen render front downwards"
      />
      <h1 className="doctorFont">Queen.</h1>
      <p>
        The Queen was interesting, classic and possibly the most recognizable
        piece of the set (besides the pawn). It was relatively simple when
        compared to the knight. However, the finer details seemed to be lost in
        the lesser resolution of my references.
      </p>
      <img id="ref1" className="pieceImg" src={ref} alt="reference from show" />
      <p>
        Specifically the texture on the lip of the queen's crown. From a
        distance, I thought they were beads. Upon researching other classic
        queen designs, however, I realized they were more likely spikes. This
        was a situation where I kind of had to use my own intuitions to land on
        this design.
      </p>
      <p>
        I was particularly excited when I landed on the number of spikes on her
        crown. I tried my best to count on the image and I got 6 spikes on each
        side. Meaning 12 spikes total. One for every version of the Doctor (as
        of this episode).
      </p>
      <img
        id="queenRender2"
        className="pieceImg"
        src={p2}
        alt="Queen render front upwards"
      />
      <img id="queenRender3" className="pieceImg" src={p3} alt="top close up" />
      <img id="queenRender4" className="pieceImg" src={p4} alt="top down" />
    </div>
  );
}
export default Queen;
