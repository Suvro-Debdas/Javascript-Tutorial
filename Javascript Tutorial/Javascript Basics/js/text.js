// Example of var keyword
/*
var a,b;
a="Suvro"
b="Debdas"
document.write(a);
document.write(b);
*/

// Example of let keyword
/*
let a="Suvro"
let b="Debdas"
document.write(a);
document.write(b);
*/

// Example of const keyword
/*
const a="Suvro"
const b="Debdas"
document.write(a);
document.write(b);
*/

// Example of datatypes and their types
/*
var a="Suvro";
var b=25;
var c=true;
var d=["html","css","js"];
var e={first:'Suvro',last:'Debdas'};
var f=null;
var g;
document.write(typeof a);
document.write("<br>");
document.write(typeof b);
document.write("<br>");
document.write(typeof c);
document.write("<br>");
document.write(typeof d);
document.write("<br>");
document.write(typeof e);
document.write("<br>");
document.write(typeof f);
document.write("<br>");
document.write(typeof g);
*/

// Example of arithmetic operators
/*
var a=3
var b=2
var c=a+b
document.write(c);
document.write("<br>");
var c=a-b
document.write(c);
document.write("<br>");
var c=a*b
document.write(c);
document.write("<br>");
var c=a**b
document.write(c);
document.write("<br>");
var c=a/b
document.write(c);
document.write("<br>");
var c=a%b
document.write(c);
document.write("<br>");
*/

// Example of assignment operators
/*
var a=3
var b=2
a+=b;
document.write(a);
document.write("<br>");
a-=b;
document.write(a);
document.write("<br>");
a*=b;
document.write(a);
document.write("<br>");
a/=b;
document.write(a);
document.write("<br>");
a%=b;
document.write(a);
document.write("<br>");
a**=b;
document.write(a);
document.write("<br>");
*/

// Example of comparison operators
/*
var a=3
var b=2
document.write(a==b);
document.write("<br>");
document.write(a===b);
document.write("<br>");
document.write(a!=b);
document.write("<br>");
document.write(a!==b);
document.write("<br>");
document.write(a>b);
document.write("<br>");
document.write(a<b);
document.write("<br>");
document.write(a>=b);
document.write("<br>");
document.write(a<=b);
document.write("<br>");
*/

// Example of conditional statement
/* example:01
var a=6
if(a>5){
    document.write("a is greater");
}else{
    document.write("a is not greater");
}*/

/*example:02
var a=99
if(a>=81 && a<=100){
    document.write("Your score is outstanding");
}else if(a>=61 && a<=80){
    document.write("Your score is excellent");
}else if(a>=41 && a<=60){
    document.write("Your score is  very good");
}else if(a>=31 && a<=59){
    document.write("Your score is good");
}else if(a<31){
    document.write("Your score is poor");
}
else{
    document.write("Please enter a valid marks");
}*/

/*example:03
var day=0;
switch (day) {
    case 0:
        document.write("Today is Monday");
    break;
    case 1:
        document.write("Today is Tuesday");
    break;
    case 2:
        document.write("Today is Wednesday");
    break;
    case 3:
        document.write("Today is Thrusday");
    break
    case 4:
        document.write("Today is Friday");
    break;
    case 5:
        document.write("Today is Saturday");
    break
    case 6:
        document.write("Today is Sunday");
    break;
    default:
        document.write("Today is Monday");
    break;
    }*/

// Example of alert box
/*
alert("Suvro");
*/

// Example of confirm box
/*
confirm("Do you like my website");
*/

// Example of prompt box
/*
prompt("Enter your name");
*/

// Example of function

/* example:01

function welcome(fname="Suvro",lname="Debdas"){
    document.write("Hello "+ fname + " "+ lname);
}
welcome("Ram","Singh");
/*

/* example:02

function tmarks(math,english,bengali){
    var marks = math + english + bengali;
    return marks;
}
var total=tmarks(50,50,50);
document.write(total)
*/

// Example of while loop
/* 
var a=1;
while(a<=10){
    document.write("Suvro<br>");
    a=a+1;
}*/

// Example of do while loop
/* 
var a=1;
do{
    document.write("Suvro<br>");
    a=a+1;
}
while(a<=10)
*/
    
// Example of for loop
/*
for(var a=1; a<=10; a++){
    document.write("Suvro<br>");
}*/

// Example of for in loop
/*
var obj={
    firstName: "Suvro",
    lastName: "Debdas",
    Age: 29,
    email: "suvrodebdas@gmail.com"
};
for(var key in obj){
    document.write(obj[key]+"<br>");
}*/

