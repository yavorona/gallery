const config = require("./config.js");
const AWS = require("aws-sdk");
const s3 = new AWS.S3({
  accessKeyId: config.accessKey,
  secretAccessKey: config.secretKey,
  region: "us-west-1"
});

module.exports.s3 = s3;

// function to get pictures from whichever location is inputted
let fetchPhotos = (location, cb) => {
  // parameters that specify the S3 bucket and folder (location) to grab photos of
  var params = {
    Bucket: "fecgallery", // bucket name,
    // EncodingType: "url",
    MaxKeys: 20,
    Key: `${location}`
  };
  var photoArray = [];
  s3.listObjectsV2(params, (err, data) => {
    if (err) {
      return err;
    } else {
      var contents = data.Contents;
      contents.forEach(content => {
        photoArray.push(content.Key);
      });
      if (data.IsTruncated) {
        params.ContinuationToken = data.NextContinuationToken;
        console.log("getting rest of keys");
        fetch();
      }
    }
    cb(photoArray);
  });
};

module.exports = fetchPhotos;
