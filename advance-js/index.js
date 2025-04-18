//1 scope in nested function

//let a = 10;// variable in global scope
//function outer() {
//    let b = 20 ;//outer function scope variable
//    function inner() {
//        let c = 30; // inner function scope variable
//        console.log(a,b,c); //lexical scope access the variable.
//    }
//    inner(); // invoked(function call) the inner function...
//}
//outer();

//2 closure
//state maintaining
//function outer() {
//    let counter = 0;
//    function inner() {
//        counter++;
//        console.log(counter);
//    }
//    return inner;
//}
////outer();// every outer function invoking counter variable value is zero
//const fn = outer();
//fn();
//fn();


//function outer(a) {
//    function design() {
//        console.log("****************");
//    }
//    function inner(b) {
//        let temp = 1;
//        for (let index = 0; index < a; index++) {
//            temp*=b;
//        }
//        design();
//        console.log(temp);
//        design();
//    }
//    return inner;
//}


//const squre = outer(2);// pass a = 2 and ve the function in variable
//squre(5);//that variable is function pass b= 5;



// function currying

//function sum (a, b, c){    //normal function to use the function of sum
//    return a + b + c;
// }
//
// console.log(sum(1, 2, 3)); //mulyiple arguments in one paranthese

//function sum(a) {  // function currying is seperate argument in sequence of nested function and that functions take the arguments one by one.
//    return function(b){
//        return function(c){
//            return a + b + c;
//        }
//    }
//}
//console.log(sum(1)(2)(3));


// function currying in arrow function

//const sum = a => b => c => a + b + c;
//console.log(sum(1)(2)(3));


//const eveluvate = operator => num1 => num2 => {
//    (operator == "sum") ?  console.log(num1 + num2) : (operator == "sub") ? console.log(num1 - num2) : (operator == "multiply") ? console.log(num1 * num2) : (operator == "divide") ? console.log(num1 / num2) : console.log("Inavid operator"); 
//}
//eveluvate('sum')(2)(2);
//eveluvate("sub")(2)(2);
//let sum = eveluvate('sum');
//sum(2)(2);

//this keyword
// implicit binding
 //const person = {
   // name: 'raj',
   // sayMyName(){
   //     console.log(`my name is ${this.name}`);
   // },
 //}

//person.sayMyName()

//explict binding
//function sayMyName(){
//    console.log(`my name is ${this.name}`);
//}
//sayMyName.call(person)

//new binding
//function person(name) {
//    this.name = name;
//}
//const p1 = new person('raj');
//console.log(p1.name);

//default binding
//globalThis.name  = 'kumar'; // check global scope of this
//
//function sayMyName(){
//
//  console.log(`my name is ${this.name}`);
//}
//sayMyName();


//prototype
//function person(fName, lName) {
//  this.firstName = fName;
//  this.lastName = lName;
//}
//
//const person1 = new person('raj', 'kumar');//construtor function
//const person2 = new person('ram', 'kumar');
////person1.fullName = function () {
////  console.log(`${this.firstName} ${this.lastName}`);
////}
////person1.fullName()
//person.prototype.fullName = function() {
//  return `${this.firstName} ${this.lastName}`;
//}

//console.log(Object.prototype);

//const objectPrototype = Object.getOwnPropertyNames(Object.prototype);
//console.log(objectPrototype);
//objectPrototype.forEach(item => console.log(item))

//console.log(person1.fullName());
//console.log(person2.fullName());


//iterator and iterable
//?????


//generator 
//function* generatorOne() {
//  let j = 0;
//  while (true) {
//    j++
//    yield j;// return j and wait return call this function and store the j last value and continue in same place.
//  }
//  
//}
//
//const obj1 = generatorOne();
////console.log(obj1.next().value);
////console.log(obj1.next().value);
////console.log(obj1.next().value);
//
//
//function display(objGen) {
//  for (let index = 0; index < 10; index++) {
//    console.log(objGen.next().value);
//  }
//}
//
//display(obj1);
//display(obj1);
//const obj2 = generatorOne();
//display(obj2);


//sample2 generator function use case

//function *generatorTwo() {
//  let j = 0;
//  while (true) {
//    j++;
//    if (j > 5) {
//      j = 1
//    }
//    yield j;
//  }
//}
//const obj3 = generatorTwo();
////console.log(obj3.next().value);
////console.log(obj3.next().value);
////console.log(obj3.next().value);
////console.log(obj3.next().value);
////console.log(obj3.next().value);
////console.log(obj3.next().value);
//
//function display2(objGen) {
//  for (let index = 0; index < 15; index++) {
//    console.log(objGen.next().value);
//  }
//}
//display2(obj3);
//display2(obj3);
//display2(obj3);



//sample 3 use cse of generator
let arr = [23, 24, 25, 26, 27,28];
function* generatorThree() {
  let j = 0;
  while (true) {
    if (j >= arr.length) {
      j =0;
    }
    yield arr[j];
    j++;

  }
}

const obj4 = generatorThree();
//console.log(obj4.next().value);
//console.log(obj4.next().value);
//console.log(obj4.next().value);
//console.log(obj4.next().value);
//console.log(obj4.next().value);
//console.log(obj4.next().value);
//console.log(obj4.next().value);
//console.log(obj4.next().value);
//console.log(obj4.next().value);
//console.log(obj4.next().value);
function display3(objGen) {
  for (let index = 0; index < 10; index++) {
    console.log(objGen.next().value);
  }
}

display3(obj4);
//display3(obj4);
//display3(obj4);
