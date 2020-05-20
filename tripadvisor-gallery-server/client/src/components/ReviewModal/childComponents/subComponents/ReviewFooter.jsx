import React from 'react';
import PropTypes from 'prop-types';
import ReviewCSS from '../../../../style/Review.css';

const ReviewFooter = ({ helpfulScore }) => (
  <div className={ReviewCSS.footer}>
    <div className={ReviewCSS.footerContent}>
      <button
        type="button"
        className={ReviewCSS.helpfulScore}
      >
        {/* <img className={ReviewCSS.thumbs_up} alt="Thumbs Up" src="https://trip-advisor-photo-gallery.s3-us-west-1.amazonaws.com/Icons/hands.png" /> */}
        Helpful (
        {helpfulScore}
        )
      </button>
      {/* <div className={ReviewCSS.footerContentRight}>
        <button type="button" className={ReviewCSS.saveTrip}>SaveTrip</button>
        <button type="button" className={ReviewCSS.reportPhoto}>ReportPhoto</button>
      </div> */}
      <div className={ReviewCSS.footerActions} />
    </div>
  </div>
);

ReviewFooter.defaultProps = {
  helpfulScore: 0,
};

ReviewFooter.propTypes = {
  helpfulScore: PropTypes.number,
};

export default ReviewFooter;