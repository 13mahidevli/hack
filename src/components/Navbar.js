//type rfc
import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; // Import the CSS file
import { useState } from "react";

export default function Navbar() {
  const [bar, setBar] = useState("");
  return (
    <nav className="navbar">
      <div className="logo">🍃 Dispose</div>
      <ul className="nav-links">
        <li onClick={() => setBar("home")} className={bar==='home'? 'linkbar':''}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={() => setBar("dispose")} className={bar==='dispose'? 'linkbar':''}>
          <Link to="/dispose">Dispose</Link>
        </li>
        <li onClick={() => setBar("notification")} className={bar==='notification'? 'linkbar':''}>
          <Link to="/notification">Notifications</Link>
        </li>
      </ul>
    </nav>
  );
}
