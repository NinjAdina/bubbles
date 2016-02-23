var fish = [];

var updateAndDisplay = function(fishy) {
  fishy.update();
  fishy.display();
};

var addNumFish = function(totalFish) {
  while(fish.length < totalFish) {
    fish.push(new Fish(random(width-100, width), random(height/3, height/2)));
  }
};

setup = function () {
  createCanvas(600, 600);
  addNumFish(200);
  // your code goes here
};

draw = function () {
  // your code goes here
  background(0);

  if (mouseIsPressed) fish.push(new Fish(mouseX, mouseY));

  fish.forEach(updateAndDisplay);

};
