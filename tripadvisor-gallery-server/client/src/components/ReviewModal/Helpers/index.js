/* eslint-disable camelcase */
const setUsernameAndLetter = (props) => {
  const { photos, activePhotoIdx } = props;
  const activePhoto = photos[activePhotoIdx];

  const { user } = activePhoto;
  let firstLetter = '';
  if (user) {
    firstLetter = user.slice(0, 1);
  }

  return [user, firstLetter];
};

const checkForReview = (props) => {
  const { photos, activePhotoIdx } = props;
  const activePhoto = photos[activePhotoIdx];

  let {
    // eslint-disable-next-line prefer-const
    review_title, review_description, review_helpful_score, review_stars,
  } = activePhoto;
  if (review_title === 'null') {
    review_title = null;
  }
  if (review_description === 'null') {
    review_description = null;
  }

  return [review_title, review_description, review_helpful_score, review_stars];
};

const setDate = (date) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  if (date) {
    const dateObject = new Date(date);
    const month = dateObject.getMonth();
    const year = dateObject.getFullYear();
    return ` ${months[month + 1]} ${year}`;
  }
  return '';
};

export default { setUsernameAndLetter, checkForReview, setDate };
