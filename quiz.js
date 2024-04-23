var form = document.getElementById("quizForm");
var submitBtn = document.getElementById("quiz-form");

var formgetValue = JSON.parse(sessionStorage.getItem("formData"))

console.log(formgetValue)

var DetailsStu = document.getElementById("DetailsStu");
DetailsStu.innerHTML = `
  <div>
  <p>Name: ${formgetValue.name}</p>
  <p>Roll Number: ${formgetValue.rollNumber}</p>
  <p>Section: ${formgetValue.section}</p>
  <p>Batch: ${formgetValue.batch}</p>
  </div>
`;

// Predefined correct answers
const correctAnswer = {
  question1: "A",
  question2: "A",
  question3: "A",
  question4: "B",
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

  // Check if all questions have been answered
  if (totalQuestions < Object.keys(correctAnswer).length) {
    // Show alert if any question is unanswered
    alert("Please make sure to answer all questions.");
    return; // Stop further execution
  }

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

  // Redirect to the result page
  window.location.href = "result.html";
});
