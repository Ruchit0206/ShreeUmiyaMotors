import React, { useState, useRef } from "react";
import "./BookTestDrive.css";
import emailjs from "@emailjs/browser";

export default function BookTestDrive() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    vehicle: "",
    date: "",
    time: "",
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
    emailjs.sendForm(
      "service_5t95r6l",
      "template_mlz4r1u",
      formRef.current,
      "2HpiL-e-iajvluOnp"
    ).then(
      (result) => {
        console.log("Admin email sent", result.text);
      },
      (error) => {
        console.log("Admin email error", error.text);
      }
    );

    // User confirmation email
    emailjs.sendForm(
      "service_5t95r6l",
      "template_i0nhb73",
      formRef.current,
      "2HpiL-e-iajvluOnp"
    ).then(
      (result) => {
        console.log("User confirmation sent", result.text);
        setSubmitted(true);
      },
      (error) => {
        console.log("User email error", error.text);
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
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            pattern="[0-9]{10}"
            title="Enter 10-digit number"
            required
            value={formData.phone}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <select
            name="vehicle"
            required
            value={formData.vehicle}
            onChange={handleChange}
          >
            <option value="">Select Vehicle</option>
            <option value="Baxy Cargo">Baxy Cargo</option>
            <option value="Baxy Passenger">Baxy Passenger</option>
            <option value="Electric Auto">Electric Auto</option>
            <option value="CNG Auto">CNG Auto</option>
          </select>

          <input
            type="date"
            name="date"
            required
            value={formData.date}
            onChange={handleChange}
          />

          <input
            type="time"
            name="time"
            required
            value={formData.time}
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}
