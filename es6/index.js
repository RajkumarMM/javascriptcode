import Teacher, {promote} from "./teacher";
import { Person } from "./person";

//1) var let const

// var = function or global scope
// let = block scope and reassign it.
//const = constants similar to let key word block scope//

//function sayHello() {
//    for (let index = 0; index < 5; index++){
//        console.log(index);
//    }
//    //console.log(index); //index is not define because let is block scope variable
//}

//sayHello();

// const 
//const x = 5;

//x = 4;// const key word variable not to reAssign





//2) object

//const person = {
//    name : 'raj',
//    walk : function() {},
//    talk() {}
//};

//person.talk();
//person['name'] = 'ram';
//console.log(person['name']);



// 3) this key word in js

//const person = {
//        name : 'raj',
//       talk() {
//        console.log(this);   // this keyword is refrece current object
//       }
//    };

//person.talk(); //always  return current object

//const talk = person.talk
//console.log(talk);
//talk();//  return winow object  because calling a method in different way.
//solve this problem using bind method.
//const talk = person.talk.bind(person);// now this retuning a current person object.
//talk();


//4) Arrowfunction...

//const square = number => number * number; // if you use single return command in this function no need return keyword..

//console.log(square(4));

//const jobs = [
//    { id : 1, isActive: false},
//    { id : 2, isActive: true},
//    { id : 3, isActive: true}
//];
//
//const active = jobs.filter(job => job.isActive);
//console.log(active);



//arrow and this

//const person = {
//    talk(){
//        setTimeout(() => { //if you using normal function here thats return window object..
//            console.log(this);// but youu use  arrowfunction thats return person object...
//        }, 1000);
//    }
//};
//
//person.talk();




// mapmethod es6

//const colors = ['red', 'green', 'blue'];
//
//const items = colors.map( color => `<li>${color}</li>`); //not change original array
// console.log(items);




//object destructuring

//const address = {
//    street: 'gandhi st',
//    city: '',
//    country: ''
//};

//const street = address.street;
//const city = address.city;
//const country = address.country;

//const { street, city, country} = address; // same name const
//console.log(street);
//const { street: st } = address;  // different name const
//console.log(st);

//spread operator

//const first = [1, 2, 3];
//const second = [4, 5, 6];

//const combined = first.concat(second);// norrmal concat...
//const combined = [...first, 'a', ...second, 'b'] //spread operator concat...
//console.log(combined);


//const first = { name: 'raj'};
//const second = { job: 'instructor' };
//
//const combined = { ...first, ...second, location: 'australia'};
//console.log(combined);


//js classes



const person = new Person('raj');
console.log(person.name);



//const teacher = new Teacher("hinata", 'mca');

//console.log(teacher.name);

//modules
//imports
//exports
// defalut = import ..... from '';
// named  = import {.....} from '';


