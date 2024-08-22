// There are three variables
// 1-Var,2-let,3-Const

// 1-const
const price1 = 7;
const price2 = 6;
let total = price1 + price2;
console.log(total)

// 2-var 
var price3 = 5;
var price4 = 6;
let total_price = price3 + price4;
console.log(total_price)

// 3-Let 
let price5=9;
let price65=10;
let sum_price = price5 + price65;
console.log(sum_price)

// Javascript Operators
// There are many type of java script operators
// ex-addEventListener,sub,divide,product etc
var x=10;
var y=11;
var z=12;
var v=33;

// Arithmetic operation
// 1-Add,subtraction,multiplication
var add= x + y;
console.log(add)
var sub= x - y;
console.log(sub)
var multi=x*z
console.log(multi)
var divide=z/x
console.log(divide)

// A-Modulus.
// Modulus means reminder of divison
var mod=z%x
console.log(mod)
var mod_two=x%z
console.log(mod_two)

// B-increment
var increment=z+8
console.log(increment)

// C-Percantage
let percantage= ((x+y)/v)*100
console.log(percantage)

// D-Exponentiation means four times the number
var c=x**4;
console.log(c)
var D= x+v-y
console.log(D)

// E-Increment Number 
let a=10
let b=12
console.log("a++",a++) //here first value is print and then operation is run
console.log(a)
console.log("++b",++b) //here first operation is done anf then value is print

// F-Decrement
console.log("a--",a--) //here first value is print and then operation is run
console.log("--b",--b) //here first operation is done anf then value is print


                                    // Assignment operators
 let J=11;
 let K=12;                                                                
//1- (+=)
console.log(J+=K)
//2- (-=)
console.log(J-=K)
//3- (*=)
console.log(J*=K)
//4- (/=)
console.log(J/=K)
//5-(%=)
console.log(K%J)
                   //Comparison value
//  1-Equal to(==)
//  2-Equal value and equal type(a===b)
//  3-Not equal to(!=)
//  4-Not equal and not equal type(!==)
//  5-(<=) less than or equal to
//  6-(>=) freater than or equal to

                    // Logical Operators 
//  1(&&)and-it is condition in which if both the operation is true then it print  either if one oth condition is false it print false.
let j=8;
let k=9;
console.log(j<k&&k>j)
console.log(j<k&&j==k)
// 2(||)-or Here in or operator if one of the condition is true it can print true.
console.log(j<k||j==k)
// 3(!)-it is the logical not operator it is used to change the true into false and false into true
console.log(j<k||j==k)
console.log(!true)

                   

// program to check an Armstrong number of three digits

// let sum = 0;
// const number = 371

// // create a temporary variable
// let temp = number;
// while (temp > 0) {
//     // finding the one's digit
//     let remainder = temp % 10;

//     sum += remainder * remainder * remainder;

//     // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
// }
// // check the condition
// if (sum == number) {
//     console.log(`${number} is an Armstrong number`);
// }
// else {
//     console.log(`${number} is not an Armstrong number.`);
// }



