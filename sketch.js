var bubbles = [];

setup = function () {
  createCanvas(600, 600);
  // your code goes here
};

draw = function () {
  // your code goes here
  background(0);

  if (mouseIsPressed) bubbles.push(new Bubble(mouseX, mouseY));

  var index = 0;
  while (index < bubbles.length) {
    bubbles[index].update();
    bubbles[index].display();
    index += 1; // recall that this can be written as ++i
  }
};
