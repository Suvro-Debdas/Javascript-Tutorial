// Call Back Function Javascript

// function one(sum) {
//     document.getElementById("demo").innerHTML = sum;
// }

// function two(num1,num2,myCallback){
//     var sum = num1 + num2;
//     myCallback(sum);
// }
// two(5,5,one);

// Javascript addEventListener() example:01

// function show(){
//     alert("Button Clicked");
// }

// var a = document.getElementById("btn");
// a.addEventListener("click",show);

// Javascript addEventListener() example:02

// function fun1(){
//     alert("Button Clicked first time");
// }

// function fun2(){
//     alert("Button Clicked second time");
// }

// var a = document.getElementById("btn");
// a.addEventListener("click",fun1);
// a.addEventListener("click",fun2);

// Javascript Create Node Element example:02

// var a = document.createElement("h1");
// console.log(a);

// var a = document.createTextNode("Text Node");
// console.log(a);

// var a = document.createComment("Create Comment");
// console.log(a);

// Creating an empty fragment

// var df = document.createDocumentFragment();

// // Creating an element h3

// var hNode = document.createDocumentFragment("h3");
// var pNode = document.createDocumentFragment("p");

// // Creating an element p

// hNode.textContent = "h3 from javascript";
// pNode.textContent = "p from javascript";

// // Appending Nodes to DF

// df.append(hNode);
// df.append(pNode);

// // Printing the value of df

// console.log(df);

// Append Child method

// var a = document.createElement("h1");
// var b = document.createTextNode("My name is Suvro Debdas");
// a.appendChild(b);
// console.log(a);

// // Insert Before method

// var c = document.getElementById("acib");
// c.insertBefore(b,c.childNodes[2]);

// var a = document.createElement("p");
// var b = document.createTextNode("My name is Suvro Debdas. ");
// a.appendChild(b);
// var c = document.createTextNode("I am a software Developer");
// a.appendChild(c);
// console.log(a);

// var d = document.getElementById("acib");
// d.insertBefore(a,c.childNodes[0]);

// var a = document.getElementById("mydiv");
// var b = document.getElementById("myh1");
// var c = "Before Begin";
// var d = "After Begin";
// var e = "Before End";
// var f = "After End";
// b.insertAdjacentText("beforebegin",c);
// b.insertAdjacentText('afterbegin',d);
// b.insertAdjacentText('beforeend',e);
// b.insertAdjacentText('afterend',f);

// var a = "Suvro Debdas"
// document.write("My name is "+ a);
// document.write("<br>");
// document.write(`My name is ${a}`);

// Rest Operator

// function sum(){
//     let sum = 0;
//     for (let i in arguments){
//         sum = sum + arguments[i];
//     }
//     console.log(sum);
// }

// sum("suvro",5,5);

// function sum(name, ...args){
//         let sum = 0;
//         for (let i in args){
//             sum += args[i];
//         }
//         console.log(name);
//         console.log(sum);
//     }
    
// sum("suvro",5,5);

// function sum(name, ...args){
//     let sum = 0;
//     for (let i in args){
//         sum += args[i];
//     }
//     document.write(name);
//     document.write("<br>");
//     document.write(sum);
// }

// var a = [10,20,30]

// sum("suvro",5,5,...a);

// var a = [10,20,30,40,50];
// var b = [50,60,70,80,90];
// var c = [...a,...b];
// document.write(c);

// let n = "name";
// let c = "course";

// var obj = {
//     [n] : "Suvro",
//     [c] : "B.Tech in CE"
// }
// console.log(obj);

// let user = ["suvro",28,"kolkata"];

// let [name, age, city] = user;

// document.write(name);
// document.write("<br>");
// document.write(age);
// document.write("<br>");
// document.write(city);


let person = {
    firstname: "Suvro",
    lastname: "Debdas",
    sayHello () {
        document.write("Hello! I am "+ this.firstname + " and I have a "+ car.brand + " " +car.model);
    }
};

let car = {
    brand: 'Tata',
    model: 'Safari'
}

person.sayHello();




