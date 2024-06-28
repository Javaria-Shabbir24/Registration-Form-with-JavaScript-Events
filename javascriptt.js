document.addEventListener("DOMContentLoaded", function() {
    alert("Welcome to Home Page");//alert message on page loading
  });
  
  const form = document.getElementById("registrationForm");//accessing registration form
  const submitBtn = document.getElementById("submitBtn");//accessing submit button
  
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (!validateForm()) {
      alert("Please fill out all fields.");//if any field is empty then return this alert message
      return;
    }
    alert("Thank you! Your request has been submitted.");//else if all fields are filled
  });
  //validating if all the fields are filled
  function validateForm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    if (firstName === "" || lastName === "" || email === "" || password === "") {
      return false;//if empty return false
    }
    return true;
  }
  //chnage background color when input field is focused
  const inputFields = document.querySelectorAll("input[type='text'], input[type='email'], input[type='password']");
  inputFields.forEach(inputField => {
    inputField.addEventListener("focus", function() {
      this.style.backgroundColor = "lightgrey";//color changed to light grey
    });
  });