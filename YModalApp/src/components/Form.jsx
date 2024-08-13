import React, { useState } from "react";
import "./Form.css";
import Input from "./Input";

const Form = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  const emailValidation = (email) => {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(email);
  };

  const dobValidation = (date) => {
    const today = new Date();
    const dateToCheck = new Date(date);
    if (dateToCheck > today) {
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.dob === "") return;
    if (!emailValidation(formData.email)) {
      alert("Check email validation");
    } else if (formData.phone?.length !== 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
    } else if (!dobValidation(formData.dob)) {
      alert("Invalid date od birth. Date of birth cannot be in the future.");
    } else {
      setFormData({ username: "", email: "", phone: "", dob: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Fill Details</h1>
      <div className="wrapper">
        <Input
          type="text"
          label="Username"
          id="username"
          required
          value={formData.username}
          handleChange={(e) => {
            setFormData({ ...formData, username: e.target.value });
          }}
        />
      </div>
      <div className="wrapper">
        <Input
          type="email"
          label="Email Address"
          id="email"
          required
          value={formData.email}
          handleChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
        />
      </div>
      <div className="wrapper">
        <Input
          type="text"
          label="Phone Number"
          id="phone"
          required
          value={formData.phone}
          handleChange={(e) => {
            setFormData({ ...formData, phone: e.target.value });
          }}
        />
      </div>
      <div className="wrapper">
        <Input
          type="date"
          id="dob"
          placeholder="dd-mm-yy"
          label="Date of Birth"
          required
          value={formData.dob}
          handleChange={(e) => {
            setFormData({ ...formData, dob: e.target.value });
          }}
        />
      </div>
      <button className="submit-button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
