let  hero='hanuman'
console.log(hero.split("").reverse().join(""))

// join two variables

let num=[1,2,3,4];
let fruits=['lemon,orange,apple'];

join=[...num,...fruits,...hero]
console.log(join)

//ex:1

let letters=['a,b,bc,cvejvnev,c,ewfw'];

join=[...num,...letters,...fruits]
console.log(join)

//ex:2

let numbers=[1,2,3,4,5]
let planets=['sun,moon,earth,pluto']
let mix=[...numbers,...planets,'nanda']
console.log(mix)

//replacing...

let a=10;
let b=30;
let cole=[b,a]
console.log(cole)

//ex:4

let object={
    eid:10,
    ename:'nanda',
    sal:100000
}
let object_1={
    plants:['tree','trees'],
    planets:['mars','jupiter','satrun'],
    loc:'sky'
}

let merge={...object,nanda:'kumar',...object_1,kumar:'4567876543'}
console.log(merge)