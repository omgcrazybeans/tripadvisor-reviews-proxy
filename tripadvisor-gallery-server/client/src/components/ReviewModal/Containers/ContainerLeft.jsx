import React from 'react';
import PropTypes from 'prop-types';

import ReviewModalCSS from '../../../style/ReviewModal.css';
import awsS3Links from '../../../../../AmazonS3Links';

const { arrowIcon, galleryIcon } = awsS3Links;

const ContainerLeft = ({ showGalleryModal, handleImageSliderClick }) => (
  <div className={ReviewModalCSS.leftContainer}>
    <div className={ReviewModalCSS.showGalleryContainer}>
      <button
        type="button"
        className={ReviewModalCSS.showGalleryButton}
        onClick={showGalleryModal}
      >
        <span className={ReviewModalCSS.galleryIconAndText}>
          <img className={ReviewModalCSS.galleryIcon} alt="Gallery Icon" src={galleryIcon} />
          Gallery
        </span>
      </button>
    </div>
    <div className={ReviewModalCSS.prev_button}>
      <button
        type="button"
        className={ReviewModalCSS.slider_button}
        onClick={handleImageSliderClick}
      >
        <img
          className={ReviewModalCSS.directional_arrow_left}
          src={arrowIcon}
          alt="Previous"
        />
      </button>
    </div>
  </div>
);

ContainerLeft.defaultProps = {
  showGalleryModal: () => {},
  handleImageSliderClick: () => {},
};

ContainerLeft.propTypes = {
  showGalleryModal: PropTypes.func,
  handleImageSliderClick: PropTypes.func,
};

export default ContainerLeft;
