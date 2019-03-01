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

/* switch(insideCastle){
case "upstairs":
case "go upstairs":
case "tale elevator":
var upstairs = prompt("You walk a long flight of stairs to top floor of the castle.");
Castle();
break;
case "downstairs"
}

while(!confirm("are you sure you want"+playName+" as a name?)){
playerName = prompt("What name do you want?");
}

var inventory ={
arrows:0;
maxArrows:100;
}

var purchase = prompt("welcome to the shop, what would you like to buy?\n-arrows:"+arrowsShop).toLowerCase();
if(purchase == "arrows" || purchase == "arrow){
var arrowCon = prompt("How many arrows?");

for(i = 1; i <= arrowCon; i++){
inventory.arrows ++;
inventory.coins --;
console.log("You have "+inventory.arrows+" arrows");
}
}
*/

var inventory ={
flashlight:0,
maxFlashlight:1,
bat:0,
maxBat:1,
kitchenknife:0,
maxkitchenKnife:1,
}


Game();

function Game(){
var playername = prompt("What is your name?");
var readytoplay = confirm ("Welcome to The Job, "+ playername +". Are you ready to play?");
    if(readytoplay){
        Work();
    }
    else{
        alert("Come back when you're ready!");
    }
    
Work();
    
// Work Function
    
    function Work(){
        var work = prompt("It has been a long day at work. You are irritated and nervous. Your boss has been calling people into his office all day. You notice that the people leaving his office don't exactly look happy, and you know there have been rumors about an employee reduction within the company. You become more worried when your boss steps out of his office and calls you in. It's already 5:00. Do you want to:\nA. Say that you have an appointment to be to?\nB. Go into his office?\nC. Start yelling and throwing things around the room?\nD. Run out?").toLowerCase();
        
            if(work == "a" || work == "say that i have an appointment to be to" || work == "say i have an appointment to be to" || work == "say i have an appointment" || work == "say that i have an appointment" || work == "appointment"){
                CallFromBossAppt();
            }
            
            else if(work == "b" || work == "office" || work == "go into his office" || work == "go into office"){
                alert("You walk into the office.");
                Office();
            }
            else if(work == "c" || work == "yell" || work == "throw things around the room" || work == "yell and throw things around the room"){
                alert("Everyone goes silent as you yell and throw things around the room. About 30 seconds after you've started, you see security walking through the door. You try to run away, but they catch you and force you to exit the building.")
                Security();
            }
            else if(work == "d" || work == "run out" || work == "run" || work == "run away"){
                CallFromBossRun();
            }
            
            else{
                alert("I don't know what that means.");
                Work();
            }
        }
    function CallFromBossAppt(){
        var callfrombossappt = confirm("On your way home, you wonder how you're going to handle work tomorrow. Should you call in sick? Or are you going to go back to work and just face it? You're thinking about this when you get a call from your boss. Do you answer it?");
            if (callfrombossappt){
                alert("You answer the call. You say 'Hello?'");
                PhoneCallAppt();
            }
            else{
                alert("'Hey, "+playername+"! I was just calling to let you know that I wanted to offer you a position in the company.'");
                FoodVendor();
            }
    }
    
    function Office(){
        var jobposition = prompt("Once you are seated, your boss begins to talk about cutting costs within the company. Your palms get sweaty. Then, he surprises you. He says 'We are cutting costs, but we are also improving management. I would like to offer you my job. I will be moving to HQ. What do you think?'\nA. Yes!\nB. No!").toLowerCase();
        
        if(jobposition == "a" || jobposition == "yes" || jobposition == "yes!"){
            alert("'Great! You'll start next week. In the meantime, I will be training you.' He shakes your hand before you leave.");
            
        }
        else if(jobposition == "b" || jobposition == "no" || jobposition == "no."){
            alert("'Okay...I'm sorry to hear that. Let me know if you change your mind. I will have to know by tomorrow. Have a good day.'");
            
        }
        else{
                alert("I don't know what that means.");
                Office();
            }
        
    }
    
    function Security(){
        var security = alert("That was embarrassing. You begin to head home.");
    }
    
// Phone Call from boss
    
    function PhoneCallAppt(){
        var phonecallappt = confirm("'Hey, "+playername+"! I'm sorry if I'm interrupting your appointment. This just couldn't wait! I wanted to offer you a position in the company. I think you'd be perfect for it, and I was hoping to have an answer by tomorrow morning. I'll email over the details of the position. Sound good?'");
        
            if(phonecallappt){
                alert("'Awesome! I'll send over those details soon!'");
                FoodVendor();
            }
    }
    function CallFromBossRun(){
        var callfrombossrun = confirm("You don't stop running until you get to your car. Once you get into your car, you wonder if that was really the right decision to make. It seemed kind of crazy. How are you going to go back to work tomorrow after having run out like that? Your phone rings. You look down and see your boss's name on the screen. How do you talk to him after having run out like that? Do you want to answer it?");
            if (callfrombossrun){
                alert("You answer the call. You say 'Hello?'");
                PhoneCallRun();
            }
            else{
                alert("You let the call go to voicemail. A few seconds later, a voicemail notification pops up on your phone. You decide to listen to it.\n'+playername+...I don't know what happened just barely...Frankly, that was very unprofessional, and I'm confused. If you have a logical explanation, feel free to call me back. If not, don't bother coming to work tomorrow.'\nYou wonder why he didn't just fire you over the phone if he was going to before you ran out.");
                    FoodVendor();
                }
    }
    
    function PhoneCallRun(){
        var phonecallrun = confirm("'"+playername+"? What just happened? That seemed very unprofessional. I don't know what to say. I'm sorry for doing this over the phone, but I'm going to have to let you go.'");
        
            if(phonecallrun){
                alert("Your boss hangs up.");
                FoodVendor();
            }
            else{
                    alert("'If you can give me a logical explanation, I will consider letting you come back in tomorrow.'");
                        FoodVendor();
            }
    }
    
// Food vendor
    function FoodVendor(){
        var hungry = prompt("You begin to drive home. As you drive, you see food vendors on the side of the roads and realize how hungry you are. Do you want to:\nA. Stop at a food vendor?\nB. Wait until you get home?").toLowerCase();
            if(hungry == "a" || hungry == "stop at a food vendor" || hungry == "stop at a vendor" ||hungry == "food vendor" || hungry == "vendor" || hungry == "food" || hungry == "stop"){
                VendorOptions();
            }
            else if(hungry == "b" || hungry == "wait" || hungry == "wait until i get home"){
                Home();
            }
            else{
                    alert("I don't know what that means.");
                    FoodVendor();
                }
        }
    
   function Home(){
        alert("When you get home, you sit on your couch and watch TV");
        var breakin = prompt("You wake up to the sound of breaking glass. The TV is still on. You look at the clock. It's been an hour since you've gotten home. You get off of your couch and try to find something to help you investigate the broken glass. You know where a bat, a flashlight, and a kitchen knife are. The problem is, they're all in different areas of the house. Which one do you want to go for?\n-Bat\n-Flashlight\n-Kitchen knife").toLowerCase();
        
        switch(breakin){
        case "bat":
        var bat = alert("You start to walk to your bedroom to get your bat.");
                confirm("You get to your bedroom and you can see the bat with the moonlight shining in through your window. Do you pick it up?");
                if(bat){
                    alert("You pick up the bat and begin to leave your room.");
                }
                else{
                    alert("You decide to leave the bat. You begin to leave the room.");
                    var noBat = prompt("Do you want to try to grab the flashlight? the kitchen knife? or do you want to stay bare-handed?\n-Flashlight\n-Kitchen knife\n-Nothing").toLowerCase();
                    switch(noBat){
                        case "flashlight":
                            var flashlight = alert("You work your way to the garage where you know you have a heavy-duty flashlight.");
                            confirm("When you get to the garage, you find the flashlight. Do you pick it up?");
                            if(flashlight){
                                
                            }
                    }
                }
        break;
        case "flashlight":
        }
        
        case "kitchen knife":
    }
    
    function VendorOptions(){
        var foodchoice = prompt("You pull off to the side of the road and take a look at your options. Do you want a: \n-Hot dog\n-Hamburger\n-Taco").toLowerCase();
               if(foodchoice == "hot dog" || foodchoice == "hamburger" || foodchoice == "taco"){
                   alert("You finish your "+foodchoice+" before getting back into your car.");
                   DriveHome();
               }
                else{
                alert("I don't know what that means.");
                VendorOptions();
            }

    }
    
// Drive home w people following
    function DriveHome(){
        var follower = prompt("You are now 10 minutes from home. You notice a black sedan that has been following you since you left the food vendor. Do you want to:\nA. Speed up?\nB. Just keep driving and see if they stop following you?\nC. Try to run them off the road?\nD. Call the cops?").toLowerCase();
            if(follower == "a" || follower == "speed up"){
                SpeedUp();
            }
            else if(follower == "b" || follower == "keep driving"){}
                
            else if(follower == "c" || follower == "try to run them off the road" || follower == "run them off of the road" || follower == "run them off the road" || follower == "try to run them off of the road"){}
            else if(follower == "d" || follower == "call cops" || follower == "call the cops"){}
            else{
                alert("I don't know what that means.");
                DriveHome();
            }
    }
    
    function SpeedUp(){
        var speedup = prompt("The black sedan speeds up to catch up to you. You start weaving in between cars to try to lose them. You hear sirens. The cops are coming up close on you. Do you:\nA. Go faster\nB. Slow down for the cops.").toLowerCase();
                if(speedup == "a" || speedup == "go faster" || speedup == "faster"){
                    alert("You go even faster. The cops speed up. You look through your rearview mirror and can't see the black sedan anymore. All of the sudden, you feel something hit the passenger side of the car. The black sedan is trying to push you into the median! You try to push back, but the sedan has already caught you off guard. The sedan takes another shot and you end up hitting the cement medians going 120 mph. Everything goes dark.");
                    CallVendorChoice();
                }
                
                else if(speedup == "b" || speedup == "slow down" || speedup == "slow down for the cops" || speedup == "slow down for cops"){}
                else{
                alert("I don't know what that means.");
                SpeedUp();
            }
    }
    
    function CopChase(){}
    
    
    function CallVendorChoice(){
        var callvendorchoice = prompt("Would you like to:\nA. Return to the phone call\nB. Return to the food vendor\nC. Quit").toLowerCase();
        if(callvendorchoice == "a" || callvendorchoice == "phone call"){
            CallFromBoss();
        }
        else if(callvendorchoice == "b" || callvendorchoice == "food vendor"){
            VendorOptions();
        }

        
        else if(callvendorchoice == "c" || callvendorchoice == "quit"){
           Quit(); 
        }
        else{
                alert("I don't know what that means.");
                CallVendorChoice();
            }
    }


    function Quit(){
        while(confirm("Are you sure you want to quit?")){
            alert("You have chosen to quit the game.");
            Game();
        }
        while(!confirm("Are you sure you want to quit?")){
            CallVendorChoice();
//        var quit = confirm("Are you sure want to quit?")
//
//        if(quit){
//            alert("You have chosen to quit the game.");
//            Game();
//        }
//        else{
//            CallVendorChoice();
//        }
    }
    
}
}