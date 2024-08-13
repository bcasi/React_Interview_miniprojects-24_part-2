import React from "react";
import "./Input.css";

const Input = ({ type, label, placeholder = "", id, value, handleChange }) => {
  return (
    <div className="input_container">
      <label>{label}:</label>
      <input
        value={value}
        onChange={handleChange}
        id={id}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
