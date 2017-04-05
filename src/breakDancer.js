var BreakDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="breakDancer"></span>');
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

// $('#addDancerButton3').click(function() {
//    var $button = $(this);

//    $('.breakDancer')
//       .find('.addDancerButton')
//       .animate({
//             left: 280
//          },
//          {
//             duration: 2000,
//             start: function() {
//                $button.prop('disabled', true);
//             },
//             complete: function() {
//                $button.prop('disabled', false);
//             },
//             progress: function(animation, progress) {
//                $('#percentage').text(Math.round(progress * 100));
//             }
//          }
//       );
// });
