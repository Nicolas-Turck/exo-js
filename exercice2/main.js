// get elemment choices and choosencolor and register in variable
var choices = document.getElementsByClassName("choice");
var choosenColor = document.getElementById("choosenColor");
/*start loop in all elem choice and register selected elem with click function and 
return element and add it to var color and change syle to choosen color with color var */
for (var iterator = 0; iterator < choices.length; iterator++) {
  choices[iterator].onclick = function() {
    var color = this.style.background;
    choosenColor.style.background = color;
  };
}