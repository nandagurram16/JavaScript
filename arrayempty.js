let enames=['nanda','kumar','nandu'];
let eid=[];
if(enames.length>0){
    console.log('given array is not empty')
}
else{
    console.log('empty array')
}
//ex 1
function source(enames){
    let ename='lion';
    if(enames==ename){
        return true
    }
    else{
        return false
    }
}
let nanda=source('tiger')
console.log(nanda)

//ex 2
function login(enames){
    let names='tiger';
    if(enames=names){
        return true
    }
    else{
        return false
    }
}
let a=login('tiger');
console.log(a)

//ex 3
function add(names){
    let sub='flower';
    add==sub?console.log(true):console.log(false)
}
let b=add('lotus');
console.log(b)

//ex 4
function sub(names){
    let add='nanda'
    sub==add?console.log('equal'):console.log('not equal')
}
let man=sub('nanda');
console.log(man)

//ex 5

function let(ename){
    let add='kumar';
    if(let==add){
        return true
    }
    else
    return false
  }
  let d=let('kiran')
  console.log(d)
  
