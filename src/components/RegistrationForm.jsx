import React, { useState } from "react";

export default function RegistrationForm() {
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    city: "",
    address: "",
    password: "",
  };

  const [formData, setFormdata] = useState(initialFormData);
  const [error, setError] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormdata({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.age ||
      !formData.gender ||
      !formData.city ||
      !formData.address ||
      !formData.password
    ) {
      setError("Please fill in all the required fields.");
      return;
    }

    setError("");

    // Store the submitted data
    setSubmittedData(formData);
  };

  const handleReset = () => {
    setFormdata(initialFormData);
    setSubmittedData(null);
    setError("");
  };

  return (
    <div className="form-container">
      <div className="form-card">

        <div className="form-header">
          <h1>Registration Form</h1>
          <p>Please enter your details below</p>
        </div>

        <form onSubmit={handleSubmit}>

          {error && <div className="error">{error}</div>}

          <div className="form-grid">

            <div className="form-group">
              <label>Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label>Phone *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </div>

            <div className="form-group">
              <label>Age *</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter your age"
              />
            </div>

            <div className="form-group">
              <label>Gender *</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>City *</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter your city"
              />
            </div>

            <div className="form-group full-width">
              <label>Address *</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                rows="4"
              ></textarea>
            </div>

            <div className="form-group full-width">
              <label>Password *</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
            </div>

          </div>

          <div className="button-container">

            <button type="submit" className="submit-button">
              Submit
            </button>

            <button
              type="button"
              className="reset-button"
              onClick={handleReset}
            >
              Reset
            </button>

          </div>

        </form>
      </div>

      {/* Submitted Data */}

      {submittedData && (
        <div className="submitted-card">

          <div className="submitted-header">
            <div>
              <h2>Submitted Details</h2>
              <p>Your submitted information is shown below</p>
            </div>

            <span className="success-badge">
              ✓ Submitted
            </span>
          </div>

          <div className="submitted-grid">

            <div className="data-item">
              <span>Name</span>
              <strong>{submittedData.name}</strong>
            </div>

            <div className="data-item">
              <span>Email</span>
              <strong>{submittedData.email}</strong>
            </div>

            <div className="data-item">
              <span>Phone</span>
              <strong>{submittedData.phone}</strong>
            </div>

            <div className="data-item">
              <span>Age</span>
              <strong>{submittedData.age}</strong>
            </div>

            <div className="data-item">
              <span>Gender</span>
              <strong>{submittedData.gender}</strong>
            </div>

            <div className="data-item">
              <span>City</span>
              <strong>{submittedData.city}</strong>
            </div>

            <div className="data-item full-width">
              <span>Address</span>
              <strong>{submittedData.address}</strong>
            </div>

            <div className="data-item full-width">
              <span>Password</span>
              <strong>••••••••</strong>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}