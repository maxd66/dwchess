import { useState } from "react";
import "./Pieces.css";
import Pawn from "../../components/Pawn";
import Bishop from "../../components/Bishop";
import Knight from "../../components/Knight";
import Rook from "../../components/Rook";

function Pieces() {
  const [piece, setPiece] = useState({ string: "pawn", comp: <Pawn /> });

  const handlePieceChange = (e) => {
    e.preventDefault();
    const pieceSelected = e.target.id;
    if (pieceSelected !== piece.string) {
      switch (pieceSelected) {
        case "pawn":
          setPiece({ string: "pawn", comp: <Pawn /> });
          break;

        case "bishop":
          setPiece({ string: "bishop", comp: <Bishop /> });
          break;

        case "knight":
          setPiece({ string: "knight", comp: <Knight /> });
          break;

        case "rook":
          setPiece({ string: "rook", comp: <Rook /> });
          break;

        case "queen":
          break;

        case "king":
          break;

        default:
          break;
      }
    } else {
      return;
    }
  };

  return (
    <div className="bodySection">
      <div id="iconList">
        <p
          id="pawn"
          onClick={(event) => handlePieceChange(event)}
          className={
            piece.string === "pawn"
              ? "inactiveLink doctorFont"
              : "activeLink doctorFont"
          }
        >
          p.
        </p>
        <p
          id="bishop"
          onClick={(event) => handlePieceChange(event)}
          className={
            piece.string === "bishop"
              ? "inactiveLink doctorFont"
              : "activeLink doctorFont"
          }
        >
          b.
        </p>
        <p
          id="knight"
          onClick={(event) => handlePieceChange(event)}
          className={
            piece.string === "knight"
              ? "inactiveLink doctorFont"
              : "activeLink doctorFont"
          }
        >
          kn.
        </p>
        <p
          id="rook"
          onClick={(event) => handlePieceChange(event)}
          className={
            piece.string === "rook"
              ? "inactiveLink doctorFont"
              : "activeLink doctorFont"
          }
        >
          r.
        </p>
        <p
          id="queen"
          onClick={(event) => handlePieceChange(event)}
          className={
            piece.string === "queen"
              ? "inactiveLink doctorFont"
              : "activeLink doctorFont"
          }
        >
          q.
        </p>
        <p
          id="king"
          onClick={(event) => handlePieceChange(event)}
          className={
            piece.string === "king"
              ? "inactiveLink doctorFont"
              : "activeLink doctorFont"
          }
        >
          ki.
        </p>
      </div>
      {piece.comp}
    </div>
  );
}

export default Pieces;
