var BalletDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  //this.$node = $('<spanclass="ballerinaDancer"></span>');
  this.$node = $('<span class="ballerina"><img src = "https://31.media.tumblr.com/f1299905002547f2ea978324add0a83a/tumblr_nhu8zj1Ngr1tmxne6o1_500.gif" height = "100" width ="100"'></span>')
  //this.step();
  this.$node.setPosition($('body').height() * Math.random(), $('body').width() * Math.random());
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
