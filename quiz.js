var form = document.getElementById("quizForm");
var submitBtn = document.getElementById("quiz-form");

// Predefined correct answers
const correctAnswer = {
  question1: "C",
  question2: "B",
  question3: "C",
  question4: "A",
};

submitBtn.addEventListener("click", function () {
  // Prevent the default form submission
  event.preventDefault();

  // Initialize variables for marks calculation
  var totalQuestions = 0;
  var correctMarks = 0;

  // Get the form data
  var formData = new FormData(form);
  var selectedAnswers = {};

  // Iterate over each radio button in the form
  formData.forEach(function (value, key) {
    // Store the selected answer for each question
    if (key.startsWith("question")) {
      selectedAnswers[key] = value;
      totalQuestions++; // Increment total questions count
      // Check if the selected answer is correct
      if (value === correctAnswer[key]) {
        correctMarks++; // Increment correct marks count
      }
    }
  });

  // Calculate the percentage of correct answers
  var percentage = (correctMarks / totalQuestions) * 100;

  // Log the selected answers and marks to the console
  console.log("Selected answers:", selectedAnswers);
  console.log("Total questions:", totalQuestions);
  console.log("Correct answers:", correctMarks);
  console.log("Percentage:", percentage);

  // Store the marks in Session Storage
  sessionStorage.setItem("totalQuestions", totalQuestions);
  sessionStorage.setItem("correctMarks", correctMarks);
  sessionStorage.setItem("percentage", percentage);

  window.location.href = "result.html";
});
