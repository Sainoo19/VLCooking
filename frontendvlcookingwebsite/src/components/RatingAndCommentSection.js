import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const RatingAndCommentSection = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [comments, setComments] = useState([
    { id: 1, author: "User 1", content: "Comment 1", rating: 4 },
    { id: 2, author: "User 2", content: "Comment 2", rating: 5 },
  ]);
  const [commentText, setCommentText] = useState("");

  const handleRatingClick = (currentRating) => {
    setRating(currentRating);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    if (rating && commentText) {
      const newComment = {
        id: comments.length + 1,
        author: "New User",
        content: commentText,
        rating: rating,
      };
      setComments([newComment, ...comments]);
      console.log(newComment);
      console.log(comments);

      setCommentText(""); // Clear textarea after submit
      setRating(null); // Reset rating after submit
    }
  };

  return (
    <div className="w-[1750px] font-medium py-4 ml-0 px-4 pl-12 mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Rate and Comment</h2>
      {/* Star rating */}
      <div className="flex mb-4">
        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1;
          return (
            <label key={index} className="flex items-center mr-4">
              <input
                type="radio"
                name="rating"
                className="hidden"
                value={currentRating}
                onClick={() => handleRatingClick(currentRating)}
              />
              <FaStar
                size={30}
                className="cursor-pointer"
                color={
                  currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                }
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </div>

      {/* Comment section */}
      <form onSubmit={handleCommentSubmit} className="mb-4">
        <textarea
          rows="3"
          className="w-full p-2 border border-gray-300 rounded-md mb-2"
          placeholder="Write your comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Submit Comment
        </button>
      </form>

      {/* Display comments */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-white p-4 shadow rounded-lg">
            <div className="flex items-center mb-2">
              {[...Array(5)].map((star, index) => (
                <FaStar
                  key={index}
                  size={20}
                  color={index < comment.rating ? "#ffc107" : "#e4e5e9"}
                />
              ))}
            </div>
            <h3 className="font-semibold">{comment.author}</h3>
            <p>{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingAndCommentSection;
