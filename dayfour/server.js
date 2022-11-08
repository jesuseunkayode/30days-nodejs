// //using ' ' to print
// console.log('1 : hello world !');

//using " " to print 
// console.log("2: this will also work");
// let str =  'nodejsera';
// let val = 25;
// console.log(str);
// console.log('value of val: ', val);
// console.log('5: hi', 'it will be printed after');

// let value = 10;
// console.log('The amount of value is ', value)
// console.clear();
//  value *= value;
// console.log('The new amount of value is', value);
//  console.clear();

// //console to count
// console.time('calculation');
// console.count('kayode');
// console.count('kayode');
// console.count('owolabi');
// console.count('jesuseun');
// console.count('jesuseun');
// console.count('blessing');
// console.count();
// console.timeEnd('calculation');


//how to use console to determine taken to perform calculation
console.time('calculation');
let m = 40;
let u = 5;
let result = m / u;
if(result == 4) {
    console.log('You are right');
} else {
    console.warn('You are wrong');
}
console.timeEnd('calculation');
