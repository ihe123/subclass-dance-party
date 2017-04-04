var InterpretiveDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="interpretiveDancer"></span>');
  this.setPosition(top,left);
  this.step();
};

InterpretiveDancer.prototype = Object.create(Dancer.prototype);

InterpretiveDancer.prototype.constructor = InterpretiveDancer;

InterpretiveDancer.prototype.oldStep = Dancer.prototype.step;

InterpretiveDancer.prototype.step = function () {
  this.oldStep();
  this.$node.toggle();
};
