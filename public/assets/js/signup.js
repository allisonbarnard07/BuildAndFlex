$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var emailInput = $("input#emailInput");
  var passwordInput = $("input#password-input");
  var ageInput = $("input#ageInput");
  var firstnameInput = $("input#firstname-input");
  var lastnameInput = $("input#lastname-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      firstName: firstnameInput.val().trim(),
      lastName: lastnameInput.val().trim(),
      age: ageInput.val().trim()
    };

    if (!userData.email || !userData.password ||!userData.firstName || !userData.lastName) {
      return;
    }
    // If we have an email and password, firstName, lastName run the signUpUser function
    signUpUser(userData.email, userData.password,userData.firstName, userData.lastName);
    emailInput.val("");
    passwordInput.val("");
    firstnameInput.val("");
    lastnameInput.val("");
    ageInput.val("")
  });

  // Does a post to the signup route. If successful, we are redirected to the allexercises page
  // Otherwise we log any errors
  function signUpUser(email, password,firstName,lastName,age) {
    $.post("/api/signup", {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      age: age
    })
      .then(function(data) {
        window.location.replace("/members");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
  // script for client side validation
  (function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();
});
