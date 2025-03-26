import React, { useState } from "react";
import "../index.css"; // Import CSS file
import { Link } from "react-router-dom";

export default function IndustryForm() {
  const [formData, setFormData] = useState({
    electricity: "",
    waterSupply: "",
    fuelType: "",
    fuelAmount: "",
    wasteGenerated: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted! ✅\n" + JSON.stringify(formData, null, 2));
  };

  return (
    <div className="industry-form-container">
      <h1 className="industry-form-heading">Industry Resource Requirement</h1>
      <form onSubmit={handleSubmit}>

        <label>
          Electricity Requirement (kWh/month):
          <input type="number" name="electricity" value={formData.electricity} onChange={handleChange} required />
        </label>

        <label>
          Water Supply (liters/month):
          <input type="number" name="waterSupply" value={formData.waterSupply} onChange={handleChange} required />
        </label>

        <label>
          Fuel Type:
          <select name="fuelType" value={formData.fuelType} onChange={handleChange} required>
            <option value="">Select Fuel</option>
            <option value="Diesel">Diesel</option>
            <option value="Petrol">Petrol</option>
            <option value="Natural Gas">Natural Gas</option>
            <option value="Coal">Coal</option>
          </select>
        </label>

        <label>
          Amount of Fuel Used (liters/month):
          <input type="number" name="fuelAmount" value={formData.fuelAmount} onChange={handleChange} required />
        </label>

        <label>
          Waste Generated (kg/month):
          <input type="number" name="wasteGenerated" value={formData.wasteGenerated} onChange={handleChange} required />
        </label>

        <Link to='graph' type="submit">Submit</Link>
      </form>
    </div>
  );
}