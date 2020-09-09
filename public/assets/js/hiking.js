$(document).ready(function() {
    // Getting references to our form and input
    var hikingForm = $("form.hiking-form");
    var goalInput = $("input#hiking-goal");
    var durationInput = $("input#hiking-duration");
    var milesInput = $("input#hiking-miles");
    // When the Add challenge button is clicked, we validate the the inputs.
    hikingForm.on("submit", function(event){
        event.preventDefault();
        var userData = {
            goal: goalInput.val().trim(),
            duration: durationInput.val().trim(),
            miles: milesInput.val().trim()
        };
        if (!userData.goal || !userData.duration || !userData.miles ) {
            return;
        }
      // If we have a goal, miles, duration  run the addChallenge function
        addChallenge(userData.goal, userData.duration, userData.miles);
        goalInput.val("");
        durationInput.val("");
        milesInput.val("")
    });
  // Does a post to the hiking challenge route. If successful, we are redirected to the profile? page
// Otherwise we log any errors
    function addChallenge(goal, duration,miles) {
    $.post("/api/hiking", {
        goal: goal,
        duration: duration,
        miles: miles
    })
        .then(function(data) {
          // window.location.replace("/profile or what?");
      // If there's an error, handle it by throwing up a bootstrap alert
        });
    };
});