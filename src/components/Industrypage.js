import { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Signed Up:", formData);
    alert("Sign-up successful!");
  };

  return (
    <div className="signup-container">
      <h1>📝 Sign Up</h1>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="text"
          name="name"
          placeholder="Industry name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email of industry"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="gender"
          placeholder="pin code"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
         <input
          type="password"
          name="password"
          placeholder="Industry about"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Link to="/choose" type="submit" className="signup-button">
          Sign Up
        </Link>
      </form>
    </div>
  );
}
