const { queryDbForGalleryData } = require('../../db/models');

const getGalleryForActivityId = (req, res) => {
  const id = req.params.activityId;
  queryDbForGalleryData(id, (err, data) => {
    if (err) {
      throw new Error(err);
    } else {
      res.status(200);
      res.json(data);
    }
  });
};

module.exports.getGalleryForActivityId = getGalleryForActivityId;
