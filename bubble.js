var Fish = function (x, y) {
  this.x = x;
  this.y = y;
};

Fish.prototype = {

  fishWidth: 20,
  fishHeight: 10,

  update: function() {
    this.x += random(0, -5); // this.x = this.x + random(0,2)
    this.y += random(-1, 1);
    if (this.x < this.fishWidth * -1) this.x =  this.fishWidth + width;
    // if (this.y - this.radius <= 0) this.y = this.radius + random(0, 2);----- this made bubbles "fizz" and collect on the top.
    // if (this.y < this.radius * -1) this.y = this.radius + height;---- this made bubbles move continuously from the top to reappear from the bottom.
  },

  display: function () {
    noStroke();
    fill(102, 100, 300, 100);
    rect(this.x, this.y, this.fishWidth, this.fishHeight);
  }

};
