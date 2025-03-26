import React, { useState } from "react";
import "../index.css"; // Import CSS file
import { Link } from "react-router-dom";

export default function IndustryRequirement() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = ["Plastic", "Metal", "Electronics", "Toys", "Paper", "Glass",'other'];

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Selected Requirements: ${selectedOptions.join(", ")}`);
  };

  return (
    <div className="industry-container">
      <h1 className="industry-heading">Select Your Waste Material Requirements</h1>
      
      <form onSubmit={handleSubmit}>
        {options.map((option, index) => (
          <label key={index} className="checkbox-label">
            <input
              type="checkbox"
              value={option}
              checked={selectedOptions.includes(option)}
              onChange={() => handleCheckboxChange(option)}
            />
            {option}
          </label>
        ))}
        
        <Link to='/submitreq' className="submitreq" type="submit">Submit</Link>
      </form>
    </div>
  );
}