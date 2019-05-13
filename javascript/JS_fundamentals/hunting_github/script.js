$(document).ready(function() {
    // $.get("https://api.github.com/users/akiko", displayAll)
    // Notice that displayName is a function that takes in 1 parameter (this is the data that comes back from the API)
    
    // function displayAll(data) {
    //     console.log(data);
    // };

    function printName(data) {
        $("p").text (data.login);
    };

    $("button").click("https://api.github.com/users/akiko", displayName)
    function displayName(data) {
        $.get("https://api.github.com/users/akiko", printName)
    };
        
});
