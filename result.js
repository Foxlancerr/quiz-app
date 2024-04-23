var totalQuestions = sessionStorage.getItem("totalQuestions");
var correctMarks = sessionStorage.getItem("correctMarks");
var percentage = sessionStorage.getItem("percentage");

var resultsDiv = document.getElementById("results");
resultsDiv.classList.add("center");
resultsDiv.innerHTML = `
  <div>
  <h1>Total Questions: ${totalQuestions}</h1>
  <h1>Correct Answers: ${correctMarks}</h1>
  <h1>Percentage: ${percentage}%</h1>
  </div>
`;
