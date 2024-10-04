//wap to print 1 to 5 numbers using for loop,while and do while

for(let i=1;i<=5;i=i+1){
    console.log(i)
}

//while loop

let i=1;
while(i<=5){
    console.log(i)
    i=i+1
}

//do while

let a=1;
do{
    console.log(a)
    a=a+1
}
while(a<=5)

//another ex of whie loop

// 0,2,4,6,8,10,12,14,16,18

let b=0;
while(b<=18){
    console.log(b)
    b=b+2;
}

//another ex of do while

let c=10;
do{
    console.log(c)
    c=c+1
}
while(c<=0)

// java script array
//empty array
let d=[]
console.log(d)

//example;2

let eids=[101,102,103,104]
console.log(eids[0])
console.log(eids[1])
console.log(eids[2])
console.log(eids[3])
console.log(eids[0])
console.log(eids[12])

//example;3 using for loop of above program

let eid=[101,102,103,104]

for(i=0;i<=3;i=i+1)
    console.log(eid[i])


//example;3 using "for-of" of above program

let nan=['nanda','sarvesh','sudheer']
for(x of nan){
    console.log(x)
}
