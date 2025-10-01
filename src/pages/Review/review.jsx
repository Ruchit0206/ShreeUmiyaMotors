import React from "react";
import "./ReviewsSection.css";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Ruchit Patel",
    rating: 5,
    text: "Excellent service and very friendly staff! The team at Shree Umiya Motors is professional and supportive.",
    date: "2025-09-15",
  },
  {
    name: "Anita Sharma",
    rating: 4,
    text: "Good experience overall. Highly recommend if you’re looking for quality three-wheelers.",
    date: "2025-09-10",
  },
  {
    name: "Rahul Mehta",
    rating: 5,
    text: "Very satisfied with the product quality and support. Great showroom experience!",
    date: "2025-09-05",
  },
];

const ReviewSection = () => {
  return (
    <section className="review-section">
      <h2 className="review-title">What Our Customers Say</h2>
      <div className="review-cards">
        {reviews.map((review, idx) => (
          <div className="review-card" key={idx}>
            <div className="review-header">
              <h3>{review.name}</h3>
              <div className="review-rating">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="star" />
                ))}
              </div>
            </div>
            <p className="review-text">{review.text}</p>
            <p className="review-date">{new Date(review.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
