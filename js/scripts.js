// Creates global variables that will count responses to determine which track fits the user.
var rubyScore;
var phpScore;
var javaScore;
var cssScore;
var cSharpScore;
// Creates global variables to be set to the value pulled from each survey question.
var userName;
var companySize;
var webOrNot;
var website;
var userJob;
var phoneUse;
var
// A function that resets the points of all tracks when called. Intended to run before any other function.
var scoreReset = function() {
  var rubyScore = 0;
  var phpScore = 0;
  var javaScore = 0;
  var cssScore = 0;
  var cSharpScore = 0;
}
//
var trackScoring = function(surveyResponse) {
  // Creates scope-limited variables to temporarily record points, and assigns them to the appropriate tracks at the end of the function.
  var trackRuby = 0;
  var trackPhp = 0;
  var trackJava = 0;
  var trackCss = 0;
  var trackCSharp = 0;

}

// Back-end/business logic goes above, front-end/ui goes below this line

$(function() {
  $("#track-survey").submit(function(event) {
    event.preventDefault();

    scoreReset();

  });
});
