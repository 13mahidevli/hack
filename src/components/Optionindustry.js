import { Link } from "react-router-dom";
import "../App.css";

export default function SelectionPage() {
  return (
    <div className="selection-container">
      <h1 className="title">Who you want to choose</h1>
      <div className="button-group">
        <Link to="/carbonfootprint" className="option-button user">Check caron foot print</Link>
        <Link to="/req" className="option-button personalist">Enter requirements</Link>
      </div>
    </div>
  );
}