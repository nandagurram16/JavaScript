let a={
    eid:101,
    ename:'nanda',
    loc:'pune'
}
a.name='kumar'

console.log(a)
console.log(Object.keys(a).length)
console.log(Object.keys(a).length>0)
console.log(Object.keys(a))
console.log(Object.values(a))
Object.freeze(a)
