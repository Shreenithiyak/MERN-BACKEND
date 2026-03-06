// What is a loop?
//  Loops can execute a block of code a number of times.

// for loop syntax
   for (let i = 0; i < 5; i++) 
// while loop
  while(condition){
    i++
  }
// do...while
do {
    i++
}
while(conditions)
// Difference between them
// for Loop	                                       while Loop	                                     do...while Loop



//  Simple One-Line Meaning

// for → "I know how many times."

// while → "Run until condition becomes false."

// do...while → "Run first, then check condition."

//Print numbers 1–10
for (i=1;i<10;i++){
    console.log(i);
}

//Print 10–1 (reverse)
  for (i=10;i>1;i--){-----------------------------i>1[to get an reverse value]
    console.log(i);
  }
//Print even numbers till 50
for(i=2;i<50;i+=2){--------------------------------i+=2[i+i] i=2+2=4....
    console.log(i);
}
//Print odd numbers till 50
for(i=1;i<50;i+=2){
    console.log(i);
}
//Sum of numbers 1–100
let sum = 0;
for(i=1;i<100;i++){
    sum+i;
}
console.log(sum);


//for of loop--------------------to organaizing a collection of data in an array  [for (let value of array)]
const arr =[1,2,3,4,5,6];
for (let value of arr){
  console.log(value);
}
let arr8=[10,20,30,40,50];
for (i=0;i<arr8.length;i++){
  console.log(arr8[i]);
}


//for in loop------------------to organize a data using indexing/object value [for (let index in array)]
const array=["car","train","ship"];
for (let index in array){
  console.log(array[index]);
}




for(i=0;i<=5;i++){
  let count="";
   for(j=0;j<=i;j++){
    count+='*';
   }
   console.log(count);
}




// 1	Day 1: Print numbers 1–10, 10–1, even numbers till 50.
     for(i=1;i<=10;i++){
      console.log(i);
     }
     for(i=10;i>=1;i--){
      console.log(i);
     }
     for (i=0;i<50;i+=2){
       console.log(i);
     }

// 2	Day 2: Print odd numbers, sum of numbers till n, multiplication table.
    for(i=0;i<=100;i+=2){

    }
      

// 3	Day 3: Factorial of number, count digits in number.
let n=9;
let fact=1;
for(i=1;i<=n;i++){
  fact=fact*i;
}
console.log(fact);

let arrr=1234567
let count=0;
for(i=1;i<=arrr;i++){
  count=arrr/10;
}
console.log(count);
// 4	Day 4: Reverse a number, sum of digits.
let s=[9,8,7,6,5,4]
let ssum=0;
for (i=0;i>=s;i--){
   ssum=s/10;
 }
console.log(ssum);









