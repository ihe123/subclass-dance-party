$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
// $('.blinkyDancer').animate({"left": '+= 50px'}, 'slow');
    var dancerMakerFunctionName = $(this).data('dancerMakerFunctionName');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // console.log(dancerMakerFunction)

    // make a dancer with a random position

    var dancer = new dancerMakerFunction (
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  
});

 $('.addDancerButton2').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancerMakerFunctionName');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // console.log(dancerMakerFunction)

    // make a dancer with a random position

    var breakDancer = new dancerMakerFunction (
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(breakDancer.$node);
    window.dancers.push(breakDancer);
  });

 $('.addDancerButton3').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancerMakerFunctionName');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // console.log(dancerMakerFunction)

    // make a dancer with a random position

    var ballerina = new dancerMakerFunction (
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(ballerina.$node);
    window.dancers.push(ballerina);
  });



 $('.addDancerButton4').on('click', function(event) {
  

    var dancerMakerFunctionName = $(this).data('dancerMakerFunctionName');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // console.log(dancerMakerFunction)

    // make a dancer with a random position

    var otherDancer = new dancerMakerFunction (

      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(otherDancer.$node);
 
  window.dancers.push(otherDancer);
  console.log(window.dancers)
  });
  
  //line up method

 $('.lineUpButton').on('click', function(event) {

    for (var i = 0; i < window.dancers.length; i++) {
      var doIT = i * 25;
      window.dancers[i].setPosition(465, 250 + doIT)
    }  
  });


































});

