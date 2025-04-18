//looping statements...
//1. for loop
const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
//console.log(cars.length);
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

//2.The For In Loop
//for (key in object) {
  // code block to be executed
//}
 console.log("The For In Loop");
for (let x in cars) {
    console.log(cars[x]);
  }

//3.The For Of loop
console.log("The For Of loop");
for (let x of cars) {
    console.log(x);
  }

  //4.The While Loop
 // while (condition) {
    // code block to be executed
  //}
  console.log("while loop");
  let i = 0;
  while (i < 10) {
    console.log(i);
    i++;
  }
  //5. the do while...
  //if condition is false loop excuted one time. that is do while loop.
  console.log("do while loop");
  let j = 1;
  do {
    console.log(j);
    j++;
  }
  while (j < 10); 

  //break and continue
  console.log("break and continue");
  for (let i = 0; i < 10; i++) {
    if (i == 3) {
        //break;
        continue;
    }
    console.log(i);
    
  }
  