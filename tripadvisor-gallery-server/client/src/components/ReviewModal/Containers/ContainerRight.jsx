import React from 'react';
import PropTypes from 'prop-types';

import ReviewModalCSS from '../../../style/ReviewModal.css';
import awsS3Links from '../../../../../AmazonS3Links';

const { arrowIcon } = awsS3Links;

const ContainerRight = ({ activePhotoIdx, photos, handleImageSliderClick }) => (
  <div className={ReviewModalCSS.rightContainer}>
    <div className={ReviewModalCSS.showStatsContainer}>
      <span className={ReviewModalCSS.activityPhotoStats}>
        {Number(activePhotoIdx) + 1}
        {' '}
        of
        {' '}
        {photos.length}
      </span>
    </div>
    <div className={ReviewModalCSS.next_button}>
      <button
        type="button"
        className={ReviewModalCSS.slider_button}
        onClick={handleImageSliderClick}
      >
        <img
          className={ReviewModalCSS.directional_arrow_right}
          src={arrowIcon}
          alt="Next"
        />
      </button>
    </div>
  </div>
);

ContainerRight.defaultProps = {
  photos: [],
  activePhotoIdx: 0,
  handleImageSliderClick: () => {},
};

ContainerRight.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  photos: PropTypes.array,
  activePhotoIdx: PropTypes.number,
  handleImageSliderClick: PropTypes.func,
};

export default ContainerRight;
