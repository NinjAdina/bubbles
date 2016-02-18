var bubbles = [];

var updateAndDisplay = function(bubble) {
  // code goes here
  bubble.update();
  bubble.display();

};

var addNumBubbles = function (totalBubbles) {
  while (bubbles.length < totalBubbles) {
   bubbles.push(new Bubble(random(0, width), random(0, height)));
  }
};

setup = function () {
  createCanvas(600, 600);
  addNumBubbles(500);
  // your code goes here
};

draw = function () {
  // your code goes here
  background(0);

  if (mouseIsPressed) bubbles.push(new Bubble(mouseX, mouseY));

  bubbles.forEach(updateAndDisplay);

};
