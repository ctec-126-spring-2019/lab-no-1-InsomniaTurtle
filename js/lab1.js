// lab1.js

function reverseString(str) {
    return str.split("").reverse().join("");
}

function listSkills(){
    let skills = ['Web Development','Gardening','Drumming','Volunteering'];
    // added a missing ending bracket on line 8
    let output = "<h2>Bruce's Skills<h2>";
    output += '<ul>';
    for (let i = 0; i < skills.length; i++) {
        output += '<li>' + skills[i] + '</li>';
    }
    output += '</ul>';
    document.getElementById('skills').innerHTML = '<p>' + output + '</p>';
}

function getStarted(){
    let firstName = 'Bruce';
    // added a missing = sign and ; on line 20
    let lastName = 'Elgort';
    let collegeName = 'Clark College';
    // added a missing ; on line 23
    let city = 'Vancouver, Washington';
    let gpa = 3.2;
    let output = `${firstName} {lastName} is currently attending ${collegeName}, located in {city} and has a grade point average of {gpa}`;

    document.getElementById('place1').innerHTML = '<p>' + output + '</p>';
    // had to change a out of place " in line 29
    document.getElementById('place2').innerHTML = '<p>' + reverseString(output) + '</p>';
}

window.onload = function(){
    getStarted();
    listSkills();
}