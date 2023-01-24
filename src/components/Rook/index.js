import "./Rook.css";
import p1 from "../../images/rook/p1.png";
import p2 from "../../images/rook/p2.png";
import p3 from "../../images/rook/p3.png";
import p4 from "../../images/rook/p4.png";
import ref from "../../images/rook/rRef.png";

function Rook() {
  return (
    <div className="pieceContainer">
      <img
        id="rookRender1"
        className="pieceImg"
        src={p1}
        alt="Rook render front downwards"
      />
      <h1 className="doctorFont">Rook.</h1>
      <p>
        The Rook was a lovely piece to tackle. It seemed so simple when I
        started, but later in the process presented some interesting and
        satisfying challenges. This was one of the only pieces I botched so bad
        initially I had to scrap it. Not because it looked bad, but because the
        method I chose was going to take WAY too long.
      </p>
      <img id="ref1" className="pieceImg" src={ref} alt="reference from show" />
      <p>
        The reference imagery for this piece was definitely third best. The
        piece itself is simple enough and just because it is naturally
        positioned on the edge of the board, I was able to get some pretty clean
        shots. I think if I had to choose, this piece would be the closest
        replica of them all. The pawn and bishop were easiest to model, but I
        was relying on very blurry references to determine the scale of the
        bulbs on top which I guarantee are not very accurate. The rook, however,
        is clean cut and was easy to divide up into sections where the scale
        just made sense.
      </p>
      <img
        id="rookRender2"
        className="pieceImg"
        src={p2}
        alt="Rook render front upwards"
      />
      <img id="rookRender3" className="pieceImg" src={p3} alt="top close up" />
      <img id="rookRender4" className="pieceImg" src={p4} alt="top down" />
    </div>
  );
}
export default Rook;
