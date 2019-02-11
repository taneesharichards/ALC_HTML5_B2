Game();

function Game(){
var playerName = prompt("What is your name?");
    alert("Welcome to , "+ playerName);
Work();
    
// Work Function
    
    function Work(){
        var work = prompt("It has been a long day at work. You are irritated and nervous. Your boss has been calling people into his office all day. You notice that the people leaving his office don't exactly look happy, and you know there have been rumors about an employee reduction within the company. You become more worried when your boss steps out of his office and calls you in. It's already 5:00. Do you want to:\n-Say that you have an appointment to be to?\n-Go into his office?\n-Start yelling and throwing things around the room?\n-Run out?").toLowerCase();
        
            if(work == "say that i have an appointment" || work == "say that i have an appointment to be to" || work == "appointment" || work == "say i have an appointment" || work == "appointment to be to" || work == "say i have an appointment to be to" || work == "run out" || work == "run" || work == "run away"){
                CallFromBoss();
            }
        }
    function CallFromBoss(){
        var callfromboss = confirm("On your way home, you wonder how you're going to handle work tomorrow. Should you call in sick? Or are you going to go back to work and just face it? You're thinking about this when you get a call from your boss. Do you answer it?");
            if (callfromboss){
                alert("You answer the call. You say 'Hello?'");
                PhoneCall();
            }
    }
// Phone Call from boss
    
    function PhoneCall(){
        var phonecall = confirm("'Hey, "+playerName+"! I'm sorry if I'm interrupting your appointment. This just couldn't wait! I wanted to offer you a position in the company. I think you'd be perfect for it, and I was hoping to have an answer by tomorrow morning. I'll email over the details of the position. Sound good?'");
        
            if(phonecall){
                alert("'Awesome! I'll send over those details soon!'");
                FoodVendor();
            }
    }
// Food vendor
    function FoodVendor(){
        var hungry = prompt("As you continue to drive, you see food vendors on the side of the roads and realize how hungry you are. Do you want to:\n-Stop at a food vendor?\n-Wait until you get home?").toLowerCase();
            if(hungry == "stop at a food vendor" || hungry == "stop at a vendor" ||hungry == "food vendor" || hungry == "vendor"){
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
                PhoneCallFoodVendorChoice();
            }
    }
    
    function CallVendorChoice(){
        var callvendorchoice = prompt("Would you like to return to:\n-The phone call?\nThe food vendor?").toLowerCase();
        if(callvendorchoice == "phone call"){
            CallFromBoss();
        }
        else if(callvendorchoice == "food vendor"){
            VendorOptions();
        }

        }

}