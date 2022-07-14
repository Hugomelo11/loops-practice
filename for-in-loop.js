// for (key in object) {
//     statement
// }

// const obj = { a:1, b:2, c:3 };
// for (const key in obj) {
//     console.log(key);
// }

// for in loop - iterates over prepeties of an object.
// object - {"key": value} pair
// key - property of the object
// statement - code that is executed while the condition is true

const object = {
    name: 'Hugo',
    age: 25,
    inClass: true,
};

for (const key in object) {
    console.log(key);
}
for (const key in object) {
    console.log(object[key]);
}

