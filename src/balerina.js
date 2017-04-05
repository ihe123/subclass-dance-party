var BalletDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  //this.$node = $('<spanclass="ballerinaDancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class = "ballerinaDancer"><img src="https://68.media.tumblr.com/20b7387a54fe44f4c32fc593e841c9e7/tumblr_nkltsd1Ny11u2rj44o2_500.gif" height = "200" width = "150"></span>')
  //this.step();
  this.setPosition($('body').height() * Math.random(), $('body').width() * Math.random());
};

BalletDancer.prototype = Object.create(Dancer.prototype);

BalletDancer.prototype.constructor = BalletDancer;

BalletDancer.prototype.oldStep = Dancer.prototype.step;

BalletDancer.prototype.setPosition = function(top, left) {

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
 
};

BalletDancer.prototype.step = function () {
	// console.log("here")
  this.oldStep();
  this.$node.toggle();
};

// BalletDancer.prototype.step = function() {
//   setTimeout(this.step.bind(this), this.timeBetweenSteps);
// };
