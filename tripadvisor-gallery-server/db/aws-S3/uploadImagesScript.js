// Dependencies needed for this module
const path = require('path');
const fs = require('fs');

// Helper function
// 1. uploads each image found in pictureFolderPath to S3
// 2. writes the image path to .txt file
const { uploadPictures } = require('./helpers');

// Path to pictures
const pictureFolderPath = path.join(__dirname, 'pictures');

// Kick start this process by invoking fs.readdir on pictureFolderPath
// Pass the array of image paths to uploadPicturesAndGetUrls
fs.readdir(pictureFolderPath, (err, picturePaths) => {
  if (err) {
    throw new Error(err);
  } else {
    uploadPictures(picturePaths);
  }
});
