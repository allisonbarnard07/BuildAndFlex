$(document).ready(function(){
    var selectchallengeType = $("#type");
    selectchallengeType.on("change", handleChallengeChange);
    function handleChallengeChange(event){
        event.preventDefault();
        let challengeType = event.target.value
        if( challengeType === "walking"){
            window.location.replace("/walking")

        } else if(challengeType === "hiking"){
            window.location.replace("/hiking")
        } else if(challengeType === "swimming"){
            window.location.replace("/swimming")
        } else if (challengeType === "running"){
            window.location.replace("/running")
        } else if (challengeType === "pullup"){
            window.location.replace("/pullup")
        }

    }
});