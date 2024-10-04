
//to find a given oject is empty or not?//(Object.keys(obj).length>0)

let obj={eid:101,
    enamae:'nanda',
    salary:45000
}
let key={};
if (Object.keys(obj).length>0){
    console.log('not empty object')
}
else{
    console.log('empty object')
}

//ex 1

let one={
    eid:201,
    ename:'kumar',
    salary:45000
}
let keys={};
if (Object.keys(one).length>0){
    console.log('not empty object')
}
else{
    console.log('empty object')
}
//ex  3

let emp={
    ename:'nanda',
    id:30,
    sal:303030
}
if (Object.values(emp).length>0){
    console.log('not a empty object')
}
else{
    console.log('empty object')
}

//ex 4
//frozen method(we can not update anything or we can't add any thing in object)

let value={
    eid:190,
    ename:'nanda',
    loc:'pune'
}
Object.freeze(value)
value.from=10;
console.log(value)

