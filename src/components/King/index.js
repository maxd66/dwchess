import "./King.css";
import p1 from "../../images/king/p1.png";
import p2 from "../../images/king/p2.png";
import p3 from "../../images/king/p3.png";
import p4 from "../../images/king/p4.png";
import ref from "../../images/king/kRef.png";

function King() {
  return (
    <div className="pieceContainer">
      <img
        id="kingRender1"
        className="pieceImg"
        src={p1}
        alt="King render front downwards"
      />
      <h1 className="doctorFont">King.</h1>
      <p>
        The King is arguably my favorite piece. It is geometrically very
        satisfying and I really like the angle of the second collar. It feels
        regal despite being so simple. The neck was also interesting because it
        seemed slightly thinner near the top, which adds a sleeker feel.
      </p>
      <img id="ref1" className="pieceImg" src={ref} alt="reference from show" />
      <p>
        The reference imagery for this piece was pretty clear, mostly because
        the king is the tallest piece and the Cybermen castled, putting their
        king on the very edge of the board.
      </p>
      <img
        id="kingRender2"
        className="pieceImg"
        src={p2}
        alt="King render front upwards"
      />
      <img id="kingRender3" className="pieceImg" src={p3} alt="top close up" />
      <img id="kingRender4" className="pieceImg" src={p4} alt="top down" />
    </div>
  );
}
export default King;
