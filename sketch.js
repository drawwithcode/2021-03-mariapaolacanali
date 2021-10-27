//upload .json file
let data;

//upload my images
let myImage;
let myImage1;
let myImage2;
let myImage3;
let myImage4;
let myImage5;
let myImage6;
let myImage7;
let myImage8;
let myImage9;

//upload sounds
let ring1;
let ring2;
let ring3;
let ring4;
let ring5;
let ring6;
let ring7;
let ring8;
let ring9;

function preload() {
  data = loadJSON("./assets/familyhouses.json");

  myImage = loadImage("./assets/Biegi-Gani.jpg");
  myImage1 = loadImage("./assets/Canali-Conforti (summer-house).jpg");
  myImage2 = loadImage("./assets/Canali-Conforti (winter-house).jpg");
  myImage3 = loadImage("./assets/Canali-fanti (1st House).jpg");
  myImage4 = loadImage("./assets/Canali-Fanti (2nd House)-copia.jpg");
  myImage5 = loadImage("./assets/Canali-Mansani.jpg");
  myImage6 = loadImage("./assets/Fanti-Caraffini.jpg");
  myImage7 = loadImage("./assets/Mansani-Biegi.jpg");
  myImage8 = loadImage("./assets/Mansani-Locci.jpg");
  myImage9 = loadImage("./assets/bell.png");

  ring1 = loadSound("./assets/doorbell1.mp3");
  ring2 = loadSound("./assets/knock.mp3");
  ring3 = loadSound("./assets/doorbell2.mp3");
  ring4 = loadSound("./assets/doorbell3.mp3");
  ring5 = loadSound("./assets/doorbell4.mp3");
  ring6 = loadSound("./assets/doorbell5.mp3");
  ring7 = loadSound("./assets/doorbell6.mp3");
  ring8 = loadSound("./assets/The Shining.mp3");
  ring9 = loadSound("./assets/casa.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  console.log(data);
}

function draw() {
  background(255);

  //make a grid to help me build the family tree
  //for (var x = 0; x < width; x += width / 9) {
  //for (var y = 0; y < height; y += height / 3) {
  // stroke("red");
  //strokeWeight(0.005);
  //line(x, 0, x, height);
  //line(0, y, width, y);
  //}
  //}
  imageMode(CORNER);

  image(myImage1, 50, 5, 300, 300);
  image(myImage9, 280, 140, 30, 30);
  image(myImage2, 320, 20, 250, 250);
  image(myImage9, 580, 140, 30, 30);
  image(myImage6, 720, 40, 280, 280);
  image(myImage9, 940, 140, 30, 30);
  image(myImage8, 1120, 5, 300, 300);
  image(myImage9, 1420, 140, 30, 30);
  image(myImage, 1550, 10, 300, 300);
  image(myImage9, 1850, 140, 30, 30);
  image(myImage4, 300, 350, 300, 300);
  image(myImage9, 580, 450, 30, 30);
  image(myImage3, 720, 350, 300, 310);
  image(myImage9, 940, 450, 30, 30);
  image(myImage7, 1300, 300, 350, 350);
  image(myImage9, 1650, 450, 30, 30);
  image(myImage5, 700, 640, 300, 300);
  image(myImage9, 940, 770, 30, 30);

  textFont("Zen Antique Soft");
  textAlign(CENTER);
  textSize(80);
  fill("FireBrick");
  text("Family\nHouses", 1500, 800);

  textSize(20);
  text("Canali-Conforti", 340, 43);
  text("Fanti-Caraffini", 850, 43);
  text("Mansani-Locci", 1255, 43);
  text("Biegi-Gani", 1700, 43);
  text("Canali-Fanti", 690, 360);
  text("Mansani-Biegi", 1500, 360);
  text("Canali-Mansani", 850, 660);

  imageMode(CENTER);
  let d = dist(mouseX, mouseY, 295, 155);
  if (d < 15) {
    background(255);
    image(myImage1, windowWidth / 2, windowHeight / 2, 1000, 1000);
    if (ring1.isPlaying() === false) {
      ring1.play();
    }
  } else {
    ring1.stop();
  }

  let d1 = dist(mouseX, mouseY, 595, 155);
  if (d1 < 15) {
    background(255);
    image(myImage2, windowWidth / 2, windowHeight / 2, 1000, 1000);
    if (ring2.isPlaying() === false) {
      ring2.play();
    }
  } else {
    ring2.stop();
  }

  let d2 = dist(mouseX, mouseY, 955, 155);
  if (d2 < 15) {
    background(255);
    image(myImage6, windowWidth / 2, windowHeight / 2, 1000, 1000);
    if (ring3.isPlaying() === false) {
      ring3.play();
    }
  } else {
    ring3.stop();
  }

  let d3 = dist(mouseX, mouseY, 1435, 155);
  if (d3 < 15) {
    background(255);
    image(myImage8, windowWidth / 2, windowHeight / 2, 1000, 1000);
    if (ring5.isPlaying() === false) {
      ring5.play();
    }
  } else {
    ring5.stop();
  }

  let d4 = dist(mouseX, mouseY, 1865, 155);
  if (d4 < 15) {
    background(255);
    image(myImage, windowWidth / 2, windowHeight / 2, 1000, 1000);
    if (ring4.isPlaying() === false) {
      ring4.play();
    }
  } else {
    ring4.stop();
  }

  let d5 = dist(mouseX, mouseY, 595, 465);
  if (d5 < 15) {
    background(255);
    image(myImage4, windowWidth / 2, windowHeight / 2, 1000, 1000);
    if (ring8.isPlaying() === false) {
      ring8.play();
    }
  } else {
    ring8.stop();
  }

  let d6 = dist(mouseX, mouseY, 955, 465);
  if (d6 < 15) {
    background(255);
    image(myImage3, windowWidth / 2, windowHeight / 2, 1000, 1000);
    if (ring6.isPlaying() === false) {
      ring6.play();
    }
  } else {
    ring6.stop();
  }

  let d7 = dist(mouseX, mouseY, 1665, 465);
  if (d7 < 15) {
    background(255);
    image(myImage7, windowWidth / 2, windowHeight / 2, 1000, 1000);
    if (ring7.isPlaying() === false) {
      ring7.play();
    }
  } else {
    ring7.stop();
  }

  let d8 = dist(mouseX, mouseY, 955, 785);
  if (d8 < 15) {
    background(255);
    image(myImage5, windowWidth / 2, windowHeight / 2, 1000, 1000);
    if (ring9.isPlaying() === false) {
      ring9.play();
    }
  } else {
    ring9.stop();
  }
}
