//                                            Loops And Strings in JavaScript

//Loops in JavaScript : Loops are used to execute a piece of code again and again.

/*
console.log("Ravi Prakash");
console.log("Ravi Prakash");
console.log("Ravi Prakash");
console.log("Ravi Prakash");
console.log("Ravi Prakash");
*/

// for loop

/*
let count;
for(count=1; count<=10; count++)
{
    console.log("Ravi Prakash"); 
}
*/


/*
let i;
for(i=1; i<=5; i++)
{
    console.log("i = ",i); 
}
*/


// To calculate sum of 1 to 5
/*
let sum=0;
for(let i=1; i<=5; i++)
{
    sum=sum+i;
}
console.log("Sum = ",sum);
console.log("Loop has ended..");
*/


// To calculate sum of 1 to n
/*
let sum=0;
let n=50;
for(let i=1; i<=n; i++)
{
    sum=sum+i;
}
console.log("Sum = ",sum);
console.log("Loop has ended..");
*/


// Infinite Loops :  A loop that never ends.. Infinite Loop hme kbhi nhi krna hai apne program me.
/*
for(let i=1; i>=0; i++)
{
    console.log("i =",i);
}
*/


// While loop
/*
let i=1;
while(i<=5)
{
    console.log("i =",i);
    i++;
}
*/


/*
let i=1;
while(i<=10)
{
    console.log("Ravi Prakash");
    i++;
}
*/


// Do while loop
/*
let i=10;
do{
    console.log("Ravi Prakash");
    i++;
}
while(i<=10);
*/
/*
let i=1;
do{
    console.log("i = ",i);
    i++;
}
while(i<=10);
*/

// for-of loop : it works on character of string .
// for-in loop : Used for apply loop on Objects.
//==============================================================================================

/*
let str="Ravi Prakash";
for(let i of str)
{
    console.log("i = " ,i);
}
*/

/*
let str="Ravi Prakash";
let  size=0;
for(let i of str)
{
    console.log("i = " ,i);
    size ++;
}
console.log("Size of Str = ",size);
*/


// for-in loop : Used for apply loop on Objects.
/*
let student={
    Name:"Ravi Prakash",
    Branch:"CSE",
    Age:21,
    CGPA:8.55,
    isPass:true
};
console.log(student);
for(let i in student)
{
    // console.log("Keys = ",i,"Values = ",student[i]);//returns only keys
    console.log("key =",i);
}
*/

//Let's Practice : On Loops
//==============================================================================================
//Q1. Print all even numbers from 0 to 100.

/*
for(let i=0; i<=100; i++)
{
    if(i%2==0)// for even number
   // if(i%2!==0)// for odd number

    {
        console.log("Even Number =",i);
    }
}
*/

//Q2. Create a game where you start with any random game number . Ask the user to keep guessing the game number until the user enters correct value.

/*
let gameNumber = 21;
let userNumber = prompt("Guess the Game Number : ");
while(userNumber != gameNumber)
{
    userNumber = prompt("You Entered wrong number . Guess Again! : ");
}
console.log("Congratulations! , you entered the right number ...");

*/


//                                           Strings in JavaScript
//                                          =======================


let str1="Ravi Prakash";
let str2="Saurabh";
console.log(str1);
console.log("Length of ",str1," = ",str1.length);
console.log(str2);
console.log("Length of ",str2," = ",str2.length);


// access using index of string
console.log(str1[0]);
console.log(str1[1]);
console.log(str1[2]);
console.log(str1[3]);