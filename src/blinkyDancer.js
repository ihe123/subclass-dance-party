var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node = $('<span class="blinkyDancer"><img src="https://s-media-cache-ak0.pinimg.com/originals/7d/d6/2f/7dd62ff2aaa072239d0810ae5c66a8aa.gif" height = "150" width = "200"></span>');
  this.setPosition(top,left);

};


BlinkyDancer.prototype = Object.create(Dancer.prototype);

BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.oldStep = Dancer.prototype.step;

BlinkyDancer.prototype.step = function () {
  this.oldStep();
  this.$node.show();
};




