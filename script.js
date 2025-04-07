document.write("Hello World")

// console.warn("This is a warning")
console.error("This in error")

//Variables

const pi = 3.14
console.log(pi)

let a=10
console.log(a)

a=20
console.log(a)


var b = 19
console.log(b)
var b = 40
console.log(b)

let isValid = false
let fullName = "Alex John"
let salary = 40000

let num1= 2
num1+=3  //num1 = num1+3

console.log(num1)

let a1 = num1++
console.log(a1)

++a1
console.log(a1)

let flag1 = true
let flag2=false

console.log((flag1!=flag2) || (2==3))
console.log((flag1!=flag2) &&  (2==3))

if(5>3){
    console.log("5 is greater than 3")

}
else if(5<3)
{
    console.log("5 is less than 3")
}
else{
    console.log("They are equal")
}

let sum=0
for(let i=0;i<=10;i++){
    sum+=i
}

console.log(sum)

let student={
    name:'Hari',
    age:20,
    hobby:'Music'
}
console.log(student.name)

function greet(){
    alert("Welcome to Marian College")
}

greet()

function add(a,b){
    return a+b
}

let result = add(4,5)
console.log(result)

//Arrow functions

let diff= (num1,num2)=>{
    return num1-num2
}
let output  = diff(5,4)
console.log(output) 

//arrays
const seasons = ['Winter','Summer','Rainy']
console.log(seasons[2])

seasons.forEach((item)=>console.log(item))

let numbers = [10,20,30,40]

let doubleNumbers = numbers.map(item=>item*2)
console.log(doubleNumbers)