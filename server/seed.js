// file for seed script for photo gallery

const Gallery = require("./db.js");

// hardcoded url seed
const imageUrls = require("./urls.js");

// generate random number for which hotel to display
const randomNum = () => {
  return Math.floor(Math.random() * 5) + 1;
};

// grab hotel based on random number (1-5)
let getRandomHotel = (num, cb) => {
  // if (num === 1) {
  //   fetch("null", data => {
  //     console.log("seed recieved: ", data);
  //     cb(data);
  //   });
  // }
  // if (num === 2) {
  //   fetch("costarica", data => {
  //     console.log("seed recieved: ", data);
  //     cb(data);
  //   });
  // }
  // if (num === 3) {
  //   fetch("italy", data => {
  //     console.log("seed recieved: ", data);
  //     cb(data);
  //   });
  // }
  // if (num === 4) {
  //   fetch("singapore", data => {
  //     console.log("seed recieved: ", data);
  //     cb(data);
  //   });
  // }
  // if (num === 5) {
  //   fetch("tokyo", data => {
  //     console.log("seed recieved: ", data);
  //     cb(data);
  //   });
  // }
};

// establish 100 photo galleries with corresponding arrays based on random number
let seed1 = () => {
  for (var i = 0; i < 100; i++) {
    // let random = randomNum();
    // let diningArray = [];
    // let roomsArray = [];
    // let travelerArray = [];
    // let mainArray = [];
    // getRandomHotel(random, data => {
    //   console.log(random);
    //   console.log(data);
    //   data.forEach(img => {
    //     if (img.includes("main")) {
    //       mainArray.push(img);
    //     }
    //     if (img.includes("roomsuite")) {
    //       roomsArray.push(img);
    //     }
    //     if (img.includes("traveler")) {
    //       travelerArray.push(img);
    //     }
    //     if (img.includes("dining")) {
    //       diningArray.push(img);
    //     }
    //   });
    // });
    // console.log(
    //   "dining:",
    //   diningArray,
    //   "main: ",
    //   mainArray,
    //   "rooms: ",
    //   roomsArray,
    //   "traveler: ",
    //   travelerArray
    // );
    // db.Gallery.create({
    //   id: i,
    //   main: mainArray,
    //   dining: diningArray,
    //   rooms: roomsArray,
    //   traveler: travelerArray
    // });
  }
};

module.exports.seed1 = seed1;
