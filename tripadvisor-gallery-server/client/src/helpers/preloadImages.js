const preloadImages = (photos) => {
  const links = photos.map((photo) => {
    const link = document.createElement('link');
    link.setAttribute('rel', 'preload');
    link.setAttribute('as', 'image');
    link.setAttribute('href', `https://trip-advisor-photo-gallery.s3-us-west-1.amazonaws.com/${photo.link}`);
    return link;
  });

  links.forEach((link) => {
    document.head.appendChild(link);
  });
};

export default preloadImages;
