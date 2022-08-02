// Ways to access objects in javascript
// let a = " "
// let student = {
//     fname: "Suvro",
//     lname: "Debdas",
//     cars: [
//         {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
//         {name:"BMW", models:["320", "X3", "X5"]},
//         {name:"Fiat", models:["500", "Panda"]}
//       ]
// };

// for (i in student.cars){
//     a += "<h2>" + student.cars[i].name + "</h2>" + "<br>";
//     for ( j in student.cars[i].models){
//         a += student.cars[i].models[j] + "<br>";
//     }
// }

// document.write(a);

// Javascript Accessors

// let student = {
//         fname: "suvro",
//         lname: "Debdas",
//         age: 28,
//         get abc(){
//             return this.fname.toUpperCase();
//         }
// };
// console.log(student.abc);

// let student = {
//         fname: "suvro",
//         lname: "Debdas",
//         age: 28,
        
//         set func2(n){
//             this.fname = n.toUpperCase();
//         }
// };

// student.func2 = "babi";

// console.log(student.fname);

// object.defineProperty()

// var person = {
//     _id: 1,
//     name: "Suvro",
// }
// Object.defineProperty(person,'id',{
//     get fun1(){
//         return "id is " + this._id;
//     },
//     set fun2(id){
//         this._id = id;
//     }
// });
// console.log(person._id);
// person._id = 4;
// console.log(person._id);

// var fees = new Object();
// fees ['Rahul'] = 500;
// fees ['Suvro'] = 100;
// fees ['Ram'] = 100;
// fees ['Rohan'] = 100;
// console.log(fees.Rahul);
// console.log(fees['Ram']);


// Creating a new set
// const s = new Set();
// Addind elements to a set
// s.add("suvro");
// s.add("debdas");
// console.log(s);
// // Deleting elements from a set
// s.delete("debdas");
// console.log(s);
// // Checking if any particular elements is present in the set or not
// console.log(s.has("suvro"));
// // Removing all the elements from te set
// s.clear();
// console.log(s);
// // Invoking a call lement for each elemnt of the set
// var itr=s.entries();
// for(let i of itr)
//   {
// console.log(i+"<br>");
//   }
// // Returns an iterator with all the keys in a set
// console.log(s.keys(s));
// // Returns an iterator with all the values in a set
// console.log(s.values(s));
// // Invokes a callback for each element
// var itr = " ";
// s.forEach(function(values){
//     itr += values + "<br>";
//     document.write(itr);
// });

// Creating a new map
// var m = new Map();
// Addind elements to a map
// m.set("fname","suvro");
// m.set("lname","debdas");
// console.log(m);
// Setting the value of a key in a map
// console.log(m.get(0));
