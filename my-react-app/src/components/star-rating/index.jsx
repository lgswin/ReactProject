import { FaStar } from "react-icons/fa";
import { useState } from "react";
import "./styles.css";

export default function StarRating({ noOfStars }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex); // it sets the rating when the mouse click with its index
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex); // it sets the hover position when the mouse moves many times with its index
  }

  function handleMouseLeave() {
    setHover(rating); // when the mouse leaves from stars, it update its rating position to paint start only for rated earlier.
  }

  return (
    <div className="star-rating">
      {/* create Array of length noOfStars */}
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        // it repaints the star looping the number of stars
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
}
