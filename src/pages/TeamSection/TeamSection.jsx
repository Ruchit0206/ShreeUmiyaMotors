import React from 'react';
import './TeamSection.css';
import img1 from './img1.png'; // Make sure this image exists in the same folder

const teamMembers = [
  {
    name: "Mark Smith",
    title: "Sales Director",
    img: img1,
    desc: "Tony leads the creative vision for the dealership.",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Mich Stark",
    title: "Operations Manager",
    img: img1,
    desc: "Sarah makes sure everything runs smoothly.",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Sarah Johnson",
    title: "Sales Manager",
    img: img1,
    desc: "John is the mastermind behind our custom vehicle selections.",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Emily Joe",
    title: "Customer Relations",
    img: img1,
    desc: "Emily ensures that each customer has a delightful experience.",
    linkedin: "#",
    twitter: "#"
  }
];

const TeamSection = () => {
  return (
    <div className="team-wrapper">
      <h2 className="team-title">Meet the Team</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.img} alt={member.name} />
            <h4>{member.name}, <span>{member.title}</span></h4>
            <p>{member.desc}</p>
            <div className="social-icons">
              <a href={member.linkedin}><i className="fab fa-linkedin"></i></a>
              <a href={member.twitter}><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
