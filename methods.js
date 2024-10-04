let a=[100,20,30,40]
console.log(a.length)

a.push(50)//adding the new element in the end of array.
console.log(a)//[ 100, 20, 30, 40, 50 ]

a.pop()//remove the last element in the end of the array.
console.log(a)//[ 100, 20, 30, 40 ]

a.shift()//remove the begining of the first element from the array.
console.log(a)//[ 20, 30, 40 ]

a.unshift(10)//addind the new element in the begining array.
console.log(a)//[ 10, 20, 30, 40 ]

console.log(a.indexOf(30))//2

a.reverse()//Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.
console.log(a)//[ 40, 30, 20, 10 ]