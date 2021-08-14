var buttons=document.querySelectorAll(".option");
var options=["Rock","Paper","Scissor"];
var rematch=document.querySelector(".rematch");

buttons.forEach(function(btn){
    btn.addEventListener('click',function(){
        switch(btn.id)
        {
            case "rock":
                rps(1);
                break;
            case "paper":
                rps(2);
                break;
            case "scissor":
                rps(3);
                break;
        }
    })
})

function rps(userValue)
{
document.querySelector(".container").classList.add("hide");
var comValue= Math.floor(Math.random()*3)+1;
var result;
// 1- rock
// 2- paper
// 3- scissor
switch(userValue)
{
    case 1: 
    if(comValue==1)
    result="DRAW";
    else if(comValue==2)
        result="LOST"
    else if(comValue==3)
        result="WON";
        break;
    case 2: 
    if(comValue==1)
    result="WON";
    else if(comValue==2)
    result="DRAW";
    else if(comValue==3)
    result="LOST"
    break;
    case 3:
        if(comValue==1)
        result="LOST"
        else if(comValue==2)
        result="WON";
        else if(comValue==3)
    result="DRAW";
       
}
var userSrc,comSrc;
switch(userValue)
{
    case 1: userSrc="assets/images/rock.jpeg";
        break;
    case 2: userSrc="assets/images/paper.jpg";
        break;
    case 3:userSrc="assets/images/scissor.jpeg";
}
switch(comValue)
{
    case 1: comSrc="assets/images/rock.jpeg"
        break;
    case 2: comSrc="assets/images/paper.jpg"
        break;
        case 3:comSrc="assets/images/scissor.jpeg"
}

   document.getElementById("userOption").src=userSrc;
   document.getElementById("computerOption").src=comSrc;
    document.getElementById("result").innerHTML=result;
    document.querySelector(".result").classList.remove("hide");
    document.querySelector(".heading").classList.add("hide");
    rematch.addEventListener('click',function(){
        document.querySelector(".result").classList.add("hide");
        document.querySelector(".container").classList.remove("hide");
        document.querySelector(".heading").classList.remove("hide");
    })
}