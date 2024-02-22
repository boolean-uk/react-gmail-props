import React from "react";
import "../styles/EmailDetail.css";

export default function EmailDetail({ email, onClick }) {
  return (
    <div className="email-detail">
      <button className="back-btn" onClick={onClick}></button>
      <div className="info">
        <h1>{email.title}</h1>
        <h2>{email.sender}</h2>
      </div>
    </div>
  );
}
