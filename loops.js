// for ([initialization]; [condition]; [iteration]){
//     statement
// }

// for (let i = 0; i < 10; i++) {
//     console.log("iteration number", i);
// }

for (let i = 10; i >= 0; i--) {
  if (i === 0) {
    console.log("BLAST OFF");
  } else {
    console.log(i);
  }
}

const array = [0, 5, 4, 3, 2];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

for (let i = array.length -1; i > -1; i--) {
    console.log(array[i]);
}

let sum = 0;
for (let i = 0; i < array.length; i++) {
  sum = sum + array[i];
}
console.log(sum);
