//conditional statements...
//1.  if statement
//console.log(new Date().getHours());
if (new Date().getHours() < 18) {
    console.log("good day");
  }

//2. if else statement
if (new Date().getHours() < 18) {
    console.log("good day");
  }else{
    console.log("good evening");
  }

  //3. else if statement
  var age = 18;
  if (age > 18) {
    console.log("your eligible for voting");
  } else if (age === 18) {
    console.log("your age is 18 so you eligible for voting");
  }else{
    console.log("your not eligible for voting");
  }

  // switch statement
  //switch case use strict camparison (===).
  //new Date().getDay()
  let x = "0"
  switch (x) {
    case 6:
        console.log("Today is Saturday");
      break;
    case 0:
      console.log("Today is Sunday");
      break;
    default:
      console.log("Looking forward to the Weekend");
  }
  //console.log("0" === 0);
  //console.log("0" == 0);