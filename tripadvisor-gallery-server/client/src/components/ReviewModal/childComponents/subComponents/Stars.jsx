import React from 'react';
import PropTypes from 'prop-types';

import ReviewCSS from '../../../../style/Review.css';

const Stars = ({ stars }) => {
  // Create an array of stars
  const starsArr = [];
  for (let i = 0; i < 5; i += 1) {
    starsArr.push('star'); // The content of this array is not important, but allows the render func to map
  }

  const positiveStar = `${ReviewCSS.star} ${ReviewCSS.positiveStar}`; // CSS style for a positive star
  const neutralStar = `${ReviewCSS.star}`; // CSS style for a neutral star

  return (
    <div className={ReviewCSS.starsContainer}>
      {starsArr.map((star, index) => (
        // The className ternary will determine if star should be displayed as positive / neutral
        // eslint-disable-next-line react/no-array-index-key
        <div key={star + index} className={index + 1 <= stars ? positiveStar : neutralStar} />
      ))}
    </div>
  );
};

Stars.defaultProps = {
  stars: 0,
};

Stars.propTypes = {
  stars: PropTypes.number,
};

export default Stars;