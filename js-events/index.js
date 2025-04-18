// declare the variable 

var buttonOne = document.querySelector("#button1");

buttonOne.addEventListener("click", function () {
    alert("you cliked me");
});

document.addEventListener("keypress", function (e) {
    alert("you pressed " + e.key + " button");
});