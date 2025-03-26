import "../App.css";
import { Link } from "react-router-dom";

export default function DisposePage() {

  return (
    <div className="dispose-container">
      <div className="leaf-icon">🍃</div>
      <h1>Dispose Your Item</h1>
      <p>Help keep the environment clean by disposing of waste responsibly.</p>
      <Link to='/dispose' className="dispose-button">
        Dispose Item
      </Link>
    </div>
  );
}