//declare varible
let breakFast = ['idly','pongal','puri'];

//pop method
breakFast.pop();
console.log(breakFast);

//push method
breakFast.push('puri');
console.log(breakFast);

//shift method
breakFast.shift();
console.log(breakFast);

//unshift method
breakFast.unshift('idly');
console.log(breakFast);

//map method return new array
let mappedArray = breakFast.map((e) => {
    if (e.length <= 4) {
        return e;
    }
});
console.log('mapped array',mappedArray);

//filter method
let filteredArray = breakFast.filter((e) => {
    if (e.length <= 4) {
        return e;
    }
});
console.log(filteredArray);

// reduce method doubt
let  reduceArray = breakFast.reduce((previousValue, currentValue) => {
        let total;
        return total = previousValue + currentValue;
});
console.log('reduce array',reduceArray);
console.log(breakFast);

//foreach method
//show element function
function showElements(array, anyquery) {
    let list = document.querySelectorAll(anyquery);
//list[0].innerHTML = "dosa";
array.forEach((item, index) => {
    list[index].innerHTML = item; 
});
}
showElements(breakFast, '.item');

//lanch and dinner array...
var lanch = ['meals', 'chappathi', 'biriyani'];
var dinner = ['fried rice', 'barotta', 'idly'];

//call the showelements function
showElements(lanch, '.item1');
showElements(dinner, '.item2');