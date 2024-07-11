import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: null
      }));
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.mobile) {
      errors.mobile = "Mobile is required";
    } else if (formData.mobile.length > 12 || formData.mobile.length < 10) {
      errors.mobile = "Invalid mobile number";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully");
      console.log("Form Data:", formData);
      setFormData({
        name: "",
        mobile: "",
        email: "",
        password: "",
      });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="mainForm">
      <p className="heading">Forms and Controlled Components</p>
      <form onSubmit={handleSubmit} noValidate>
        <div className="fields">
          <label>Name</label>
          <br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <br />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="fields">
          <label>Mobile</label>
          <br />
          <input
            type="number"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
          />
          <br /> {errors.mobile && <span className="error">{errors.mobile}</span>}
        </div>

        <div className="fields">
          <label>Email</label>
          <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <br />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="fields">
          <label>Password</label>
          <br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <br />
        <button type="submit" className="subbtn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
