function submitForm() {
  // Get form values
  let form = document.getElementById("myForm");
  var formData = new FormData(form);

  // Convert form data to object
  var formObject = {};
  formData.forEach(function (value, key) {
    formObject[key] = value;
  });

  // Store form data in session storage
  sessionStorage.setItem("formData", JSON.stringify(formObject));
  alert("Form data are successfully saved");
}
