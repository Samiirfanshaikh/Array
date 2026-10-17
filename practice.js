// // 1. Array : data structure used to store multiple value in single variable like strings, number or other value
// let numbers = [10, 20, 30, 40];
// console.log(numbers)
// let mixed = ["Sami", 21, true];
// console.log(mixed)

// let students = ["Sami","Max","John"];
// console.log(students)
// let marks = [90, 90,90];
// console.log(marks)
// let cities = ["Mumbai", "Hyderabad", "Banglore"];
// console.log(cities)

// //2. Indexing: giving position inside array
// let fruits = ["Apple", "Banana", "mango", "Litchi"];
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits[4]);

// //3. Accessing Array Elements : retreives value from array using indexing 
// let products = ["Laptop", "Mouse", "Keyboard", "Monitor"];
// console.log(products[0]);
// console.log(products[3]);
// let selectedProduct = products[1];
// console.log(selectedProduct);
// console.log(products[20]);

// // 4. updating Array Elements : changing value at specific index
// let fruit = ["Apple","banana","Mango"];
// fruit[1] ="Orange";
// console.log(fruit);

// let skills = ["HTML", "CSS", "JavaScript", "React"];
// skills[1] = "Tailwind CSS"
// skills[3] = "Node.js"
// console.log(skills);
// console.log(skills[1]);

// // 5. length : property tells how many element in array
// // last index will be array.length-1

// let fruits = ["Apple","Banana","Mango"];
// console.log(fruits.length);
// let languages = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
// console.log(languages.length);

// //6. push(): add element to end of array
// let fruit = ["Apple", "Banana"];
// fruit.push("Litchi");
// console.log(fruit)

// let skills = ["HTML", "CSS"];
// skills.push("React");
// skills.push("Javascript");
// console.log(skills);
// console.log(skills.length);

// // 7. pop() : remove last element of array
// let vegetable = ["Tomato", "Banana", "Mango"];
// let removedvegetable = vegetable.pop();
// console.log(vegetable);
// console.log(removedvegetable);

// let skills = ["HTML", "CSS", "JavaScript", "React"];
// removedskilled = skills.pop();
// console.log(removedskilled);
// console.log(skills)
// console.log(skills.length)

// // we remove last element in pop() and add element at last in push()

// //8. shift() : remove first element from array
// let fruits = ["Apple", "Mango", "Banana"];
// let removedfruit = fruits.shift();
// console.log(removedfruit);
// console.log(fruits);

// let students = ["Sami", "Max", "John", "Ali"];
// let removedstudents = students.shift()
// console.log(removedstudents);
// console.log(students);
// console.log(students.length)
// pop() removes last and shift() removes first

// // 9. unshift(): adds element to first
// let sweet = ["mango","banana","orange"];
// let newsweet = sweet.unshift("Apple", "Kiwi");
// console.log(newsweet);
// console.log(sweet)

// let skills = ["Node", "CSS", "Javascript"];
// let newskills = skills.unshift("Html");
// console.log(skills);
// console.log(newskills);
// console.log(skills[0]);
//push() add one or more elements at end of an array and unshift() add one or more element at start of an array

// 10. Looping through array : visiting each elemnt one by one. 
// //for loop to print every element
// let skillstudy = ["HTML", "CSS", "Javascript"];
// for (let i = 0; i< skillstudy.length; i++){
//     console.log(skillstudy[i]);
// }

//for loop to print indexing
// let skills = ["HTML", "CSS", "JavaScript"];
// for (let i = 0; i < skills.length; i++) {
//     console.log(i);
// }

//for...of: takes each item from array at a time and let us use inside loop
// let fruits = ["mango", "orange", "apple"];
// for (let fruit of fruits){
//     console.log(fruit)
// }

//for loop with if
// let numbers = [10, 20, 30, 40, 50];
// for(let number of numbers){
//     if (number > 25){
//         console.log(number);
//     }
// }

// let skills = ["HTML", "CSS", "JavaScript", "React"];
// for(let skill of skills){
//     if(skill.length >= 3){
//         console.log(skill)
//     }
// }//for..of means loop take the element from the array. if condition checks if its true

//for..in : iterates over property keys with indexing
// let skills = ["HTMl", "CSS", "Javascript"];
// for (let index in skills){
//     console.log(index, skills[index]);
// }

//while : repeats while condition remains true.
// let skill = ["HTML", "CSS", "Javascript"];
// let i = 0;
// while (i < skill.length){
//     console.log(skill[i]);
//     i++;
// }


//do...while : Executes the code at least once, then checks the condition.
// let skills = ["HTML", "CSS", "JavaScript"];
// let i = 0;
// do {
//     console.log(skills[i]);
//     i++;
// } while (i < skills.length);

// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// forEach(): used to run function once for every element in array

// let fruits = ["Apple", "Banana", "mango"];
// fruits.forEach(function(fruit){
//     console.log(fruit);
// })

// let numbers = [10, 20, 30, 40, 50];
// numbers.forEach(function(number){
//     if(number>25){
//         console.log(number)
//     }
// })

//slice : used to copy a portion of array withpiut changing original array

// let fruits = ["Mango", "Orange", "Apple", "Litchi","strawberry"];
// let result = fruits.slice(1, 4);
// console.log(result);
// console.log(fruits);

