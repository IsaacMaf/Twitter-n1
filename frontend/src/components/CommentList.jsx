import React, { useEffect, useState } from "react";
import api from "../services/api";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    api.get(`/posts/${postId}/comments`).then((res) => setComments(res.data));
  }, [postId]);

  return (
    <div>
      <h4>Comentários:</h4>
      {comments.length === 0 ? (
        <p>Sem comentários ainda.</p>
      ) : (
        comments.map((comment) => (
          <div key={comment._id} className="comment">
            <strong>@{comment.author?.username}:</strong> {comment.text}
          </div>
        ))
      )}
    </div>
  );
};

export default CommentList;
