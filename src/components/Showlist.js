import { Link } from "react-router-dom";
import { useState } from "react";
import "../App.css";

export default function PincodePage() {
  const [pincode, setPincode] = useState("");

  const handleChange = (e) => {
    setPincode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pincode.length === 6) {
      alert(`Pincode ${pincode} saved successfully!`);
    } else {
      alert("Please enter a valid 6-digit pincode.");
    }
  };

  return (
    <div className="pincode-container">
      <h1>📍 Enter Your Pincode To Find Nearest Industries</h1>
      <p>Provide your pincode to check available services.</p>
      <form onSubmit={handleSubmit} className="pincode-form">
        <input
          type="text"
          name="pincode"
          placeholder="Enter 6-digit Pincode"
          value='244713'
          onChange={handleChange}
          maxLength="6"
          required
        />
      </form>
      <div className="bg-yellow-600  mt-2">
        <ul>
          <Link to='/industry' className="industrylist">industry limited "kashipur"</Link>
          <Link to='/industry' className="industrylist">Surya limited "pretam road"</Link>
          <Link to='/industry' className="industrylist">Amjua limited "nagar van"</Link>
          <Link to='/industry' className="industrylist">Tata Limited "kaashipur"</Link>
          <Link to='/industry' className="industrylist">Salt limited "ramnagar"</Link>
        </ul>
      </div>
    </div>
  );
}