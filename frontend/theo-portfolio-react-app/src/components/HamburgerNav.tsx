import { useState } from "react";
import { Link } from "react-router-dom";
import "./HamburgerNav.css";

export default function HamburgerNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="hamburger-header">
      <div className="hamburger-container">
        <Link to="/" className="logo">
          Theodore Babbit
        </Link>
        <button className="hamburger-btn" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {open && (
        <nav className="hamburger-menu">
          <Link to="/" onClick={() => setOpen(false)} className="menu-link">
            Home
          </Link>
          <Link to="/about" onClick={() => setOpen(false)} className="menu-link">
            About
          </Link>
          <Link to="/stories" onClick={() => setOpen(false)} className="menu-link">
            Stories
          </Link>
          <Link to="/photos" onClick={() => setOpen(false)} className="menu-link">
            Photos
          </Link>

        </nav>
      )}
    </header>
  );
}
{/* <Link to="/contact" onClick={() => setOpen(false)} className="menu-link">
Contact Me
</Link> */}