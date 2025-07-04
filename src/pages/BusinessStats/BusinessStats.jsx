import React from "react";
import { FaUsers, FaTruckMoving, FaHandshake, FaCalendarCheck } from "react-icons/fa";
import "./BusinessStats.css";

const stats = [
  {
    icon: <FaCalendarCheck />,
    value: "2+",
    label: "Years Experinece",
  },
  {
    icon: <FaUsers />,
    value: "200+",
    label: "Happy Customers",
  },
  {
    icon: <FaTruckMoving />,
    value: "250+",
    label: "Vehicles Delivered",
  },
  {
    icon: <FaHandshake />,
    value: "10+",
    label: "Team Members",
  },
];

const BusinessStats = () => {
  return (
    <section className="business-stats-section">
      <div className="stats-grid">
        {stats.map((item, index) => (
          <div className="stat-box" key={index}>
            <div className="stat-icon">{item.icon}</div>
            <div className="stat-number">{item.value}</div>
            <div className="stat-label">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessStats;
