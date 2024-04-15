
    
var input=document.getElementById("inp")

var randomnum=Math.floor(Math.random()*10)+1

function guesson(){
    var enterednum=prompt("Enter the guessed number")
     
if(randomnum == enterednum)
{
    alert("You guessed correct number")
    console.log("You guessed correct number" +enterednum)
}
 else if(randomnum < enterednum) {

    alert("Too High")
    console.log("Too High" +enterednum)
 }
else if(randomnum > enterednum){
    alert("Too low")
    console.log("Too low" +enterednum)
}
}
