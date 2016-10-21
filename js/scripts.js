var pointsA;
var pointsB;
var pointsC;
var pointsD;

var surveyA = "a";
var surveyB = "b";
var surveyC = "c";
var surveyD = "d";

var pointReset = function() {
  var pointsA = 0;
  var pointsB = 0;
  var pointsC = 0;
  var pointsD = 0;
}

var 

// Back-end/business logic goes above, front-end/ui goes below this line

$(function() {
  $("#track-survey").submit(function(event) {
    event.preventDefault();

    pointReset();

  });
});
