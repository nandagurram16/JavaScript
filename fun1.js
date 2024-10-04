function num(a,b){
    console.log(a+b)
}
num(1,2,3)
num(1)
num(3,4)
num(4,"43")
num('nanda',3)

//ex1

function num(year){
    let cuurent_year=2020;
    return cuurent_year-year
}
let man=num(2000)
let man1=num(2020)
console.log(man)
console.log(man1)

//ex 2

function nm(month){
    let current_day=23;
    return current_day+month
}
let men=nm(12)
let men1=nm(20)
console.log(men)
console.log(men1)

//ex 3

function add(a,b){
    let c=2;
    return a+b+c
}
let r1=add(1,3,2)
console.log(r1)
let r2=add(1,2)
console.log(r2)

//ex 4

function sub(a,b){
    let c=4;
    return a+b+c
}
let van=sub(1,5,4)
let vann=sub(2,3)
console.log(van)
console.log(vann)

//string literal

let eid=101;
let ename='nanda kumar'
console.log('employed.id:'+eid,'enames:'+ename)
console.log(`employee id:${eid} and Name:${ename}`)

//. Can you write a function that takes an array and reverses the order of the elements?

function num(arr){
    return arr.reverse();
}
const array=[10,20,30,40];
const reverse=num(array);
console.log(reverse)