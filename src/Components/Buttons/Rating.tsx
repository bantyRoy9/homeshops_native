import React, { useState } from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

interface RatingProps {
  totalStars?: number; // Total stars (default: 5)
  initialRating?: number; // Initial rating value
  onChange?: (rating: number) => void; // Callback for rating change
  allowHalf?: boolean; // Enable half-star ratings
  readOnly?: boolean; // Disable user interaction
  size?: number; // Star size (default: 24)
  activeColor?: string; // Filled star color
  inactiveColor?: string; // Empty star color
}

const Rating: React.FC<RatingProps> = ({
  totalStars = 5,
  initialRating = 0,
  onChange,
  allowHalf = true,
  readOnly = false,
  size = 24,
  activeColor = "#FFD700",
  inactiveColor = "#CCCCCC",
}) => {
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [selectedRating, setSelectedRating] = useState(initialRating);

  const handleClick = (rating: number) => {
    if (readOnly) return;
    setSelectedRating(rating);
    onChange && onChange(rating);
  };

  const handleMouseMove = (index: number, event: React.MouseEvent) => {
    if (!allowHalf) return setHoverRating(index + 1);

    const { left, width } = event.currentTarget.getBoundingClientRect();
    const xPosition = event.clientX - left;
    const isHalf = xPosition < width / 2;
    setHoverRating(isHalf ? index + 0.5 : index + 1);
  };

  const handleMouseLeave = () => setHoverRating(null);

  return (
    <div className="flex space-x-1">
      {Array.from({ length: totalStars }, (_, index) => {
        const ratingValue = index + 1;
        const displayRating = hoverRating ?? selectedRating;
        const isHalfStar = allowHalf && displayRating > index && displayRating < index + 1;

        return (
          <span
            key={index}
            className={`cursor-pointer ${readOnly ? "cursor-default" : ""}`}
            onClick={() => handleClick(ratingValue)}
            onMouseMove={(event) => handleMouseMove(index, event)}
            onMouseLeave={handleMouseLeave}
            style={{ fontSize: size }}
          >
            {isHalfStar ? (
              <FaStarHalfAlt color={activeColor} />
            ) : displayRating > index ? (
              <FaStar color={activeColor} />
            ) : (
              <FaRegStar color={inactiveColor} />
            )}
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
