///1 
//console.log((0.1 + 0.2) === 0.3);
// log return false because 0.1 + 0.2 not exactly equal to 0.3. === that strictly compare value.

//2
//(function() {
    //var a = b = 3;
    //console.log(typeof a);
//})();

//console.log(typeof a); // ?
//console.log(typeof b); // ?
// log returns typof a = undefined typeof b= number. because b=3 is global variable because b variable not declare
//in let and const and var , a declare in this function so var a= b; is accessble only in the function so log returns a = undefined 

//3 doubt in third quetion
//let foo = {
//    bar: function() {
//        return this.baz;
//    },
//    baz: 1
//};
//
//(function(){
//    return typeof arguments[0]();
//})(foo.bar);



//4 doubt
//for (var i = 0; i < 3; i++) {
//    setTimeout(function() {
//        console.log(i);
//    }, 1000);
//}
//
//for (var i = 0; i < 3; i++) {
//    (function(i) {
//        setTimeout(function() {
//            console.log(i);
//        }, 1000);
//    })(i);
//}
//
//for (let i = 0; i < 3; i++) {
//    setTimeout(function() {
//        console.log(i);
//    }, 1000);
//}

//5
let a = {};
let b = { key: 'b' };
let c = { key: 'c' };

a[b] = 123;
console.log(a[b]);
console.log(a);
a[c] = 456;
console.log(a[c]);
console.log(a[b]);
console.log(a);
//console.log(a[b]);
