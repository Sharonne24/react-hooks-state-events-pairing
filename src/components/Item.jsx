import React from 'react'
import { useState } from 'react';

function Item({ video, comments }) {
    const [upvotes, setUpvotes] = useState(video.upvotes);
    const [downvotes, setDownvotes] = useState(video.downvotes);
    const [showComments, setShowComments] = useState(true);
  
    function handleUpvote() {
  setUpvotes(prevLikes=>prevLikes + 1);
}

function handleDownvote() {
  setDownvotes(prevDislikes=>prevDislikes + 1);
}

function toggleComments() {
  setShowComments(!showComments);
}

  return (
    <div>
         <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
       <h2>{video.title}</h2>
      <p>{video.views} views | Uploaded {video.createdAt}</p>
      <button onClick={handleUpvote}>{upvotes}👍</button>
      <button onClick={handleDownvote}>{downvotes}👎</button>

      <div>
      <button onClick={toggleComments}>
        {showComments ? 'Hide Comments' : 'Show Comments'}
      </button>
      </div>

      {showComments &&
        video.comments.map((comment) => (
          <div key={comment.id}>
            <h3>{comment.user}</h3>
            <p>{comment.comment}</p>
          </div>
        ))}
    </div>
  );
}
export default Item