const credentials = require("../aws/credentials.js");
const AWS = require("aws-sdk");
const S3 = new AWS.S3();

// function to get pictures from whichever location is inputted

let fetchPhotos = (location, cb) => {
  AWS.config.update({
    accessKeyId: credentials.accessKey,
    secretAccessKey: credentials.secretKey
  });
  AWS.config.region = "us-west-1";
  var s3Bucket = new AWS.S3({
    params: {
      Bucket: "fecgallery",
      MaxKeys: 10,
      Key: `${location}`
    }
  });
  var photoArray = [];
  s3Bucket.listObjectsV2((err, data) => {
    if (err) {
      return err;
    } else {
      var contents = data.Contents;
      contents.forEach(content => {
        photoArray.push(content.Key);
      });
      // if (data.IsTruncated) {
      //   params.ContinuationToken = data.NextContinuationToken;
      //   console.log("getting rest of keys");
      //   fetch();
      // }
    }
    cb(photoArray);
  });
};

module.exports.fetch = fetchPhotos;
