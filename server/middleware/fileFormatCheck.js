const ffmpeg = require("fluent-ffmpeg");
const path = require("path");
const Jimp = require("jimp");
const convertVideoFormat = (url) => {
  const currentDirectory = process.cwd();
  const filePath = path.join(currentDirectory, url);
  console.log("iam called");
  let converted = false;
  console.log(filePath);
  const proc = ffmpeg(filePath).ffprobe((err, metadata) => {
    if (err) {
      console.log(err);
      converted = false;
    }
  });
  if (converted === false) return converted;
  ffmpeg(filePath)
    .output(filePath)
    .on("end", () => {
      converted = true;
      console.log(converted);
    })
    .on("error", () => {
      converted = false;
      console.log(converted);
    })
    .run();

  if (converted === false) return converted;
};
const convertImageFormat = (url) => {
  const currentDirectory = process.cwd();
  const filePath = path.join(currentDirectory, url);
  console.log("iam called");
  let converted = false;
  Jimp.read(filePath)
    .then((image) => {
      converted = true;
    })
    .catch((err) => {
      converted = false;
      console.log(err);
    });
  if (converted === false) return converted;
  Jimp.read(url)
    .then((image) => {
      // Convert the image to PNG format
      return image.write(filePath);
    })
    .then(() => {
      converted = true;
      console.log(converted);
    })
    .catch((err) => {
      converted = false;
      console.log(converted);
    });
  return converted;
};
module.exports = { convertVideoFormat, convertImageFormat };
