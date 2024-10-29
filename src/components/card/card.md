import { useState } from "react";
import { RiHeartsLine } from "react-icons/ri";
import './Card.css';
import Blog from "../pages/Blog";

const Card = () => {
  const [noOfLikes, setLikeCount] = useState(0); // Initialize like count
  const [isLiked, setIsLiked] = useState(false);  // Track if icon is clicked

  // Function to handle click on like icon
  const handleLikeClick = () => {
    setLikeCount(totalCount => totalCount + 1); // Increment like count by 1
    setIsLiked(!isLiked);  // Toggle the 'liked' state
  };

  return (
    <div>
    <div className='card-wrap'>
      <div
        className='like-icon'
        onClick={handleLikeClick}
        style={{ color: isLiked ? 'blue' : '#ccc' }}  // Change color when liked
      >
        <span className="like-count">{noOfLikes}</span> {/* Display updated like count */}
        <RiHeartsLine className={isLiked ? 'liked-icon' : ''} />
      </div>
      <img
        src='https://res.cloudinary.com/dqbbm0guw/image/upload/v1727086098/image-brownie-tablet_kcrkjd.jpg'
        alt='Image'
      />
      <h2>Title</h2>
      <p>Description</p>
      <button>Read More</button>
    </div>
    <div className="about">
    <Blog />
    </div>
    </div>
  );
};

export default Card;
