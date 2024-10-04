//Conditional statement assignmnt

//write a program to check if a number is divisible by 7 or not?

let num1=42;
if (num1%7===0){
    console.log('divisible by seven')
}
else{
    console.log('not divisible by seven')
} // output::divisible by seven

//if a number is multiple by 3 or not?

let num2=30;
if (num2%3===0){
    console.log('multiple by 3')
}
else{
    console.log('Not multiple by 3')
} // output::multiple by 3

//if a number is even or not?

let num3=45;
if (num3%2===0){
    console.log('even')
}
else{
    console.log('odd')
}//output::odd

// if a number is 3 digit or not?

let num4=345;
if(num4>=100 && num4<=999){
    console.log('3-digit number')
}
else{
    console.log('not a 3-digit number')
}//output::3-digit number

//print number is positive or not?
let num5=-2;
if (num5>0){
    console.log('number is positive')
}
else{
    console.log('number is a negitive')
}//output::number is a negitive

//find the greatest number in gieven two numbers?

let a=56;
let b=45;
if (a>b){
    console.log(a +'is greatest number')
}
else{
    console.log(b+'is greatest')
}//output::56is greatest number

//print least number in two numbers?

let c=452;
let d=223;
if (c<d){
    console.log(c+'is least number')
}
else{
    console.log(d+'is least number')
}//output::56is greatest number

//print greatest numbers in given 3-digit numbers?

let car=4124;
let bike=52242;
let can=5352;
if (car>bike & car>can){
    console.log('car is greatest')
}
else if(bike>car & bike>can){
    console.log('bike is greatest')
}
else{
    console.log('can is greatest')
}//output::bike is greatest

//least number in given three numbers?
let cal=131;
let van=2;
let man=4235;
if (cal<van & cal<man){
    console.log("cal is least")
}
else if(van<cal & van<man){
    console.log('van is least')
}
else{
    console.log("man is least")
}//output::van is least

//print given numbers in ascending order?
let men=[6234,7355,5325,3532];
men.sort()
    console.log(men)//output::[ 3532, 5325, 6234, 7355 ]

// check if a number is divisible by 7 or not using a ternary operator?
let cab=42;
cab%7===0?console.log('divisible by seven'):console.log('not divsible by seven')//output::divisible by 7

// check if a number is multiple of 3 or not using a ternary operator?
let gun=45;
gun%3===0?console.log('multiple by 3'):console.log('not multiple by 3')//output::multiple by 3

// check if a number is positive or not using a ternary operator?
let mon=-493;
mon>0?console.log('positive'):console.log('negitive')//output::negitive

//print even or odd for a given number using a ternary operator?
let com=43;
com%2===0?console.log('even'):console.log('odd')//output::odd

