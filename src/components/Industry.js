import React from "react";
import '../App.css'; // Importing the CSS file
import { Link } from "react-router-dom";

export default function IndustryPage() {
  const industry = {
    name: "Surya Limited",
    address: "123 Green Street, Industrial Zone, City",
    location: "https://maps.google.com?q=123+Green+Street+City",
    image: "https://th.bing.com/th/id/OIP.MtReTU3CEtiyPhz5uR4jBgHaFh?rs=1&pid=ImgDetMain", // Replace with actual image
    rateCard: "/rate-card.pdf", // Replace with actual rate card file
  };

  return (
    <div className="industry-container">
      <h1 className="industry-heading">{industry.name}</h1>
      
      <img src={industry.image} alt="Industry" className="industry-image" />

      <p className="industry-address"><strong>📍 Address:</strong> {industry.address}</p>
      
      <a href={industry.location} target="_blank" rel="noopener noreferrer" className="industry-link">
        View Location on Map
      </a>

      <Link to='/ratecard' className="industry-button">
        📄 View Rate Card
      </Link>
    </div>
  );
}