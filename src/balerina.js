var BalletDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  //this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="ballerinaDancer"></span>');
  this.setPosition(top,left);
  this.step();
};

BalletDancer.prototype = Object.create(Dancer.prototype);

BalletDancer.prototype.constructor = BalletDancer;

BalletDancer.prototype.oldStep = Dancer.prototype.step;

BalletDancer.prototype.step = function () {
  this.oldStep();
  this.$node.toggle();
};
