// Object Destructuring
const user = {
  name: "Shree",
  age: 22,
  city: "Chennai"
};
const person=`${user.name} lives in ${user.city}`;
console.log(person);

// Array Destructuring
const number=[121,122,134,152,134,345,543];
const arr=[...number];
console.log(arr);

//swap numbers
// let a=12;
let e=14;
[a,e]=[e,a];
console.log(a,e);

//destucturing by default
const per={a:"sharukh",d:"salman"};
const{a,d,"age":age=23}=per;
console.log(a,d,age);
























