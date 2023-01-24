import "./Pawn.css";
import p1 from "../../images/pawn/p1.png";
import p2 from "../../images/pawn/p2.png";
import p3 from "../../images/pawn/p3.png";
import p4 from "../../images/pawn/p4.png";
import ref from "../../images/pawn/pRef.png";

function Pawn() {
  return (
    <div>
      <img
        id="pieceRender1"
        className="pieceImg"
        src={p1}
        alt="pawn render front downwards"
      />
      <h1 className="doctorFont">Pawn.</h1>
      <p>
        The pawn was the easiest piece by far and for clear reasons. The shape
        was not very complicated, it is relatively smaller and it had the best
        reference imagery. Almost all of the pieces are simply cylinders that
        were extruded and scaled at different cross sections.
      </p>
      <img id="ref1" className="pieceImg" src={ref} alt="reference from show" />
      <p>
        It was a low poly model that was smoothed with the subdivision surface
        modifier. It might not have been the best way, but it was the only way I
        knew how. It was a little bit of a pain when I wanted to keep edges in
        specific places, but it ended up working fairly well.
      </p>
      <img
        id="pieceRender2"
        className="pieceImg"
        src={p2}
        alt="pawn render front upwards"
      />
      <img id="pieceRender3" className="pieceImg" src={p3} alt="top close up" />
      <img id="pieceRender4" className="pieceImg" src={p4} alt="top down" />
    </div>
  );
}
export default Pawn;
