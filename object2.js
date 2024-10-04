let user={
    ename:'nanda',
    id:101,
    color:['red','blue','white',[],{},true]
}
console.log(user)
console.log(user.ename)
console.log(user.id)
console.log(user.color)
console.log(user.color[4])
console.log(user.color[5])

//output::

{
    ename: 'nanda',
    id: 101,
    color: [ 'red', 'blue', 'white', [], {}, true ]
  }
  nanda
  101
  [ 'red', 'blue', 'white', [], {}, true ]
  {}
  true