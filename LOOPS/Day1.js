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