// Example of for each loop
/*
var a=["suvro","debdas","software","engineer"]
a.forEach(function(value){
    document.write(value+"<br>");
});*/

// Example of break statement
/*
for(var a=1; a<=10; a++){
    if(a==3){
        document.write("Debdas<br>");
        continue;
    }
    document.write("Suvro<br>");
}*/

// Example of odd & even number
/*
var a = prompt("Enter a number to check odd or even");
if (a % 2 == 0){
    document.write("The given number is an even number");
}else{
    document.write("The given number is an odd number");
}*/

// Example of nested loop
/* example:01
for (a = 1; a <= 9; a=a+3){
    for(b = a; b < a+3; b++){
        document.write(b+" ");
    }
    document.write("<br>");
}*/

/* example:02
/*
for (var a = 1; a <= 5; a++){
    for(var b = 1; b <= a ; b++){
        document.write(b + " ");
    }
    document.write("<br>");
}*/

/* example:02

for (var a = 1; a <= 5; a++){
    for(var b = 1; b <= a ; b++){
        document.write(a + " ");
    }
    document.write("<br>");
}*/

/* example:03 

for (var a = 5; a >= 1; a--){
    for(var b = 5; b >= a ; b--){
        document.write(b + " ");
    }
    document.write("<br>");
}*/

/* example:04 

for (var a = 5; a >= 1; a--){
    for(var b = 1; b <= a ; b++){
        document.write(a + " ");
    }
    document.write("<br>");
}*/

/* Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
var length_1 = 5
var length_2 = 6
var length_3 = 7
document.write("The area of the trainagle is : "+(length_1*length_2*length_3+"unit cube"));*/

/* Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

var year = prompt("Enter a year to check if leap year or not");

if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
    document.write("The given year is a leap year");
}else{
    document.write("The given year is not a leap year");
}*/

/* Write a JavaScript program that accept two integers and display the larger.

var num1 = prompt("Enter first number: ");
var num2 = prompt("Enter second number: ");
var num3 = prompt("Enter third number: ");

if (num1 > num2 && num1 > num3){
    document.write("The first number is the largest.");
}else if(num2 > num1 && num2 > num3){
    document.write("The second number is the largest.");
}else{
    document.write("The third number is the largest.");
}*/

/* Write a JavaScript program to identify armstrong number.

var number = prompt("Enter a number to check if armstrong number or not");
var b=0;
var r;
var a = number;
while(number != 0){
    r = number % 10;
    b = b + (r * r * r);
    number = parseInt(number / 10);
}
if (b == a){
    document.write("This is an armstrong number.");
}else{
    document.write("This is not an armstrong number.");
}*/

/* Write a JavaScript program to reverse a number.

var number = prompt("Enter a number");
var b=0;
var r;
while(number > 0){
    r = number % 10;
    b = b * 10 + r;
    number = parseInt(number / 10);
}
document.write("The reverse of the given number is "+ b);
*/

/* Example of multidimensional array. 
var a = [
        ["Suvro","Debdas","Dell"],
        ["Mousumi","Bhandari","Dell"],
        ["Saibal","Das","Dell"]
];

for(var i = 0; i < 3; i ++){
    for(var j = 0; j < 3; j ++){
        document.write(a[i][j] +" ");
    }
    document.write("<br>");
}*/

/* Example of multidimensional array.
var a = new Array("Suvro","Debdas","Dell");
document.write(a[0]);
*/

/* Example of multidimensional array.
var a = [
    ["Suvro","Debdas","Dell"],
    ["Mousumi","Bhandari","Dell"],
    ["Saibal","Das","Dell"]
];
for(var i = 0; i < 3; i ++){
for(var j = 0; j < 3; j ++){
    document.write(i + " " + j +"|");
}
document.write("<br>");
}*/

/* Example of multidimensional array.

var row = prompt("Enter the number of rows");
var col = prompt("Enter the number of columns");

var ary = new Array(row);

for (var i = 0; i < row; i++){
        ary[i] = new Array(col);
    }

for ( var i = 0; i < row; i++){
    for (var j = 0; j < col; j++){
        ary[i][j] = prompt("Enter the values");
    }
}
for ( var i = 0; i < row; i++){
    for (var j = 0; j < col; j++){
        ary[i][j] = document.write(ary[i][j]);
    }
    document.write("<br>");
}
*/

// Methods of Array

