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
    <div className="page">
      <h2>@{post.author?.username}</h2>
      <p>{post.content}</p>
      <small>{new Date(post.createdAt).toLocaleString()}</small>

      <hr />
      <CommentList postId={id} />
    </div>
  );
};

export default PostPage;