//splice() : used to add, remove or replace elements 
//splice() removing
// let skills = ["HTML", "CSS", "Javascript", "React"];
// skills.splice(1,2);
// console.log(skills);

// let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
// fruits.splice(2, 1);
// console.log(fruits);

//splice() adding : adds elements without removing anything
// let skills = ["HTML", "CSS", "React"];
// skills.splice(2, 0, "JavaScript");
// console.log(skills);

// let fruits = ["Apple", "Mango", "Orange"];
// fruits.splice(1, 0, "Banana", "Grapes");
// console.log(fruits);

// let cart = 11;
// if (cart.length < 10) {
//     cart.push(product);
// } else {
//     console.log("Cart limit reached");
// }

//map() : method that goes thorigh every element, applies change and returns new array
// let numbers = [10, 20, 30];
// let doubled = numbers.map(function(number){
//     return number * 10;
// });
// console.log(doubled);

// let prices = [100, 200, 500];
// let updatedPrices = prices.map(function(price){
//     return price * 1.10;
// });
// console.log(updatedPrices);

// let products = [
//     { name: "laptop", price: 50000},
//     { name: "Mouse", price: 1000},
//     { name: "Keyboard", price: 2000}
// ];
// let updatedproducts = products.map(function(product){
//     return{
//         name: product.name,
//         price: product.price*0.9
//     };
// });
// console.log(updatedproducts);

//filter : creates new array contains only elements that satisfy condition and does not change original array and keeps elements only condition is true

// let numbers = [10, 20, 30, 40, 50];
// let result = numbers.filter(function(number){
//     return number > 25;
// });
// console.log(result);

// const students = [
//     { name: "Ayaan", marks: 35 },
//     { name: "Sara", marks: 82 },
//     { name: "Rohan", marks: 48 },
//     { name: "Mira", marks: 91 }
// ];

// let topStudent = students.filter((students)=>{
//     return students.marks >= 80;
// })
// console.log(topStudent)

// let products = [
//     {name : "laptop", stock : 5},
//     {name : "Mouse", stock : 0},
//     {name : "Keyboard", stock : 3},
// ];
// let availableproducts = products.filter(function(product){
//     return product.stock > 0;
// })
// console.log(availableproducts);

// let users = [
//     {name : "Sami", age : 21},
//     {name : "Max", age : 17},
//     {name : "Jake", age : 20},
//     {name : "Samuel", age : 25},
//     {name : "john", age : 25},
// ];
// let oldusers = users.filter(function(users){
//     return users.age >= 18;
// });
// console.log(oldusers);

// find() : returns first element matching condition and stops while not changing original array
// let numbers = [ 10, 20, 30, 40, 30, 60, 70];
// let result = numbers.find(function(number){
//     return number > 25;
// });
// console.log(result);

// let products = [
//     {id: 101, name : "keyboard", price: 5000},
//     {id: 102, name : "Laptop", price: 10000},
//     {id: 103, name : "Mouse", price: 2000}
// ];
// let selectedProduct = products.find(function(product){
//     return product.id === 102;
// });
// console.log(selectedProduct);

// let users = [
//     {id: 1, name: "Sami", role: "Developer"},
//     {id: 2, name: "Max", role: "Designer"},
//     {id: 3, name: "John", role: "Developer"}
// ];
// let selectedusers = users.find(function(user){
//     return user.id === 3;
// });
// console.log(selectedusers);

// // some() : checks one element satisfies condition
// let numbers = [10, 20, 30, 40, 50];
// let result =  numbers.some(function(number){
//     return number > 35;
// });
// console.log(result);

// let employees = [
//     {name: "Sami", role: "Developer"},
//     {name: "Max", role: "Designer"},
//     {name: "John", role: "Admin"}
// ];
// let hasAdmin = employees.some(function(employee){
//     return employee.role === "Admin";
// });
// console.log(hasAdmin);

// //every() : checks all condition is satisfied
// let numbers = [10, 20, 30, 40];
// let result = numbers.every(function(number){
//     return number >= 10;
// });
// console.log(result);

// let employees = [
//     {name : "Sami", Punchin: true},
//     {name : "Max", Punchin: true},
//     {name : "John", Punchin: false},
// ];
// let allemployees = employees.every(function(employee){
//     return employee.completed === true;
// });
// console.log(allemployees);

// let products = [
//     {name: "laptop", stock: 5},
//     {name: "Mouse", stock: 0},
//     {name: "Keyboard", stock: 3},
// ];
// let allproducts = products.some(function(product){
//     return product.stock === 0;
// });
// console.log(allproducts);

// let products = [
//     {name: "laptop", stock: 5},
//     {name: "mouse", stock: 0},
//     {name: "Keyboard", stock: 3},
// ];
// let allproducts = products.every(function(product){
//     return product.stock > 0;
// });
// console.log(allproducts);

// //reduce : process array and combine its element to one final value
// let numbers = [10, 20, 30];
// let allnumbers = numbers.reduce(function(sum, number){
//     return sum + number;
// }, 0);
// console.log(allnumbers);

// let prices = [100, 250, 500];
// let total = prices.reduce(function(sum, price){
//     return sum + price;
// }, 0);
// console.log(total);

// let skills = ["HTML", "CSS", "JS"];

// skills.splice(1, 1);
// skills.splice(1, 0, "Tailwind");
// skills.splice(2, 1, "Bootstrap");
// console.log(skills)