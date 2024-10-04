//duplicate keys are not allowed in object

let nam={
    car:'maruthi',
    price:10000,
    fuel:'maruthi',
    price:['nanda','kumar','car',100,[],false]
}
console.log(nam) 

// output::
{
    car: 'maruthi',
    price: [ 'nanda', 'kumar', 'car', 100, [], false ],
    fuel: 'maruthi'
  }