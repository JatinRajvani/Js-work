// Array consist more than one property together.
let array_one=[1,2,3,"jatin"] // ''array is created''
console.log(array_one,typeof array_one)
array_one[4]=5; //adding element in array
console.log(array_one)
array_one[1]=4;
console.log(array_one) //changing the element in array

console.log(typeof array_one) //array's type is object
console.log(array_one.length)

let r=array_one.pop() //here for removing last element we used poping method
console.log(array_one)
console.log(array_one,r) //for writing poped element we can let it by r


let j=array_one.push("Jay") //for adding another number we used push method
console.log(array_one)
console.log(array_one,j) //for printing the push element

let z=array_one.shift() //shift removes the first element and print the remaining element
console.log(z,array_one)

let y=array_one.unshift(45) // unshift add the element in starting
console.log(y,array_one)

 let e=array_one.join("") //to joins the array
 console.log(e,typeof e)

 let k=array_one.toString() //to string the array and to find the type
 console.log(k,typeof k)

 delete array_one[2] //here on deleting any element from array its length does not change.
 console.log(array_one,array_one.length)

 let second_array=[5,6,7,8,9] //here we use concat for adding two aaray
 let q=array_one.concat(second_array,)
 console.log(q)

 let third_array=["apple","banana","dog","lion","game","cow"] //here sort is used to change the orignal valueof the array.
 third_array.sort()
 console.log(third_array)

 let compare=(a,b)=>{ //here this is used for set the values in ascending or in descending order or to compare value
                       
    return b-a
}
let age=[12,45,36,20]
age.sort(compare)
console.log(age)

age.reverse()// here reverse aaray is used  to reversing the aaray
console.log(age)

// splice is used to remove the value and to add new value from it and it modify the old array 
let splicevalue=[1021,1022,1023,1024,1025]
let deletedvalues=splicevalue.splice(1,3,1111,12,13)
console.log(splicevalue,splicevalue.length,deletedvalues)

// slice HERE if we have to print some of the array from all we use slice method
num=[1,2,3,4,5,6]
let newnum=num.slice(2,5)
console.log(newnum)

largestnumber = Math.max(...num)//to finding maximum number
console.log(largestnumber)
smallestnumbefr=Math.min(...num)//to finding minimum number
console.log(smallestnumbefr)

// for converting array into string
a=[1,2,3]
d=a.join("")
console.log(d)

var aa=1;
 var bb=2;

 var ca =aa;
 aa=bb;
 bb=ca;

 console.log(aa)
 console.log(bb)

 
