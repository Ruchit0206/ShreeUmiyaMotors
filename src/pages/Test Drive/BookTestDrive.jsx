import React, { useState, useRef } from "react";
import "./BookTestDrive.css";
import emailjs from "@emailjs/browser";

export default function BookTestDrive() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    vehicle: "",
    date: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Admin email
    emailjs
      .sendForm(
        "service_5t95r6l",
        "template_mlz4r1u",
        formRef.current,
        "2HpiL-e-iajvluOnp"
      )
      .then(
        (result) => {
          console.log("Admin email sent", result.text);
          setSubmitted(true); // ✅ Show success message

          // Send user confirmation (non-blocking)
          emailjs
            .sendForm(
              "service_5t95r6l",
              "template_i0nhb73",
              formRef.current,
              "2HpiL-e-iajvluOnp"
            )
            .then((res) => {
              console.log("User confirmation sent", res.text);
            })
            .catch((err) => {
              console.log("User confirmation error", err.text);
            });
        },
        (error) => {
          console.log("Admin email error", error.text);
          alert("❌ Failed to submit. Please try again.");
        }
      );
  };

  return (
    <div className="test-drive-container">
      <h2>Book a Test Drive</h2>
      {submitted ? (
        <p className="success-message">✅ Thank you! We'll contact you shortly.</p>
      ) : (
        <form className="test-drive-form" ref={formRef} onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            pattern="[0-9]{10}"
            title="Enter 10-digit number"
            required
            value={formData.phone}
            onChange={handleChange}
          />

          <label htmlFor="vehicle">Select Vehicle</label>
          <select
            name="vehicle"
            id="vehicle"
            required
            value={formData.vehicle}
            onChange={handleChange}
          >
            <option value="">-- Select Vehicle --</option>
            <option value="Baxy Cargo">Baxy Cargo</option>
            <option value="Baxy Passenger">Baxy Passenger</option>
            <option value="Electric Auto">Electric Auto</option>
            <option value="CNG Auto">CNG Auto</option>
          </select>

          <label htmlFor="date">Preferred Date</label>
          <input
            type="date"
            name="date"
            id="date"
            required
            value={formData.date}
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}
