class employe{

}

let e1=new employe()
let e2=new employe()
let e3=new employe()

console.log(e1,e2,e3)

//ex:1

class accoun{
    min_balance=500;
}
let a1=new accoun()
let a2=new accoun()
console.log(a1)
console.log(a2)

//ex:2

class account{
    min_balance=500;
    open_account(){
        console.log('account opened')
    }
    deposit_amount(){
        console.log('amount deposited')
    }
    check_balance(){
        console.log('checked balance')
    }
}
let a3=new account()
a3.open_account()
a3.deposit_amount()
a3.check_balance()

let a4=new account()
a4.open_account()
a4.deposit_amount()
a4.check_balance()
console.log(a3)
console.log(a4)

//ex:3

class balance{
    min_balance=100;
    open_account(){
        console.log('account opened successfully')
    }
    deposit_amount(amount){
        console.log(amount,'deposited')
    }
    check_balance(){
        console.log('checked')
    }
}

let b1=new balance()
b1.open_account()
b1.deposit_amount(2000)
b1.check_balance()

let b2=new balance()
b1.open_account()
b1.deposit_amount(200)
b1.check_balance()

//ex:4

class bank{
    acc_id;
    balance=200;
    min_balance=2000;
    acc_name;
}

let c1=new bank()
let c2=new bank()
console.log(c1)
console.log(c2)

//ex:5

class stack{
    acc_Bal=0
    min_Bal=500

    deposit_Amount(amount){
        this.acc_Bal  = this.acc_Bal+amount
    }
    get_Bal(){
        console.log("Your Bal:", this.acc_Bal-this.min_Bal)
    }
}
let d1 = new stack()
d1.deposit_Amount(5000)

let d2=new stack()
d2.deposit_Amount(10)
d1.get_Bal()
d2.get_Bal()

//ex:5

class nanda{
    acc_bal=100;
    min_Bal=1000;

    deposit_Amount(amount){
        this.acc_bal=this.acc_bal+amount
    }
    get_Bal(){
        console.log('your_bal:',this.acc_bal-this.min_Bal)
    }
}
let f1=new nanda()
f1.deposit_Amount(2000)
let f2=new nanda()
f2.deposit_Amount(10)
f2.deposit_Amount(1200)
f1.get_Bal()
f2.get_Bal()

//ex:6
  
class finance{
    deposit_Amount(amount){
        console.log(amount,'deposited')
    }
    min_balance(Balance){
        console.log(Balance,'min')
    }
}
let t1=new finance()
t1.deposit_Amount(3000)
let t2=new finance()
t2.min_balance(3000)