// var ar1 = [1,2];
// var ar2 = [3,4];
// var ar3 = [5,6];
// document.write(ar1.concat(ar2,ar3));

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.write(fruits.constructor);

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.write(fruits.copyWithin(1, 3));

// var num = [1,2,3,4,5,6,-1];
// var numObj = num.fill(0);
// document.write(numObj);

// var num = ["Banana", "Orange", "Apple", "Mango"];
// var numObj = num.forEach(function(value){
//     document.write(value);
// });

// var num = ["Banana", "Orange", "Apple", "Mango"];
// var numObj = num.includes("Banana")
// document.write(numObj);

// var num = ["Banana", "Orange", "Apple", "Mango"];
// var numObj = Array.isArray(num)
// document.write(numObj);

// var num = ["Banana", "Orange", "Apple", "Mango"];
// var numObj = num.indexOf("Banana")
// document.write(numObj);

// var num = ["Banana", "Orange", "Apple", "Mango"];
// var numObj = num.includes("Banana")
// document.write(numObj);

// var num = [1,2,3,4,5,6,-1];
// var numObj = num.filter(function(value){
//     return value >= 0;
// });
// document.write(numObj);

// var num = ["Banana", "Orange", "Apple", "Mango"];
// var numObj = num.find(function(value){
//     return value === "Banana";
// });
// document.write(numObj);

// var num = ["Banana", "Orange", "Apple", "Mango"];
// var numObj = num.findIndex(function(value){
//     return value === "Banana";
// });
// document.write(numObj);

// var num = [1,2,3,4,5,6];
// var numObj = num.keys()
// for (var key of numObj){
//     document.write(key);
// }

// var num = ["Banana", "Orange", "Apple", "Mango", "Orange"];
// var numObj = num.lastIndexOf("Orange")
// document.write(numObj);

// var num = ["Banana", "Orange", "Apple", "Mango", "Orange"];
// document.write(num.length);

// var ary = [
//             {fname : "Suvro",   lname : "Debdas"},
//             {fname : "Mousumi", lname : "Bhandari"}, 
//             {fname : "Saibal",  lname : "Das"},
//         ];
// var b = ary.map(test);
// document.write(b);

// function test(x){
//     return x.fname+ " " + x.lname;
// }

// function students(fname,lname,age){

// }
// students.prototype.nationality = "Indian";



// var student1 = new students("Suvro","Debdas",29);
// var student1 = new students("Suvro","Debdas",29);

// document.write(student1);

// var num = [1,2,3,4,5]
// numObj = num.push(6)
// document.write(numObj);

// var num = [1,2,3,4,5]
// numObj = num.reduce(sum);

// function sum(accumulator, value){
//     return accumulator + value;
// }

// document.write(numObj);

// var num = [1,2,3,4,5,6]
// numObj = num.reduceRight(sum);

// function sum(accumulator, value){
//     return accumulator + value;
// }
// document.write(numObj);

// var num = [1,2,3,4,5,6]
// numObj = num.reverse();
// document.write(numObj);

// var num = [1,2,3,4,5,6]
// numObj = num.shift();
// document.write(numObj);

// var num = [1,2,3,4,5,6]
// numObj = num.slice(1,4);
// document.write(numObj);

// var num = [1,2,3,4,5,6]
// numObj = num.some(greaterThanFour);
// function greaterThanFour(item){
//     return item > 8;
// }
// document.write(numObj);

// var num = [1,2,3,4,5,6]
// numObj = num.splice(1,1,"suvro");
// document.write(num);

// var num = ["Banana", "Orange", "Apple", "Mango", "Orange"];
// numObj = num.toString();
// document.write(numObj);

// var num = ["Banana", "Orange", "Apple", "Mango"];
// num.unshift("Grape");
// document.write(num);

// var num = ["Banana", "Orange", "Apple", "Mango"];
// numObj = num.valueOf();
// document.write(numObj);

// var num = ["Banana", "Orange", "Apple", "Mango"];
// numObj = num.sort();
// document.write(numObj);

// var a = ["A","B","C","D","E"]
// var b=a.entries()
// document.write(b.next().value);
// document.write("<br>")
// document.write(b.next().value);
// document.write("<br>")
// document.write(b.next().value);
// document.write("<br>")
// document.write(b.next().value);
// document.write("<br>")
// document.write(b.next().value);

// var a = ["1","2","3","4","5"];
// var b = Array.from(a, frm);
// function frm(x) {
//     return Number(x);
// }
// document.write(b);

// Methods of String

