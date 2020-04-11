// exercices 1
var w = 2;
var x = 5;
var y = 30;
var z = 15;
var array = [w, x, y, z];
var Maxnumber = Math.max.apply(Math, array);
console.log(Maxnumber);

//xcercices 2
var readline = require('readline').createInterface({
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
  
// exercices 3
  
var hiddenNumber = 24;
var readline2 = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
  })
  readline2.question(`enter number ?`, (number) => {
    function verify(number){
      if (number < hiddenNumber) {
          console.log(`hidden number is tallest!`)
      }if (number > hiddenNumber) {
          console.log(`hidden number is smallest!`)
      }else {
        console.log(`$$$$$youn found!$$$$$`)
      }
    }
    console.log(verify(number));
    readline2.close()

  })

// exercices 4
var n = 0;
while(n !=100);{
    console.log(n);
    n ++;
}

// exercices 5
var n = 0;
while(n !=100);{
    console.log(n);
    n = n+2;
}
  
// exercices 6

// exercices 7


// exercices 8

var n = 0;
var symbol = "*"
while (n != 6){
    console.log(n*symbol)
    n ++;
}

// exercices 9
for (var i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log("FIZZBUZZ");
    } 
    else if (i % 5 === 0) {
      console.log("BUZZ");
    } 
    else if (i % 3 === 0) {
      console.log("FIZZ");
    } 
    else {
      console.log(i);
    }
}