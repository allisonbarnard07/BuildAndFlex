$(document).ready(function(){
//  // Getting jQuery references to the 
var challengeTypeselect = $("#type");
var walkingForm = $(".walking-form");
var swimmingForm = $(".swimming-form");
var hikingForm = $(".hiking-form");
var runningForm = $(".running-form");
var pullupForm = $(".pullup-form");
var walkinggoalInput = $("#walking-goal");
var walkingstepsInput = $("#walking-steps");
var walkingdurationInput = $("#walking-duration");
var walkingmilesInput = $("#walking-miles");
var swimminggoalInput = $("#swimming-goal");
var swimmingdurationInput = $("#swimming-duration");
var swimmingmilesInput = $("#swimming-miles");
var hikinggoalInput = $("#hiking-goal");
var hikingdurationInput = $("#hiking-duration");
var hikingmilesInput = $("#hiking-miles");
var runninggoalInput = $("#running-goal");
var runningdurationInput = $("#running-duration");
var runningmilesInput = $("#running-miles");
var pullupgoalInput = $("#pullup-goal");
var pullupdurationInput = $("#pullup-duration");
var pulluprepsInput = $("#pullup-reps");
const completeButton = $("button.complete");
const addButton = $("button.add-another");
const toast = $("#toast");
let challengeType = null;
let shouldNavigateAway = false;

function initChallenge(){
    let challenge;
    if(location.search.split("=")[1] == undefined){
        challenge
    }
}
function handleChallengeTypeChange(event){
    challengeType = event.target.value;
    if(challengeType === "walking"){
        walkingForm.classList.remove("d-none");
        swimmingForm.classList.add("d-none");
        hikingForm.classList.add("d-none");
        runningForm.classList.add("d-none");
        pullupForm.classList.add("d-none");
    } else if(challengeType === "swimming"){
        swimmingForm.classList.remove("d-none");
        walkingForm.classList.add("d-none");
        hikingForm.classList.add("d-none");
        runningForm.classList.add("d-none");
        pullupForm.classList.add("d-none");
    } else if(challengeType === "hiking"){
        hikingForm.classList.remove("d-none");
        walkingForm.classList.add("d-none");
        swimmingForm.classList.add("d-none");
        runningForm.classList.add("d-none");
        pullupForm.classList.add("d-none");
    } else if(challengeType === "pullups"){
        pullupForm.classList.remove("d-none");
        walkingForm.classList.add("d-none");
        swimmingForm.classList.add("d-none");
        runningForm.classList.add("d-none");
        hikingForm.classList.add("d-none");
    } else if(challengeType === "running"){
        runningForm.classList.remove("d-none");
        walkingForm.classList.add("d-none");
        swimmingForm.classList.add("d-none");
        pullupForm.classList.add("d-none");
        hikingForm.classList.add("d-none");
    } else{
        walkingForm.classList.add("d-none");
        swimmingForm.classList.add("d-none");
        runningForm.classList.add("d-none");
        hikingForm.classList.add("d-none");
        pullupForm.classList.add("d-none");
    }

    validateInputs();
}
// validating the inputs from the user when filling the form for each challenges
function validateInputs(){
    let isValid = true;
    if(challengeType === "walking"){
        if((walkinggoalInput.value.trim() || walkingstepsInput.value.trim() ||  walkingdurationInput.value.trim() || walkingmilesInput.value.trim()) === ""){
            isValid = false;
        }
    } else if(challengeType === "swimming"){
        if((swimminggoalInput.value.trim() || swimmingdurationInput.valu.trim() ||  swimmingmilesInput.value.trim()) === ""){
            isValid = false;
        }
    } else if(challengeType === "hiking"){
        if((hikinggoalInput.value.trim() || hikingdurationInput.value.trim() ||  hikingmilesInput.value.trim()) === ""){
            isValid = false;
        }
    } else if(challengeType === "pullups"){
        if((pullupgoalInput.value.trim() ||pullupdurationInput.value.trim() ||  pulluprepsInput.value.trim() ) === ""){
            isValid = false;
        }
    } else if(challengeType === "running"){
        if((runninggoalInput.value.trim() ||runningdurationInput.value.trim() ||   runningmilesInput.value.trim() ) === ""){
            isValid = false;
        }
    }
    if (isValid){
        completeButton.removeAttribute("disabled");
        addButton.removeAttribute("disabled");

    } else {
        completeButton.setAttribute("disabled", true);
        addButton.setAttribute("disabled", true);
    }

}
function handleFormSubmit(event) {
    event.preventDefault();
    let challengeData = {};
    if(challengeType === "walking"){
        challengeData.goal = walkinggoalInput.value.trim();
        challengeData.steps = walkingstepsInput.value.trim();
        challengeData.duration = walkingdurationInput.value.trim();
        challengeData.miles = walkingmilesInput.value.trim();
    } else if (challengeType === "swimming"){

        challengeData.goal = swimminggoalInput.value.trim();
        challengeData.duration = swimmingdurationInput.value.trim();
        challengeData.miles = swimmingmilesInput.value.trim();
    } else if (challengeType === "hiking"){
        challengeData.goal = hikinggoalInput.value.trim();
        challengeData.duration = hikingdurationInput.value.trim();
        challengeData.miles = hikingmilesInput.value.trim();
    } else if (challengeType === "running"){
        challengeData.goal = runninggoalInput.value.trim();
        challengeData.duration = runningdurationInput.value.trim();
        challengeData.miles = runningmilesInput.value.trim();
    } else if (challengeType === "pullups"){
        challengeData.goal = pullupgoalInput.value.trim();
        challengeData.duration = pullupdurationInput.value.trim();
        challengeData.reps = pulluprepsInput.value.trim();
    }
    addExercise(challengeData);
    clearInputs();
    toast.classList.add("success");
}
function addExercise(post){
    $.post("/api/user-data", post, function(){
        window.location.href = "/allstat";
    });
}
function clearInputs() {
    walkinggoalInput.value = "";
    walkingstepsInput.value = "";
    walkingdurationInput.value = "";
    walkingmilesInput.value = "";
    swimminggoalInput.value = "";
    swimmingdurationInput.value = "";
    swimmingmilesInput.value = "";
    hikinggoalInput.value = "";
    hikingdurationInput.value = "";
    hikingmilesInput.value = "";
    runninggoalInput.value = "";
    runningdurationInput.value = "";
    runningmilesInput.value = "";
    pullupgoalInput.value = "";
    pullupdurationInput.value = "";
    pulluprepsInput.value = "";
    }
    function handleToastAnimationEnd() {
        toast.removeAttribute("class");
        if (shouldNavigateAway) {
            location.href = "/";
        }
        }
    if(challengeTypeselect){
        $(challengeTypeselect).on("change", handleChallengeTypeChange);
    }
    if (completeButton) {
        $(completeButton).on("click", function (event) {
            shouldNavigateAway = true;
            handleFormSubmit(event);
        });
    }
    if (addButton) {
        $(addButton).on("click", handleFormSubmit);
        }
    $(toast).on("animationend", handleToastAnimationEnd);

    document.$("input").forEach(element => element.on("input",validateInputs));

});