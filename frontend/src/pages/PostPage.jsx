import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import CommentList from "../components/CommentList";

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    api.get(`/posts/${id}`).then((res) => setPost(res.data));
  }, [id]);

  if (!post) return <p>Carregando...</p>;

  return (
    <div className="page" style={{ padding: "20px", color: "#d9ffd9" }}>
      <h2>@{post.author?.username}</h2>
      <p>{post.content}</p>
      <small>{new Date(post.createdAt).toLocaleString()}</small>
      <hr style={{ margin: "20px 0", borderColor: "#5d00ffff" }} />
      <CommentList postId={id} />
    </div>
  );
};

export default PostPage;
