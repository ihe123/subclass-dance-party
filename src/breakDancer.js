var BreakDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="breakDancer"><img src="https://m.popkey.co/e2b833/6Mwlk.gif" height = "150" width = "150"></span>');
  this.setPosition(top,left);
  // this.step(); 
};

BreakDancer.prototype = Object.create(Dancer.prototype);

BreakDancer.prototype.constructor = BreakDancer;

BreakDancer.prototype.oldStep = Dancer.prototype.step;

BreakDancer.prototype.step = function () {
  this.oldStep();
  this.$node.toggle();
};

