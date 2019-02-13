// Single line comment
/*
Multi-line comment
*/

//alert("Warning! Will Robinson...Warning!");
//
//confirm("Do you like pokemon?");
//
//prompt("What type of pokemon do you like?");

// function Swamp(){
// var swamp1 = prompt(You enter a dank swamp);

// var wizardNames = ["Bethazar", "Mordac", "Grendor"];
// alert("Welcome to , "+wizardNames[0]+"!");

Game();

function Game(){
var playername = prompt("What is your name?");
var readytoplay = confirm ("Welcome to , "+ playername +". Are you ready to play?");
    if(readytoplay){
        Work();
    }
    else{
        alert("Come back when you're ready!");
    }
    
Work();
    
// Work Function
    
    function Work(){
        var work = prompt("It has been a long day at work. You are irritated and nervous. Your boss has been calling people into his office all day. You notice that the people leaving his office don't exactly look happy, and you know there have been rumors about an employee reduction within the company. You become more worried when your boss steps out of his office and calls you in. It's already 5:00. Do you want to:\n-Say that you have an appointment to be to?\n-Go into his office?\n-Start yelling and throwing things around the room?\n-Run out?").toLowerCase();
        
            if(work == "say that i have an appointment" || work == "say that i have an appointment to be to" || work == "appointment" || work == "say i have an appointment" || work == "appointment to be to" || work == "say i have an appointment to be to"){
                CallFromBossAppt();
            }
        
            if(work == "run out" || work == "run" || work == "run away"){
                CallFromBossRun();
            }
        }
    function CallFromBossRun(){
        var callfrombossrun = confirm("You don't stop running until you get to your car. Once you get into your car, you wonder if that was really the right decision to make. It seemed kind of crazy. How are you going to go back to work tomorrow after having run out like that? Your phone rings. You look down and see your boss's name on the screen. How do you talk to him after having run out like that? Do you want to answer it?");
            if (callfrombossrun){
                alert("You answer the call. You say 'Hello?'");
                PhoneCallRun();
            }
            else{
                alert("You let the call go to voicemail. A few seconds later, a voicemail notification pops up on your phone. You decide to listen to it.\n'+playername+...I don't know what happened just barely...Frankly, that was very unprofessional, and I'm confused. If you have a logical explanation, feel free to call me back. If not, don't bother coming to work tomorrow.'\nYou wonder why he didn't just fire you over the phone if he was going to before you ran out. You start to drive home.");
                    FoodVendor();
                
                
            }
    }
    
    function PhoneCallRun(){
        var phonecallrun = confirm(""+playername+"? What just happened? That seemed very unprofessional.'");
        
            if(phonecallrun){
                alert("'Awesome! I'll send over those details soon!'");
                FoodVendor();
            }
    }
    
    function CallFromBossAppt(){
        var callfrombossappt = confirm("On your way home, you wonder how you're going to handle work tomorrow. Should you call in sick? Or are you going to go back to work and just face it? You're thinking about this when you get a call from your boss. Do you answer it?");
            if (callfrombossappt){
                alert("You answer the call. You say 'Hello?'");
                PhoneCallAppt();
            }
    }
// Phone Call from boss
    
    function PhoneCallAppt(){
        var phonecallappt = confirm("'Hey, "+playername+"! I'm sorry if I'm interrupting your appointment. This just couldn't wait! I wanted to offer you a position in the company. I think you'd be perfect for it, and I was hoping to have an answer by tomorrow morning. I'll email over the details of the position. Sound good?'");
        
            if(phonecallappt){
                alert("'Awesome! I'll send over those details soon!'");
                FoodVendor();
            }
    }
// Food vendor
    function FoodVendor(){
        var hungry = prompt("As you continue to drive, you see food vendors on the side of the roads and realize how hungry you are. Do you want to:\n-Stop at a food vendor?\n-Wait until you get home?").toLowerCase();
            if(hungry == "stop at a food vendor" || hungry == "stop at a vendor" ||hungry == "food vendor" || hungry == "vendor" || hungry == "food" || hungry == "stop"){
                VendorOptions();
            } 
        }
    
    function VendorOptions(){
        var foodchoice = prompt("You pull off to the side of the road and take a look at your options. Do you want a: \n-hot dog\n-hamburger\n-taco").toLowerCase();
               if(foodchoice == "hot dog" || foodchoice == "hamburger" || foodchoice == "taco"){
                   alert("You finish your "+foodchoice+" before getting back into your car.");
                   DriveHome();
               } 

    }
    
// Drive home w people following
    function DriveHome(){
        var follower = prompt("You are now 10 minutes from home. You notice a black sedan that has been following you since you left the food vendor. Do you want to:\n-Speed up?\n-Just keep driving and see if they stop following you?\n-Try to run them off the road?\n-Call the cops?").toLowerCase();
            if(follower == "speed up"){
                alert("The black sedan speeds up to catch up to you. You start weaving in between cars to try to lose them. They stay right on your tail. You go even faster to try to get away. You look in your rearview mirror to look for the sedan. You can't see it. You look back down to the road and keep driving. All of the sudden, you feel something hit the passenger side of the car. You look over. The black sedan is trying to push you into the median! You try to push back, but the sedan has already caught you off guard. The sedan takes another shot and you end up hitting the cement medians going 110 mph. Everything goes dark.");
                CallVendorChoice();
            }
    }
    
    function CallVendorChoice(){
        var callvendorchoice = prompt("Would you like to:\n -Return to the phone call\n-Return to the food vendor\n-Quit").toLowerCase();
        if(callvendorchoice == "phone call"){
            CallFromBoss();
        }
        else if(callvendorchoice == "food vendor"){
            VendorOptions();
        }

        
        else if(callvendorchoice == "quit"){
           Quit(); 
        }
    }


    function Quit(){
        var quit = confirm("Are you sure want to quit?")

        if(quit){
            alert("You have chosen to quit the game.");
            Game();
        }
        else{
            CallVendorChoice();
        }
    }
    
}