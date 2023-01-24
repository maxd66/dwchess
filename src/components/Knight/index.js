import "./Knight.css";
import p1 from "../../images/knight/p1.png";
import p2 from "../../images/knight/p2.png";
import p3 from "../../images/knight/p3.png";
import p4 from "../../images/knight/p4.png";
import ref from "../../images/knight/knRef.png";

function Knight() {
  return (
    <div className="pieceContainer">
      <img
        id="knightRender1"
        className="pieceImg"
        src={p1}
        alt="Knight render front downwards"
      />
      <h1 className="doctorFont">Knight.</h1>
      <p>
        The Knight was easily the most difficult piece to model by far. All the
        others are basically symmetrical cylinders with a few small exceptions,
        but the Knight is an assymetrical complex shape. Everything from the way
        its stem rises to the neck, the angle its ears point, the width of its
        head, and the angle of its nose were all different in every reference
        photo I had.
      </p>
      <img id="ref1" className="pieceImg" src={ref} alt="reference from show" />
      <p>
        The reference photo above is only one of many that I used. The reason
        the reference imagery is hard to follow is because of parallax and
        angles. The camera is pointed at the piece from a certain angle above or
        below, and the lens warps shapes the further away from the center you
        get. For these, and many other reasons (including my lack of 3D modeling
        experience) the Knight is the furthest replica of the bunch.
      </p>
      <p>
        That being said, I used every strategy I could to make them as close as
        possible. I also tried to focus more on making them look cool. Because
        the reference imagery was not perfect, I had to rely on my own creative
        instincts to make it fit with the other pieces and still look distinct
        and cool on its own. Despite the challenges I faced and the many
        improvements I think can be made, I am very proud of how it came out and
        I think it is remarkably close even if it's clearly not perfect.
      </p>
      <img
        id="knightRender2"
        className="pieceImg"
        src={p2}
        alt="Knight render front upwards"
      />
      <img
        id="knightRender3"
        className="pieceImg"
        src={p3}
        alt="top close up"
      />
      <img id="knightRender4" className="pieceImg" src={p4} alt="top down" />
    </div>
  );
}
export default Knight;
