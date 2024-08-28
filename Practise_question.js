 //  Practise questions
// Que-1 Finding the length without using ,length function
// let arr=[1,3,2,4,5,8,7]
// let len=0;
// let i=0;
// while(arr[i]!=undefined){
//     len=len+1;
//    i++;    
// }console.log(len)

// que-3  for finding the missing element in array
// function findMissingNumber(arr) {
//     arr.sort((a, b) => a - b);

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== i + 1) {
//             return i + 1;
//         }
//     }

//     return arr.length + 1;
// }

// const numbers = [1, 2, 3, 4, 5, 6, 8, 9, 10];
// const missingNumber = findMissingNumber(numbers);
// console.log(missingNumber)


// que-3 sort the array

// que-4 sort the array
// arr=[0,0,1,0,1,0,1,0,0,1,]
// var len= arr.length;
// var count=0;
// for(i=0;i<len;i++){
// if(arr[i]==0){
//     count++;
// }
// }console.log(count)
// arr1=[]
// for(k=0;k<count;k++){
//     a=arr1.push(0);
// }console.log(arr1)

// for(k=0;k<len-count;k++){
//     a=arr1.push(1);
// }console.log(arr1)
                             //or
//   let arr = [0, 0, 1, 0, 1, 0, 1];

// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//         if (arr[j] > arr[j + 1]) {
            
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }

// console.log(arr); 
//                        or
// let array = [1, 0, 0, 0, 1, 1, 0,1];
// console.log(customSort(array)); // Output: [0, 0, 0, 0, 1, 1, 2, 2]

// function customSort(arr) {
//     // Initialize counts
//     let count0 = 0, count1 = 0;

//     arr.forEach(num => {
//         if (num === 0) count0++;
//         else if (num === 1) count1++;})

//             for (let i = 0; i < count0; i++) {
//                 arr[i] = 0;
//             }
//             for (let i = count0; i < count0 + count1; i++) {
//                 arr[i] = 1;
//             }
// return arr;
//         }                          

//Que-5
// function customSort(arr) {
//     // Initialize counts
//     let count0 = 0, count1 = 0, count2 = 0;
    
//     // Count occurrences of 0s, 1s, and 2s
//     arr.forEach(num => {
//         if (num === 0) count0++;
//         else if (num === 1) count1++;
//         else if (num === 2) count2++;
//     });

//     // Overwrite array based on counts
//     for (let i = 0; i < count0; i++) {
//         arr[i] = 0;
//     }
//     for (let i = count0; i < count0 + count1; i++) {
//         arr[i] = 1;
//     }
//     for (let i = count0 + count1; i < arr.length; i++) {
//         arr[i] = 2;
//     }

//     return arr;
// }

// let array = [1, 0, 0, 0, 2, 1, 0,2];
// console.log(customSort(array))