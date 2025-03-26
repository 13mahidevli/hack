import { Link } from "react-router-dom";
import "../App.css";

export default function SelectionPage() {
  return (
    <div className="selection-container">
      <h1 className="title">Who are you?</h1>
      <div className="button-group">
        <Link to="/user" className="option-button user">👤 Local Resident</Link>
        <Link to="/industrialist" className="option-button personalist">🏆 Industrialist</Link>
      </div>
    </div>
  );
}