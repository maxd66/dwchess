import "./App.css";
import { useState } from "react";
import Main from "./pages/Main";
import Pieces from "./pages/Pieces";

function App() {
  const [page, setPage] = useState("main");

  const handlePageChange = (e) => {
    e.preventDefault();
    const selectedPage = e.target.id;
    if (selectedPage === page) {
      console.log("already here");
      return;
    }
    setPage(selectedPage);
    console.log("page changing to " + selectedPage);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Chess <span className="doctorFont">DW</span> Set
        </h1>
        <nav>
          <h2
            id="main"
            className={page === "main" ? "inactiveLink" : "pageButton"}
            onClick={(event) => {
              handlePageChange(event);
            }}
          >
            Home
          </h2>
          <h2
            id="pieces"
            className={page === "pieces" ? "inactiveLink" : "pageButton"}
            onClick={(event) => {
              handlePageChange(event);
            }}
          >
            Pieces
          </h2>
        </nav>
      </header>
      {page === "main" ? <Main /> : <Pieces />}
    </div>
  );
}

export default App;
