//PART 1 - Control Flow Exercise: The Marathon Runner

//Creating a variable
var time = prompt("What was your best marathon time?");

//Statements
  //If their time was between 4 to 5 hours, alert the user that their time was average.
    //If the time was between 2 to 4 hours then alert the user that their time was excellent.
      //If the time was greater than 5 hours, alert the user that they need to speed up!
if (time>=4 && time<=5){
  alert("Your time was average!");
}else if (time>=2 && time<4) {
  alert("Your time was excellent!");
}else {
  alert("You need to speed up!");
}
