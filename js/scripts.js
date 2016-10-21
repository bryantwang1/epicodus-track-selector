// Creates global variables that will count responses to determine which track fits the user.
var cSharpScore;
var cssScore;
var javaScore;
var phpScore;
var rubyScore;
// Creates global variables to be set to the value pulled from each survey question.
var userName;
var companySize;
var webOrNot;
var website;
var userJob;
var phoneUse;
var websiteAnswered;
// Variables for each possible answer so that code is less confusing, e.g. being clear that "a" is a survey answer.
var answerA = "a";
var answerB = "b";
var answerC = "c";
// A function that resets the points of all tracks when called. Intended to before trackScoring.
var scoreReset = function() {
  rubyScore = 0;
  phpScore = 0;
  javaScore = 0;
  cssScore = 0;
  cSharpScore = 0;
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
  if(companySize === answerA) {
    rubyScore = rubyScore + 2;
    cssScore = cssScore + 2;
  } else if(companySize === answerB) {
    phpScore = phpScore + 2;
    javaScore = javaScore + 2;
    cssScore = cssScore + 2;
    cSharpScore = cSharpScore + 2;
  } else {};

  if(webOrNot === answerA) {
    websiteAnswered = false;
    $("#yes-on-websites").show();
    rubyScore = rubyScore + 2;
    phpScore = phpScore + 2;
    cssScore = cssScore + 2;
  } else if(webOrNot === answerB) {
    websiteAnswered = true;
    $("#yes-on-websites").hide();
    javaScore = javaScore + 2;
    cSharpScore = cSharpScore + 2;
  } else {};

  if(website === answerA) {
    rubyScore = rubyScore + 1;
    $("#please-answer").hide();
    $("#result-message").hide();
    $("#result-message").text();
    websiteAnswered = true;
  } else if(website === answerB) {
    phpScore = phpScore + 1;
    $("#please-answer").hide();
    $("#result-message").hide();
    $("#result-message").text();
    websiteAnswered = true;
  } else if(website === answerC) {
    cssScore = cssScore + 1;
    $("#please-answer").hide();
    websiteAnswered = true;
  } else {
    $("#please-answer").show();
  };

  if(userJob === answerA) {
    cssScore = cssScore + 2;
    rubyScore = rubyScore + 2;
  } else if(userJob === answerB) {
    phpScore = phpScore + 2;
  } else if(userJob === answerC) {
    cSharpScore = cSharpScore + 2;
    javaScore = javaScore + 2;
  } else{};

  if(phoneUse === answerA) {
    javaScore = javaScore + 2;
  } else if(phoneUse ===answerB) {
    javaScore = javaScore + 1;
  } else if(phoneUse === answerC) {
    rubyScore = rubyScore + 2;
    phpScore = phpScore + 2;
    cssScore = cssScore + 2;
    cSharpScore = cSharpScore + 2;
  } else {};
};
// Takes the scores generated by trackScoring and compares them, then tells the user which track fits them.
var trackEvaluate = function() {
  if (websiteAnswered) {
    $("#result-message").hide();
    $("#result-message").text();
    $("#result-message").removeClass("red-text");
    $(".track-result").hide();
    if(cSharpScore > cssScore && cSharpScore > javaScore && cSharpScore > phpScore && cSharpScore > rubyScore) {
      $(".track-result").show();
      $(".name-insert").text(userName);
      $(".language-result").text("you should take the C#/.NET track")
      $("#score-list").hide();
    } else if(cssScore > cSharpScore && cssScore > javaScore && cssScore > phpScore && cssScore > rubyScore) {
      $(".track-result").show();
      $(".name-insert").text(userName);
      $(".language-result").text("you should take the CSS/Design track")
      $("#score-list").hide();
    } else if(javaScore > cssScore && javaScore > javaScore && cSharpScore > phpScore && javaScore > rubyScore) {
      $(".track-result").show();
      $(".name-insert").text(userName);
      $(".language-result").text("you should take the Java/Android track")
      $("#score-list").hide();
    } else if(phpScore > cssScore && phpScore > javaScore && phpScore > cSharpScore && phpScore > rubyScore) {
      $(".track-result").show();
      $(".name-insert").text(userName);
      $(".language-result").text("you should take the PHP/Drupal track")
      $("#score-list").hide();
    } else if(rubyScore > cssScore && rubyScore > javaScore && rubyScore > phpScore && rubyScore > cSharpScore) {
      $(".track-result").show();
      $(".name-insert").text(userName);
      $(".language-result").text("you should take the Ruby/Rails track")
      $("#score-list").hide();
    } else {
      $(".track-result").show();
      $(".name-insert").text(userName);
      $(".language-result").text("you've scored the same in more than one track, so we've only narrowed it down a little for you. Here are your scores so you can see which tracks you lean toward.")
      $("#score-list").show();
      $("#csharp-score").text("C#/.NET: " + cSharpScore);
      $("#css-score").text("CSS/Design: " + cssScore);
      $("#java-score").text("Java/Android: " + javaScore);
      $("#php-score").text("PHP/Drupal: " + phpScore);
      $("#ruby-score").text("Ruby/Rails: " + rubyScore);
    };
  } else {
    $("#result-message").show();
    $("#result-message").text("Please fill out the highlighted question we just added.");
    $("#result-message").addClass("red-text");
    $(".track-result").hide();
  };
};

// Back-end/business logic goes above, front-end/ui goes below this line

$(function() {
  $("#track-survey").submit(function(event) {
    event.preventDefault();

    scoreReset();
    pullAnswers();
    trackScoring();
    trackEvaluate();

  });
});
