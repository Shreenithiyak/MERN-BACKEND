//  Basic Star Patterns (1–10)
// Square
  for(let i=0;i<5;i++){
    let count="";
    for(let j=0;j<5;j++){
        count+="*";
    }
    console.log(count);
  }
// Rectangle
  for(let i=0;i<5;i++){
    let count="";
    for(let j=0;j<4;j++){
    count+="*";
}
console.log(count);  
}

// Right triangle
  for(let i=0;i<5;i++){
    let count="";
    for(j=0;j<=i;j++){
        count+="*";
    }
    console.log(count);
  }
// Left triangle

  for(let i=0;i<5;i++){
    let count="";
    for(j=0;j<5-i-1;j++){
        count+=" ";
    }
    for(k=0;k<=i;k++){
        count+="*";
    }
    console.log(count);
  }
// Inverted triangle
  for(let i=5;i>0;i--){
    let count="";
    for(j=0;j<i;j++){
        count+="*";
    }
    console.log(count);
  }
// Pyramid
 for(i=0;i<=5;i++){
   let count="";
   for(j=0;j<5-i;j++){
    count+=" ";
   } 
   for(k=0;k<2*i-1;k++){
    count+="*";
   }
    console.log(count);
  }
// Inverted pyramid
 for(i=5;i>0;i--){
   let count="";
   for(j=0;j<5-i;j++){
    count+=" ";
   } 
   for(k=0;k<2*i-1;k++){
    count+="*";
   }
    console.log(count);
  }
// Diamond
 for(i=0;i<5;i++){
   let count="";
   for(j=0;j<5-i;j++){
    count+=" ";
   } 
   for(k=0;k<2*i-1;k++){
    count+="*";
   }
    console.log(count);
  }
  for(i=4;i>0;i--){
   let count="";
   for(j=0;j<5-i;j++){
    count+=" ";
   } 
   for(k=0;k<2*i-1;k++){
    count+="*";
   }
    console.log(count);
  }
// Hollow square
// Hollow triangle

// Reverse a string (without built-in)
let str="string";
for(i=str.length-1;i>=0;i--){
console.log(str[i]);
}
// Reverse a number
let num=[4,5,6,7,8,9];
for(i=num.length-1;i>=0;i--){
console.log(num[i]);
}
// Check palindrome (string & number)


// Find factorial

// Fibonacci series

// Check prime number

// Reverse a string (without built-in)
let a ="string";
for(i=a.length-1;i>=0;i--){
console.log(a[i]);
}
// Reverse a number
let b=[4,5,6,7,8,9];
for(i=b.length-1;i>=0;i--){
console.log(b[i]);
}
// Check palindrome (string & number)
let c="mom";

for(i=c.length-1;i>=0;i--){
    if(c[i]===c[i]){
         console.log("pallindrome");
    }else{
        console.log("non palindrome");
    }  
}
console.log(c);

let d="33";

// Find factorial

// Fibonacci series

// Check prime number

// Print all primes till n





























