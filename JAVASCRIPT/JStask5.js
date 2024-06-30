function validateForm() {
  var isValid = true;

  // Clear previous error messages
  document.getElementById("nameError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("websiteError").innerHTML = "";
  document.getElementById("messageError").innerHTML = "";

  // Validate name
  var name = document.getElementById("name").value;
  if (name == "") {
    document.getElementById("nameError").innerHTML = "This field is required";
    isValid = false;
  }

  // Validate email
  var email = document.getElementById("email").value;
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (email == "") {
    document.getElementById("emailError").innerHTML =
      "A valid email address is required";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").innerHTML =
      "Please enter a valid email address";
    isValid = false;
  }

  // Validate website
  var website = document.getElementById("website").value;
  var urlPattern =
    /^(https?:\/\/)?([\w\d\-_]+(\.[\w\d\-_]+)+)([\w\d\-_.,@?^=%&:/~+#]*[\w\d\-_@?^=%&/~+#])?$/;
  if (website == "") {
    document.getElementById("websiteError").innerHTML =
      "A valid URL is required";
    isValid = false;
  } else if (!urlPattern.test(website)) {
    document.getElementById("websiteError").innerHTML =
      "Please enter a valid URL";
    isValid = false;
  }

  // Validate message
  var message = document.getElementById("message").value;
  if (message == "") {
    document.getElementById("messageError").innerHTML =
      "This field is required";
    isValid = false;
  }

  return isValid;
}
