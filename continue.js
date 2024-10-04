let prices=[9,99,199,299,599,499,399]

//print all values except 199

// continue=skip the current itteration,and excutes the next iteration.
// break=stop the itteration,and come out from the loop.

for(price of prices){
    if (price==199)
        continue
    console.log(price)
}
//output::
9
99
299
599
499
399

//print all values except 7

for(var i=1;i<=10;i=i+1){
    if (i==7)
        continue
    console.log(i)
}

//output::
1
2
3
4
5
6
8
9
10
