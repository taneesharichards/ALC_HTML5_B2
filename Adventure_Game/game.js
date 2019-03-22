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

var invList = function(){
    alert("flashlight = "+inventory.flashlight+"\nbat = "+inventory.bat+"\nknife = "+inventory.kitchenknife);
}

Game();

function Game(){
var playername = prompt("What is your name?");
var readytoplay = confirm ("Welcome to Night Terrors, "+ playername +". Are you ready to play?");
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
                FoodVendor();
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
                FoodVendor();
            }
            else if(work == "inventory" || work == "show inventory"){
                    invList();
                    Work();
                }
            
            else{
                alert("I don't know what that means.");
                Work();
            }
        }

    
    function Office(){
        var jobposition = prompt("Once you are seated, your boss begins to talk about cutting costs within the company. Your palms get sweaty. Then, he surprises you. He says 'We are cutting costs, but we are also improving management. I would like to offer you my job. I will be moving to HQ. What do you think?'\nA. Yes!\nB. No!").toLowerCase();
        
        if(jobposition == "a" || jobposition == "yes" || jobposition == "yes!"){
            alert("'Great! You'll start next week. In the meantime, I will be training you.' He shakes your hand before you leave.");
            FoodVendor();
        }
        else if(jobposition == "b" || jobposition == "no" || jobposition == "no."){
            alert("'Okay...I'm sorry to hear that. Let me know if you change your mind. I will have to know by tomorrow. Have a good day.'");
            FoodVendor();
            
        }
        else if(Office == "inventory" || Office == "show inventory"){
                    invList();
                    Office();
                }
        else{
                alert("I don't know what that means.");
                Office();
            }
        
    }
    
    function Security(){
        var security = alert("That was embarrassing. You begin to head home.");
        FoodVendor();
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
        else if(FoodVendor == "inventory" || FoodVendor == "show inventory"){
                    invList();
                    FoodVendor();
                }
            else{
                    alert("I don't know what that means.");
                    FoodVendor();
                }
        }
    
   function Home(){
        alert("When you get home, you sit on your couch in the living room and watch TV");
        var breakin = prompt("You wake up to the sound of breaking glass. The TV is still on. You look at the clock. It's been an hour since you've gotten home. You get off of your couch and try to find something to help you investigate the broken glass. You know where a bat, a flashlight, and a kitchen knife are. The problem is, they're all in different areas of the house. Which one do you want to go for?\n-Bat\n-Flashlight\n-Kitchen knife").toLowerCase();
        
        switch(breakin){
        case "bat":
                alert("You start to walk upstairs to your bedroom to get your bat.");
        var bat =  confirm("You get to your bedroom and you can see the bat with the moonlight shining in through your window. Do you pick it up?");
                if(bat && inventory.flashlight == 0 && inventory.kitchenknife == 0){
                    inventory.bat = 1;
                    alert("You pick up the bat and begin to leave your room. You hear the sound of breaking glass again. It's coming from the living room. You walk towards the sound. As you walk downstairs, you trip and fall.\nYou jolt awake. You're sitting in your chair at the office. You must have fallen asleep. What a relief.");
                    Congrats();
                }
               
                else{
                    alert("You decide to leave the bat. You begin to leave the room.");
                    var noBat = prompt("Do you want to try to grab the flashlight? the kitchen knife? or do you want to stay bare-handed?\n-Flashlight\n-Kitchen knife\n-Nothing").toLowerCase();
                    switch(noBat){
                            case "inventory":
                                                invList();
                                                Home();
                                                break;
                        case "flashlight":
                            alert("You work your way to the garage where you know you have a heavy-duty flashlight.");
                            var flashlight = confirm("When you get to the garage, you find the flashlight. Do you pick it up?");
                            if(flashlight && inventory.bat == 0 && inventory.kitchenknife == 0){
                                inventory.flashlight = 1;
                                alert("You pick up the flashlight and go back into the house. Upon entering, you hear more glass breaking. You look into your kitchen and see a figure against the window. You shine the light at it, but something hits you in the head.\nYou jolt awake. You're sitting in your chair at the office. Your coworker, Derek, has a rolled up newpaper in his hand.\n'That was a long nap there, "+playername+".");
                                Congrats();
                                
                            }
                            else{
                                alert("You leave the flashlight and go back into the house.");
                                var noBatnoFlash = prompt("Do you want to try to grab the kitchen knife? or do you want to stay bare-handed?\n-Kitchen knife\n-Nothing").toLowerCase();
                                switch(noBatnoFlash){
                                    case "kitchen knife":
                                        alert("You work your way to the kitchen.");
                                        var kitchenknife = prompt("On your way to the kitchen, you see the silhouette of someone standing in the corner of the room. Do you race for the knife or charge the figure?\n-Knife\n-Charge").toLowerCase();
                                        switch(kitchenknife){
                                            case "knife":
                                                alert("You start to run for the knife and you trip. You jolt awake. You're sitting in your chair at the office. You must have fallen asleep. What a relief.");
                                                Congrats();
                                                break;
                                            case "charge":
                                                alert("You charge the figure and trip over your table. You jolt awake. You're sitting in your chair at the office. You must have fallen asleep. What a relief.");
                                                Congrats();
                                                break;
                                                case "inventory":
                                                invList();
                                                Home();
                                                break;
                                                default:
                            alert("I don't understand that");
                            
                            Home();
                                        }
                                        break;
                                        case "nothing":
                                        alert("You hear the sound of breaking glass again. It's coming from the living room. You walk towards the sound. You see a figure standing against the window in your living room. You start to go towards it, but you trip.\nYou jolt awake. You're sitting in your chair at the office. You must have fallen asleep. What a relief.");
                                        Congrats();
                                        break;
                                        
                                }
                                        break;
                            }
                                        case "kitchen knife":
                                        alert("You work your way to the kitchen.");
                                        var kitchenknife = prompt("On your way to the kitchen, you see the silhouette of someone standing in the corner of the room. Do you race for the knife or charge the figure?\n-Knife\n-Charge").toLowerCase();
                                        switch(kitchenknife){
                                            case "knife":
                                                alert("You start to run for the knife and you trip. You jolt awake. You're sitting in your chair at the office. You must have fallen asleep. What a relief.");
                                                Congrats();
                                                break;
                                            case "charge":
                                                alert("You charge the figure and trip over your table. You jolt awake. You're sitting in your chair at the office. You must have fallen asleep. What a relief.");
                                                Congrats();
                                                break;
                                                default:
                            alert("I don't understand that");
                            
                            Home();
                                        }
                                        break;
                                                
                                    case "nothing":
                                        alert("You hear the sound of breaking glass again. It's coming from the living room. You walk towards the sound. You see a figure standing against the window in your living room. You start to go towards it, but you trip.\nYou jolt awake. You're sitting in your chair at the office. You must have fallen asleep. What a relief.");
                                        Congrats();
                                        break;
                                        
                                        case "inventory":
                                                invList();
                                                Home();
                                                break;
                                        default:
                            alert("I don't understand that");
                            
                            Home();
                                }
                            }
                            
                
                    
            
                break;
               
        case "flashlight":
                            alert("You work your way to the garage where you know you have a heavy-duty flashlight.");
                            var flashlight = confirm("When you get to the garage, you find the flashlight. Do you pick it up?");
                            if(flashlight && inventory.bat == 0 && inventory.kitchenknife == 0){
                                inventory.flashlight = 1;
                                alert("You pick up the flashlight and go back into the house. Upon entering, you hear more glass breaking. You look into your kitchen and see a figure against the window. You shine the light at it, but something hits you in the head.\nYou jolt awake. You're sitting in your chair at the office. Your coworker, Derek, has a rolled up newpaper in his hand.\n'That was a long nap there, "+playername+".'");
                                Congrats();
                            }
                            else{
                                alert("You leave the flashlight and go back into the house.");
                                var noflash = prompt("Do you want to try to grab the bat? the kitchen knife? or do you want to stay bare-handed?\n-Bat\n-Kitchen knife\n-Nothing").toLowerCase();
//                                var noBatnoFlash = prompt("Do you want to try to grab the kitchen knife? or do you want to stay bare-handed?\n-Kitchen knife\n-Nothing").toLowerCase();
                                switch(noFlash){
                                        case "inventory":
                                                invList();
                                                Home();
                                                break;
                                    case "bat":
                                        alert("You start to walk upstairs to your bedroom to get your bat. You see a figure against the window. You start to go towards it, but you trip.\nYou jolt awake. You're sitting in your chair at the office. You must have fallen asleep. What a relief.");
                                        Congrats();
                                        break;
                                        
                                        case "kitchen knife":
                                        alert("You work your way to the kitchen.");
                                        var kitchenknife = prompt("On your way to the kitchen, you see the silhouette of someone standing in the corner of the room. Do you race for the knife or charge the figure?\n-Knife\n-Charge").toLowerCase();
                                        switch(kitchenknife){
                                            case "knife":
                                                alert("You start to run for the knife and you trip. You jolt awake. You're sitting in your chair at the office. You must have fallen asleep. What a relief.");
                                                Congrats();
                                                break;
                                            case "charge":
                                                alert("You charge the figure and trip over your table. You jolt awake. You're sitting in your chair at the office. You must have fallen asleep. What a relief.");
                                                Congrats();
                                                break;
                                                
                                                case "inventory":
                                                invList();
                                                Home();
                                                break;
                                                
                                                default:
                            alert("I don't understand that");
                            
                            Home();
                                }
                                        break;
                                        
                                        case "nothing":
                                        alert("You hear the sound of breaking glass again. It's coming from the living room. You walk towards the sound. You see a figure standing against the window in your living room. You start to go towards it, but you trip.\nYou jolt awake. You're sitting in your chair at the office. You must have fallen asleep. What a relief.");
                                        Congrats();
                                break;
                                        default:
                            alert("I don't understand that");
                            
                            Home();
                                }
                                    
                                }
                break;
                                    
        case "kitchen knife":
                        alert("You work your way to the kitchen.");
                                        var kitchenknife = prompt("On your way to the kitchen, you see the silhouette of someone standing in the corner of the room. Do you race for the knife or charge the figure?\n-Knife\n-Charge").toLowerCase();
                                        switch(kitchenknife){
                                            case "knife":
                                                alert("You start to run for the knife and you trip. You jolt awake. You're sitting in your chair at the office. You must have fallen asleep. What a relief.");
                                                Congrats();
                                                break;
                                            case "charge":
                                                alert("You charge the figure and trip over your table. You jolt awake. You're sitting in your chair at the office. You must have fallen asleep. What a relief.");
                                                Congrats();
                                                break;
                                                
                                            case "inventory":
                                                invList();
                                                Home();
                                                break;
                                                
                                                default:
                            alert("I don't understand that");
                            
                            Home();
                                        }

                break;
                case "inventory":
                invList();
                Home();
                break;
                
                default:
                            alert("I don't understand that");
                            
                            Home();
        }
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
        var follower = prompt("You are now 10 minutes from home. You notice a black car that has been following you since you left the food vendor. Do you want to:\nA. Speed up?\nB. Just keep driving and see if they stop following you?\nC. Try to run them off the road?\nD. Call the cops?").toLowerCase();
            if(follower == "a" || follower == "speed up"){
                SpeedUp();
            }
            else if(follower == "b" || follower == "keep driving"){
                Followed();
            }
                
            else if(follower == "c" || follower == "try to run them off the road" || follower == "run them off of the road" || follower == "run them off the road" || follower == "try to run them off of the road"){
                CarWreck();
            }
            else if(follower == "d" || follower == "call cops" || follower == "call the cops"){
                CopChase();
            }
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
    
    function Followed(){
    alert("You keep driving. The car pulls up next to you. You look over. You see a gun and hear a shot. Everything goes dark.");
    CallVendorChoice();
}
    function CarWreck(){
        alert("You swerve into the car. You jolt awake. You're sitting in your chair at the office. You must have fallen asleep. What a relief.");
        Congrats();
    }
    
    
    function CopChase(){
        var cops = confirm("You call 911 and are told that there will be some cop cars coming to check out the situation, but when you see two cop cars pull out behind you, they flash their lights at you, indicating that they want you to pull over. Do you do it?");
        if(cops){
            alert("You begin to slow down, and so does the black sedan. As it passes you, you see a gun and hear a shot. You look down and see blood. Everything goes dark.");
            CallVendorChoice();
        }
        else{
            var pullover = confirm("You keep driving. You notice that there are now about 5 cop cars following you with their lights flashing. You look for the black sedan, but you can't see it. Do you pull over now?");
            if(pullover){
                var handsup = confirm("You pull over and the cop cars surround you. You hear them yelling at you to come out with your hands up. Do you walk out with your hands up?");
                if(handsup){
                    alert("You get out of the car and put your hands up. A cop comes over and puts you in handcuffs.\n\nONE MONTH LATER:\nToday is your hearing date. You have been found guilty of fleeing and eluding cops in your car. They were never able to find the black sedan, and there was no proof that it was ever there. You have been sentenced to one year in prison.");
                    CallVendorChoice();
                }
            }
        }
    }
    
    
    function CallVendorChoice(){
        var callvendorchoice = prompt("Would you like to:\nA. Return to the beginning\nB. Return to the food vendor\nC. Quit").toLowerCase();
        if(callvendorchoice == "a" || callvendorchoice == "work"){
            Work();
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
        function Congrats(){
            alert("Congratulations! You have made it through the game!");
            
        }
    
}
