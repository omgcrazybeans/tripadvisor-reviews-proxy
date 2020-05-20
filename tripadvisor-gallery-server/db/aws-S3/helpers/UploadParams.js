module.exports.UploadParams = (Bucket) => ( // Generates object with properties for S3 image upload
  { // https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/s3-example-creating-buckets.html
    Bucket,
    Key: '',
    Body: '',
    ContentType: 'image/jpeg',
    ACL: 'public-read',
  }
);
