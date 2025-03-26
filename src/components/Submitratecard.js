import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"; // Import CSS file

export default function OrderPlaced() {
  const navigate = useNavigate();
  useEffect(() => {
    alert("✅ Item disposed Successfully! wait for our person to pick the items");
  }, []);
  return (
    <div className="order-container">
      <h1 className="order-heading">✅  Item disposed Successfully!</h1>
      <div className="leaf-icon">🍃</div>
      <p className="order-message"></p>
      <button className="order-button" onClick={() => navigate("/submit-location")}>
        Go to Home
      </button>
    </div>
  );
}