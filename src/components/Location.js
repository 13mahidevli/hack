import { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function LocationPage() {
  const [location, setLocation] = useState({
    city: "",
    state: "",
    zip: "",
  });

  const handleChange = (e) => {
    setLocation({ ...location, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Location Details:", location);
    alert("Location saved successfully!");
  };

  return (
    <div className="location-container">
      <h1>📍 Enter Your Location</h1>
      <form onSubmit={handleSubmit} className="location-form">
        <input
          type="text"
          name="city"
          placeholder="City"
          value={location.city}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={location.state}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="zip"
          placeholder="Zip Code"
          value={location.zip}
          onChange={handleChange}
          required
        />
        <Link to='/submit-location' type="submit" className="location-button">Save Location</Link>
      </form>
    </div>
  );
}