$(document).ready(function() {
    // https://opentdb.com/api.php?amount=8&category=31&type=multiple

    function displayAll(data) {
        console.log(data)
    };

    function printQuestion1(data) {
        $("#1").html(data.results[0].question)
    };
    function printQuestion2(data) {
        $("#2").html(data.results[1].question)
    };
    function printQuestion3(data) {
        $("#3").html(data.results[2].question)
    };

    function displayQuestion1(data) {
        $.get("https://opentdb.com/api.php?amount=8&category=31&type=multiple", printQuestion1)
    };
    function displayQuestion2(data) {
        $.get("https://opentdb.com/api.php?amount=8&category=31&type=multiple", printQuestion2)
    };
    function displayQuestion3(data) {
        $.get("https://opentdb.com/api.php?amount=8&category=31&type=multiple", printQuestion3)
    };
    
    $.get("https://opentdb.com/api.php?amount=8&category=31&type=multiple", displayAll);
    $.get("https://opentdb.com/api.php?amount=8&category=31&type=multiple", displayQuestion1);
    $.get("https://opentdb.com/api.php?amount=8&category=31&type=multiple", displayQuestion2);
    $.get("https://opentdb.com/api.php?amount=8&category=31&type=multiple", displayQuestion3);
    //$("button").click("https://api.github.com/users/akiko", displayName)
});