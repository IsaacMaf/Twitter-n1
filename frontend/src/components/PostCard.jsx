import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div
      style={{
        backgroundColor: "#0f0f0f",
        color: "#e4c4ffff",
        padding: "20px",
        margin: "15px 0",
        borderRadius: "10px",
        boxShadow: "0 0 8px rgba(142, 67, 255, 0.15)",
      }}
    >
      <h3>@{post.author?.username}</h3>
      <p>{post.content}</p>
      <small>{new Date(post.createdAt).toLocaleString()}</small>

      <div style={{ marginTop: "10px" }}>
        <Link
          to={`/posts/${post._id}`}
          style={{
            textDecoration: "none",
            color: "#000",
            backgroundColor: "#4800ffff",
            padding: "8px 15px",
            borderRadius: "5px",
            fontWeight: "bold",
            transition: "0.3s",
          }}
        >
          Ver Post
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
