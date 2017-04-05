var InterpretiveDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="interpretiveDancer"><img src="http://vignette4.wikia.nocookie.net/spongebob/images/8/86/Squidward-Dance.gif/revision/latest?cb=20141223174811"></span> ');
  this.setPosition(top,left);
  // this.step(); 
};

InterpretiveDancer.prototype = Object.create(Dancer.prototype);

InterpretiveDancer.prototype.constructor = InterpretiveDancer;

InterpretiveDancer.prototype.oldStep = Dancer.prototype.step;

InterpretiveDancer.prototype.step = function () {
  this.oldStep();
  this.$node.toggle();
};
