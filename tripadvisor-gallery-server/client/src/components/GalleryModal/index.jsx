import React from 'react';
import PropTypes from 'prop-types';

import GalleryModalPicture from './childComponents/GalleryModalPicture';
import GalleryModalCSS from '../../style/GalleryModal.css';

const GalleryModal = ({ photos, showReviewModal }) => (
  <div className={GalleryModalCSS.modalGallery}>
    {photos.map((photo, index) => (
      <GalleryModalPicture
        photo={photo}
        showReviewModal={showReviewModal}
        id={index}
        // eslint-disable-next-line react/no-array-index-key
        key={index}
      />
    ))}
  </div>
);

GalleryModal.defaultProps = {
  photos: [],
  showReviewModal: () => {},
};

GalleryModal.propTypes = {
  photos: PropTypes.shape([]),
  showReviewModal: PropTypes.func,
};

export default GalleryModal;
