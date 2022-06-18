import React from "react";
import "./Card.css";

function Card({ post }) {
  return <div className="card">{post.title}</div>;
}

export default Card;
