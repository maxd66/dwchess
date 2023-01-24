import "./Bishop.css";
import p1 from "../../images/bishop/p1.png";
import p2 from "../../images/bishop/p2.png";
import p3 from "../../images/bishop/p3.png";
import p4 from "../../images/bishop/p4.png";
import ref from "../../images/bishop/bRef.png";

function Bishop() {
  return (
    <div className="pieceContainer">
      <img
        id="bishopRender1"
        className="pieceImg"
        src={p1}
        alt="Bishop render front downwards"
      />
      <h1 className="doctorFont">Bishop.</h1>
      <p>
        The Bishop in terms of modeling was just a slight step up from the pawn.
        It is taller and has a different design on the top. It was when
        designing the Bishop that I realized the collar of every piece was
        actually slightly different.
      </p>
      <img id="ref1" className="pieceImg" src={ref} alt="reference from show" />
      <p>
        The collars look the same at a glance for certain pieces, but luckily
        the bishop and the pawn were the best referenced pieces that I had. It
        was clear and easy to see that the collars needed to be distinct.
      </p>
      <img
        id="bishopRender2"
        className="pieceImg"
        src={p2}
        alt="Bishop render front upwards"
      />
      <img
        id="bishopRender3"
        className="pieceImg"
        src={p3}
        alt="top close up"
      />
      <img id="bishopRender4" className="pieceImg" src={p4} alt="top down" />
    </div>
  );
}
export default Bishop;
