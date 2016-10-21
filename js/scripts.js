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
// Variables for each possible answer so that code is less confusing, e.g. being clear that "a" is a survey answer.
var answerA = "a";
var answerB = "b";
var answerC = "c";
// A function that resets the points of all tracks when called. Intended to before trackScoring.
var scoreReset = function() {
  var rubyScore = 0;
  var phpScore = 0;
  var javaScore = 0;
  var cssScore = 0;
  var cSharpScore = 0;
}
// Assigns the variables to the values for the questions they're named after. Intended to run before trackScoring.
var pullAnswers = function() {
  userName = $("#user-name").val();
  companySize = $("input:radio[name=company-size]:checked").val();
  webOrNot = $("input:radio[name=web-or-not]:checked").val();
  website = $("input:radio[name=website]:checked").val();
  userJob = $("input:radio[name=user-job]:checked").val();
  phoneUse = $("input:radio[name=phone-use]:checked").val();
}
// Goes through the questions and sets appropriate scores.
var trackScoring = function(surveyAnswer) {

  if(companySize = surveyA) {
    rubyScore = rubyScore + 2;
    cssScore = cssScore + 2;
  } else if(companySize = surveyB) {
    phpScore = phpScore + 2;
    javaScore = javaScore + 2;
    cssScore = cssScore + 2;
    cSharpScore = cSharpScore + 2;
  } else {};

  if(webOrNot = surveyA) {
    ("#yes-on-websites").show();
    ("#result-message").text("Please fill out the highlighted question we just added.");
    rubyScore = rubyScore + 2;
    phpScore = phpScore + 2;
    cssScore = cssScore + 2;
  } else if(webOrNot = surveyB) {
    ("#yes-on-websites").hide();
    ("#result-message").hide();
    ("#result-message").text();
    javaScore = javaScore + 2;
    cSharpScore = cSharpScore + 2;
  } else {};

  if(website = surveyA) {
    rubyScore = rubyScore + 1;
  } else if(website = surveyB) {
    phpScore = phpScore + 1;
  } else if(website = surveyC) {
    cssScore = cssScore + 1;
  } else {};

  if(userJob = surveyA) {
    cssScore = cssScore + 2;
    rubyScore = rubyScore + 2;
  } else if(userJob = surveyB) {
    phpScore = phpScore + 2;
  } else if(userJob = surveyC) {
    cSharpScore = cSharpScore + 2;
    javaScore = javaScore + 2;
  } else{};

  if(phoneUse = surveyA) {
    javaScore = javaScore + 2;
  } else if(phoneUse = surveyB) {
    javaScore = javaScore + 1;
  } else if(phoneUse = surveyC) {
    rubyScore = rubyScore + 2;
    phpScore = phpScore + 2;
    cssScore = cssScore + 2;
    cSharpScore = cSharpScore + 2;
  } else {};
};

// Back-end/business logic goes above, front-end/ui goes below this line

$(function() {
  $("#track-survey").submit(function(event) {
    event.preventDefault();

    scoreReset();

  });
});
