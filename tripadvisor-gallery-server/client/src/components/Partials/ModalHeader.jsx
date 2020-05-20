import React from 'react';
import PropTypes from 'prop-types';

import ModalHeaderCSS from '../../style/ModalHeader.css';

// AWS links' data
import awsS3Links from '../../../../AmazonS3Links';
// Destructure baseurl from AWS links
const { crossIcon } = awsS3Links;

const ModalHeader = ({ name, location, closeModal }) => (
  <div className={ModalHeaderCSS.modalHeader}>
    Photos of
    {' '}
    {name}
    {' '}
    from
    {' '}
    {location}
    <button
      type="button"
      className={ModalHeaderCSS.exit}
      onClick={closeModal}
    >
      <img
        alt="Close"
        src={crossIcon}
        height="20px"
        className={ModalHeaderCSS.exitButton}
      />
    </button>
  </div>
);

ModalHeader.defaultProps = {
  name: '',
  location: '',
  closeModal: () => {},
};

ModalHeader.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  closeModal: PropTypes.func,
};

export default ModalHeader;
