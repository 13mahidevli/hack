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
      <h1 className="material-heading">Set prices</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="productpic"><img src="https://geneticliteracyproject.org/wp-content/uploads/elementor/thumbs/megantheninja-environmentally-safe-plastic-b-a-fea-b-a-bd-e-f-e1714428032773-qnfy9qjfqr9ss4ch8zh2yamxud5bcuy3jaeq2u5dw2.png" alt="plastic" /></div>
        <input type="number" name="amount" value={formData.amount} placeholder="enter name" onChange={handleChange} required />
        <input type="number" name="amount" value={formData.amount} placeholder="enter price" onChange={handleChange} required />
        <input type="number" name="amount" value={formData.amount} placeholder="enter price per piece or kg" onChange={handleChange} required />

        <div className="productpic"><img src="https://team-infinity-web.netlify.app/imgs/metal.jpg" alt="metal" /></div>
        <label>Metal:</label>
        <input type="number" name="amount" value={formData.amount} placeholder="enter name" onChange={handleChange} required />
        <input type="number" name="amount" value={formData.amount} placeholder="enter price" onChange={handleChange} required />
        <input type="number" name="amount" value={formData.amount} placeholder="enter price per piece or kg" onChange={handleChange} required />

        <div className="productpic"><img src="https://team-infinity-web.netlify.app/imgs/newspaper.jpg" alt="paper" /></div>
        <label>Paper (Copies) :</label>
        <input type="number" name="amount" value={formData.amount} placeholder="enter name" onChange={handleChange} required />
        <input type="number" name="amount" value={formData.amount} placeholder="enter price" onChange={handleChange} required />
        <input type="number" name="amount" value={formData.amount} placeholder="enter price per piece or kg" onChange={handleChange} required />

        <div className="productpic"><img src="https://team-infinity-web.netlify.app/imgs/bulbs.jpg" alt="Electronics" /></div>
        <label>Electronics :</label>
        <input type="number" name="amount" value={formData.amount} placeholder="enter name" onChange={handleChange} required />
        <input type="number" name="amount" value={formData.amount} placeholder="enter price" onChange={handleChange} required />
        <input type="number" name="amount" value={formData.amount} placeholder="enter price per piece or kg" onChange={handleChange} required />

        <Link className="cardbutton" to='/' type="submit">Submit</Link>
      </form>
    </div>
  );
}