/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react';
import ReviewSliderCSS from '../../../style/ReviewSlider.css';
import Stars from './subComponents/Stars';
import helpers from '../Helpers';

// AWS links' data
import awsS3Links from '../../../../../AmazonS3Links';
// Destructure baseurl from AWS links
const { crossIcon } = awsS3Links;


const { setUsernameAndLetter, setDate } = helpers;

const ReviewSlider = (props) => {
  const { photos, activePhotoIdx, hideReviewSlider } = props;
  const activePhoto = photos[activePhotoIdx];

  const {
    date_created, user_contributions, review_stars, review_title, review_description,
  } = activePhoto;

  const [user, firstLetter] = setUsernameAndLetter({ photos, activePhotoIdx });
  const date = setDate(date_created);

  return (
    <div className={ReviewSliderCSS.container}>
      <div className={ReviewSliderCSS.headerContainer}>
        <div className={ReviewSliderCSS.headerContainerLeft}>
          <div className={ReviewSliderCSS.emblem}>
            <span className={ReviewSliderCSS.emblemLetter}>{firstLetter}</span>
          </div>
          <div className={ReviewSliderCSS.userInfoContainer}>
            <div className={ReviewSliderCSS.username}>{user}</div>
            <div className={ReviewSliderCSS.datePosted}>
              Wrote a review
              {date}
            </div>
            <div className={ReviewSliderCSS.userContributions}>
              {user_contributions || 0}
              {' '}
              contribution
              { user_contributions === 1 ? '' : 's'}
            </div>
          </div>
        </div>
        <div className={ReviewSliderCSS.headerContainerRight}>
          <button
            className={ReviewSliderCSS.closeReviewSliderButton}
            type="button"
            onClick={hideReviewSlider}
          >
            <img className={ReviewSliderCSS.closeReviewSliderImage} src={crossIcon} alt="Close Review" />
          </button>
        </div>
      </div>


      <div className={ReviewSliderCSS.contentContainer}>
        <div className={ReviewSliderCSS.stars}>
          <Stars stars={review_stars} />
          <div className={ReviewSliderCSS.reviewTitle}>
            {review_title}
          </div>
          <div className={ReviewSliderCSS.reviewDescription}>
            {review_description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSlider;