// var a = "Suvro"
// document.write(a.charAt(0));

// var a = "Suvro"
// document.write(a.charCodeAt(0));

// var a = "Suvro"
// var b = "Debdas"
// document.write(a.concat(b));

// var a = "Suvro"
// var b = a.endsWith("o")
// document.write(b);

// var a = "Suvro"
// var b = a.includes("u")
// document.write(b);

// var a = "Suvro"
// var b = a.indexOf("o")
// document.write(b);

// var a = "Suvro"
// document.write(a.match("b"));

// var a = "Suvro"
// var b = a.repeat(2)
// document.write(b);

// var a = "Suvro Debdas"
// var b = a.replace("Suvro","Babi");
// document.write(b);

// var a = "Suvro Debdas"
// var b = a.search("S");
// document.write(b);

// var a = "Suvro Debdas"
// var b = a.slice(1,4);
// document.write(b);

// var a = "Suvro-Debdas-Software-Engineer"
// var b = a.split("-");
// document.write(b);

// var a = "Suvro Debdas"
// var b = a.startsWith("D");
// document.write(b);

// var a = "Suvro Debdas"
// var b = a.substring(0,4);
// document.write(b);

// var a = "Suvro Debdas"
// var b = a.toLocaleLowerCase();
// document.write(b);

// var a = "suvro debdas"
// var b = a.toLocaleUpperCase();
// document.write(b);

// var a = "SUVRO DEBDAS"
// var b = a.toLowerCase();
// document.write(b);

// var a = "suvro debdas"
// var b = a.toUpperCase();
// document.write(b);

// var a = 1;
// document.write(typeof(a) + "<br>");
// document.write(typeof(a.toString()));

// var a = "suvro"
// var b = a.valueOf();
// document.write(b);

// var a = "suvro debdas"
// document.write(a.length);

// var a = "suvro"
// var b = a.substr(0,2);
// document.write(b);

// var a = "suvro debdas"
// var b = a.lastIndexOf();
// document.write(b);

// Form Validation.

function clearErrors(){
    errors = document.getElementsByClassName('formerror');
    for(let item of errors){
        item.innerHTML = " ";
    }
}
function seterror(id, error){
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}
function validateForm(){
    var returnval = true;
    clearErrors();

    // Conditions for name validation:

    var name = document.forms['myForm']["fname"].value;
    if (name.length<5){
        seterror("name", "*Length of name is too short");
        returnval = false;
    }
    if (name[0].search(/[A-Z]/)==-1){
        seterror("name", "*First letter of your name should be in uppercase.");
        returnval = false;
    }

    // Conditions for email validation:

    var email = document.forms['myForm']["femail"].value;
    if (email.length>30){
        seterror("email", "*Email length is too long");
        returnval = false;
    }

    // Conditions for phone validation:

    var phone = document.forms['myForm']["fphone"].value;
    if (phone.length != 10){
        seterror("phone", "*Phone number should be of 10 digits!");
        returnval = false;
    }

    // Conditions for password validation:

    var password = document.forms['myForm']["fpass"].value;
    if (password.length < 8){ 
        seterror("pass", "*Password should be atleast 6 characters long!");
        returnval = false;
    }
    if (password== ""){ 
        seterror("pass", "*Please enter any password!");
        returnval = false;
    }
    if (password.search(/[0-9]/)==-1){ 
        seterror("pass", "*Please add atleast one numeric character!");
        returnval = false;
    }
    if (password.search(/[a-z]/)==-1){ 
        seterror("pass", "*Please add atleast one lowercase character!");
        returnval = false;
    }
    if (password.search(/[A-Z]/)==-1){ 
        seterror("pass", "*Please add atleast one uppercase character!");
        returnval = false;
    }
    if (password.search(/[!\@\#\$\%\^\&\*]/)==-1){
        seterror("pass", "*Please add atleast one uppercase character!");
        returnval = false;
    }
    var cpassword = document.forms['myForm']["fcpass"].value;
    if (cpassword != password){
        seterror("cpass", "*Password and Confirm password should match!");
        returnval = false;
    }
return returnval;
}

function focusFunction(element){
    element.style.background = "#6e593a";
}

function blurFunction(element){
    element.style.background = "";
}

function infname(element){
    var x = element.value;
    document.getElementById("fname").innerHTML = x;
}

function infemail(element){
    var x = element.value;
    document.getElementById("femail").innerHTML = x;
}

function infphone(element){
    var x = element.value;
    document.getElementById("fphone").innerHTML = x;
}