// Dependencies needed for this module
const AWS = require('aws-sdk');
const path = require('path');
const os = require('os');
const fs = require('fs');
const { Bucket } = require('../../../config.js'); // Name of bucket for AWS S3 (type: String)
const { UploadParams } = require('./UploadParams.js'); // S3 specific upload params object

const s3 = new AWS.S3({ apiVersion: '2006-03-01' }); // Creates an s3 instance
const pictureUrlsFilePath = path.join(__dirname, '../', 'S3-picture-urls.txt'); // File path to save image urls

const uploadPictures = (pictures, pictureIdx = 0) => { // Recursive function that uploads img to S3
  if (pictureIdx !== pictures.length) { // Recursively uploads photos until all have been uploaded
    const uploadParams = UploadParams(Bucket);
    const pictureFile = path.join(__dirname, '../', 'pictures', pictures[pictureIdx]); // File path for image to upload

    const pictureFileStream = fs.createReadStream(pictureFile);
    pictureFileStream.on('error', (streamErr) => { // Check for any errors on readStream
      if (streamErr) {
        throw new Error(streamErr);
      }
    });

    uploadParams.Key = path.basename(pictureFile); // Assign S3 Key property to name of the picture
    uploadParams.Body = pictureFileStream; // Assign S3 Body property to the pictureFileStream

    s3.upload(uploadParams, (err, pictureUrl) => {
      if (err) {
        throw err;
      } else {
        const imageName = path.basename(pictureUrl.Location);
        fs.appendFile(pictureUrlsFilePath, `${imageName}${os.EOL}`, 'utf8', (writeFileErr) => {
          if (writeFileErr) {
            throw new Error(writeFileErr);
          } else { /* eslint-disable no-console */
            console.log(`Successfully Uploaded Picture-${pictureIdx}`);
            uploadPictures(pictures, pictureIdx + 1);
          }
        });
      }
    });
  }
};

module.exports.uploadPictures = uploadPictures;
