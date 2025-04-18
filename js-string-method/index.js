//string method
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//lenth method
let length = text.length;
console.log(length);

//charAt method
let char = text.charAt(0);
console.log(char);
//at method
console.log(text.at(2));

//javascript slice
let part = text.slice(0, 4);
console.log(part);

//substring method
let part1 = text.substring(0, 7);
console.log(part1);

//upper case and lowercase method

console.log(text.toLowerCase());
console.log(text.toUpperCase());

//cocat method
var text1 = 'hello';
let text2 = 'raj';

console.log(text1.concat(" ", text2));

//trim method
text1 = '   hello   ';
console.log(text1.trim());

//replace method
console.log(text1.replace("hello", "hi"));

//replaceall
let line = "I love cats. Cats are very easy to love. Cats are very popular."
line = line.replaceAll("Cats","Dogs");
line = line.replaceAll("cats","dogs");
console.log(line);