import React from "react";

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <p><strong>@{post.author?.username}</strong></p>
      <p>{post.content}</p>
      <small>{new Date(post.createdAt).toLocaleString()}</small>
    </div>
  );
};

export default PostCard;
