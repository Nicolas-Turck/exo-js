// exercices 1
var w = 2;
var x = 5;
var y = 30;
var z = 15;
var array = [w, x, y, z];
var Maxnumber = Math.max.apply(Math, array);
console.log(Maxnumber);

//ecercices 2
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`how old are you ?`, (age) => {
    function testNum(age) {
        if (age < 0) {
            console.log(`enter your realy age please!`)
        }if (age >= 21) {
            console.log(`access Ok!`)
            if (age%2 == 0){
                console.log(`your age is pair!`)
                }else {
                    console.log(`your age is impair!`)
            }
        } 
      }
      
    console.log(testNum(age));
    
    readline.close()
  })