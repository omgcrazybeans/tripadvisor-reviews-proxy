/* eslint-disable camelcase */
import React from 'react';
import ReviewCSS from '../../../style/Review.css';
import Emblem from './subComponents/Emblem';
import StarsAndDescription from './subComponents/StarsAndDescription';
import ReviewFooter from './subComponents/ReviewFooter';

import reviewHelpers from '../Helpers';

const { setUsernameAndLetter, checkForReview } = reviewHelpers;

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.setUsernameAndLetter = setUsernameAndLetter;
    this.checkForReview = checkForReview;
    this.handleReadReviewClick = this.handleReadReviewClick.bind(this);
  }

  handleReadReviewClick() {
    const { displayReviewSlider } = this.props;
    displayReviewSlider();
  }

  render() {
    const [user, firstLetter] = this.setUsernameAndLetter(this.props);
    const [
      review_title, review_description, review_helpful_score, review_stars,
    ] = this.checkForReview(this.props);

    return (
      <div className={ReviewCSS.container}>
        <Emblem firstLetter={firstLetter} user={user} />

        {/* Display content specific for review w/ title and w/out description */}
        {/* This scenario occurs when management / a user posts an image without a description */}
        {review_title && !review_description
          ? <div className={ReviewCSS.title}>{review_title}</div>
          : <div />}

        {/* Displays the review's description if it exists */}
        {review_description
          ? (
            <StarsAndDescription
              stars={review_stars}
              description={review_description}
              handleReadReviewClick={this.handleReadReviewClick}
            />
          )
          : <div />}

        {/* Displays the review's helpful score if it exists */}
        {review_helpful_score
          ? <ReviewFooter helpfulScore={review_helpful_score} />
          : <div />}
      </div>
    );
  }
}

export default Review;
