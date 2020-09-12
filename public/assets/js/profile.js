$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and render the user info in to the page
  $.get("/api/user_data").then(data => {
    $("#name").val(data.firstName);
    $("#age").val(data.age);
  });
  // This file just does a GET request to figure out which user is logged in
  // and render the challenge info in to the page
  $.get("/api/all-stats").then(data => {
    $("#goal").val(data.goal);
    $("#duration").val(data.duration);
    $("#miles").val(data.miles);
    $("#steps").val(data.steps);
  });
});
