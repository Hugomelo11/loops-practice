// white a function that logs even numbers from 0 - 100
let i = 0;
while (i < 100) {
    i+=2;
    console.log(i);
}


// for (let i = 0; i <= 100; i += 2){
//     console.log(i)
// }



// write a function that loops through an array of numbers and returns the total sum of the array






const array = [5, 10, 15, 20, 25]
let sum = 0
for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
    
}
console.log(sum);


// const arr = [14, 4, 11, 13, 66, 10];
// let sum = 0
// for(const value of arr) {
//     sum += value; // sum = sum + value
// }
// console.log(`the sum is ${sum}`); 