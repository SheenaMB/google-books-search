import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Book Search 
      </a>
      <a className="navbar-brand" href="/">
        Search 
      </a>
      <a className="navbar-brand" href="/SavedBooks">
        Saved Books
      </a>
    </nav>
  );
}

export default Nav;
