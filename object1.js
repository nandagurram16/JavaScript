//empty object

let a={key:100}
console.log(a) 

//exmaple one

let user={
    id:1011,
    name:'nanda',
    sal:50000,
    loc:'bengalur'
}
console.log(user)
console.log(user.id)
console.log(user.name)
console.log(user.loc)
console.log(typeof a)
console.log(typeof user)

//updating something in above program

user.name='kumar'
user.avail=100
console.log(user)

//output::
{ key: 100 }
{ id: 1011, name: 'nanda', sal: 50000, loc: 'bengalur' }
1011
nanda
bengalur
object
object
{ id: 1011, name: 'kumar', sal: 50000, loc: 'bengalur', avail: 100 }