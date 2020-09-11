$(function () {
    $(document).ready(() => {
        getAllStats();
    });
});

function getAllStats(){
    $.get("api/user-data", function(data){
        console.log(data);
    })
}