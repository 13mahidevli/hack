import React, { useState } from "react";
import "../App.css"; // Import the CSS file
import { Link } from "react-router-dom";

export default function MaterialInputPage() {
  const [formData, setFormData] = useState({
    amount: "",
    plastic: "",
    metal: "",
    electronics: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Data Submitted Successfully!");
  };

  return (
    <div className="material-container">
      <h1 className="material-heading">Enter Waste Details</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="productpic"><img src="https://geneticliteracyproject.org/wp-content/uploads/elementor/thumbs/megantheninja-environmentally-safe-plastic-b-a-fea-b-a-bd-e-f-e1714428032773-qnfy9qjfqr9ss4ch8zh2yamxud5bcuy3jaeq2u5dw2.png" alt="plastic" /></div>
        <label>Bottle(large) :</label>
        <h7>Rs.10 per 20pc</h7>
        <input type="number" name="amount" value={formData.amount} onChange={handleChange} required />
        
        <div className="productpic"><img src="https://team-infinity-web.netlify.app/imgs/metal.jpg" alt="metal" /></div>
        <label>Metal:</label>
        <h7>Rs.10/kg</h7>
        <input type="number" name="amount" value={formData.amount} onChange={handleChange} required />
        
        <div className="productpic"><img src="https://team-infinity-web.netlify.app/imgs/newspaper.jpg" alt="paper" /></div>
        <label>Paper (Copies) :</label>
        <h7>Rs.10 per 10kg</h7>
        <input type="number" name="amount" value={formData.amount} onChange={handleChange} required />

        <div className="productpic"><img src="https://team-infinity-web.netlify.app/imgs/bulbs.jpg" alt="Electronics" /></div>
        <label>Electronics :</label>
        <h7>Rs.10 per pc</h7>
        <input type="number" name="amount" value={formData.amount} onChange={handleChange} required />

        <Link className="cardbutton" to='/submitratecard' type="submit">Submit</Link>
      </form>
    </div>
  );
}