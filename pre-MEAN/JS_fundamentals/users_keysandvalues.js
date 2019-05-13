var users = [
    {
        fname: "Kermit",
        lname: "the Frog",
        languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
        interests: {
            music: ["guitar", "flute"],
            dance: ["tap", "salsa"],
            television: ["Black Mirror", "Stranger Things"]
        }
    },
    {
        fname: "Winnie",
        lname: "the Pooh",
        languages: ["Python", "Swift", "Java"],
        interests: {
            food: ["honey", "honeycomb"],
            flowers: ["honeysuckle"],
            mysteries: ["Heffalumps"]
        }
    },
    {
        fname: "Arthur",
        lname: "Dent",
        languages: ["JavaScript", "HTML", "Go"],
        interests: {
            space: ["stars", "planets", "improbability"],
            home: ["tea", "yellow bulldozers"]
        }
    }
]

function userLanguages(dict){
    var returnStr = "";
    for(var i=0; i<dict.length; i++){
        returnStr += (dict[i].fname + " " + dict[i].lname + " knows ");
        for(var j=0; j<dict[i].languages.length; j++){
            if(j == dict[i].languages.length-1){
                returnStr += ("and " + dict[i].languages[j] + ".");
            } else {
                returnStr += (dict[i].languages[j] + ", ");
            }
        }
        returnStr += "\n";
    }
    return returnStr;
}

console.log(userLanguages(users));

// BONUS: Adjust the userLanguages function to also include what each user's interests are.

// Example: userLanguages(users) returns:

// Kermit the Frog knows Python, JavaScript, C#, HTML, CSS, and SQL.
// Kermit is also interested in guitar, flute, tap, salsa, Black Mirror, and Stranger Things.
// Winnie the Pooh knows Python, Swift, and Java. 
// Winnie is also interested in honey, honeycomb, honeysuckle, and Heffalumps.
// Arthur Dent knows JavaScript, HTML, and Go.
// Arthur is also interested in stars, planets, improbability, tea, and yellow bulldozers.