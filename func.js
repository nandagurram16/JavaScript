function great(){
    console.log('hi nanda')
}
great()

//ex.2

function add(a,b){
    console.log(a+b)
}
add(1,2)
add(2,3,4,)
add(200)
add(50,20)

//ex:3

function sub(a,b,c){
    console.log(a-b+c)
}
sub(2,3,5)
sub(1,0,3)
sub(23,23)
sub(2,'nanda',6)

//ex;4

function cal_age(dob_year){
    let current_year=new Date().getFullYear();
    return current_year-dob_year
}
let age1=cal_age(1992)
let age2=cal_age(2020)
console.log(age1)
console.log(age2)