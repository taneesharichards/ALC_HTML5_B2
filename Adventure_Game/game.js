// Single line comment
/*
Multi-line comment
*/

//alert("Warning! Will Robinson...Warning!");
//
//confirm("Do you like pokemon?");
//
//prompt("What type of pokemon do you like?");

Game();

function Game(){
    
    var playerName = prompt("What is your name?");
    alert("Welcome to Rooms, "+ playerName);
    
    Work();
    
    function Work(){
        var work = prompt("It has been a long day at work. You are irritated and nervous. Your boss has been calling people into his office all day. You notice that the people leaving his office don't exactly look happy, and you know there have been rumors about an employee reduction within the company. You become more worried when your boss steps out of his office and calls you in. It's already 5:00. Do you want to:\n-Say that you have an appointment to be to?\n-Go into his office?\n-Start yelling and throwing things around the room?\n-Run out?").toLowerCase();
        
        if(work == "say that i have an appointment" || work == "say that i have an appointment to be to" || work == "appointment" || work == "say i have an appointment" || work == "appointment to be to" || work == "say i have an appointment to be to" || work == "run out" || work == "run" || work == "run away"){
            var phonecall = confirm("On your way home, you wonder how you're going to handle work tomorrow. Should you call in sick? Or are you going to go back to work and just face it? You're thinking about this when you get a call from your boss. Do you answer it?");
        if (phonecall){
            alert("You answer the call.")
        }
        
    }
        
        
    }

}