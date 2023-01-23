import { useState } from "react";

function Pieces() {
  const [piece, setPiece] = useState("pawn");

  const handlePieceChange = (e) => {
    e.preventDefault();
    const pieceSelected = e.target.id;
    if (pieceSelected !== piece) {
      setPiece(pieceSelected);
    } else {
      return;
    }
  };

  return (
    <div className="bodySection">
      <p>Pieces</p>
      <p>{piece}</p>
    </div>
  );
}

export default Pieces;
