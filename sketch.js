var bubbles = [];

setup = function () {
  createCanvas(600, 600);
  // your code goes here
};

draw = function () {
  // your code goes here
  background(0);

  if (mouseIsPressed) bubbles.push(new Bubble(mouseX, mouseY));

  for (var i = 0; i < bubbles.length; ++i) {
   bubbles[i].update();
   bubbles[i].display();
 }
};
