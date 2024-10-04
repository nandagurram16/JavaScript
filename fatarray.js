
function changecolor(){
    console.log('hello')
}
changecolor()

/* fat array*/
//ananmous function

let a=100;
let changecolo=()=>{
console.log('hello nanda')
}
changecolo()
console.log(a)

//ex=2;

let add=(a,b)=>{
    let c=10
    console.log(a+b+c)
}
add(10,10)
add(10,2)
add(1,2,3)

//ex=3;

let num=(a,b,c)=>a+b+c;
let r1=num(1,2,3)
let r2=num(2,3,4)
console.log(r1)
console.log(r2)

//ex:4

let fat=(a,b,c)=>{
    let d=12;
    return a+b+c+d
}
let g1=fat(1,2,3,4)
let g2=fat(1,2,)
let g3=fat(10,10,20,12)
console.log(g1)
console.log(g2)
console.log(g3)

//ex:5

let array=(a,b,c)=>a+b+c
let r3=array('nanda','kumar','gurram')
console.log(r3)

//ex:3

let cap=(a,b,c)=>{
    let d=10;
    return a+b+c+d
}
let gap=cap(1,1,1,1)
console.log(gap)