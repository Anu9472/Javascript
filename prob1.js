for(let i=1;i<= 5; i++){
    console.log(i);
    
}

for(let i =0; i <3; i++){
    console.log("Hello");
    
}

//  let i = 1;
//  while(i <= 3){
//      console.log(i);
//     i++;
    
//  }

//  let i=5;
//  do{
//     console.log(i);
//      i++;
//  }while(i<5);

//  while(true){
//      console.log("Infinite");
    
//  }

// for (let i = 1; i <= 10; i++){
//     console.log(i);
    
// }

for(let i =2; i<= 10; i+=2){
    console.log(i);
    
}
for(let i = 1; i<=10; i++){
    console.log(i);
    
}
for(let i=2; i<= 10; i+=2){
    console.log(i);
    
}

let count = 1;
while (count <= 5){
    console.log("Count is:" + count);
    count++;
    
}

// let number = 1;
// do{
//     console.log("Number is:" + number);
//     number++;
// }while (number <= 3);

// let fruits = ["Apple","banana","Mango"];
// for(let fruit of fruits){
//     console.log(fruit);
    
// }

let student = {name: "Anushka", age: 16, course: "Web Development"};
for (let key in student){
    console.log(key +":"+ student[key]);
    
}

let teacher ={name:"Anushka", Qualification:"10 completed", subject:"Fullstack"};
for(let key in teacher){
    console.log(key +":"+ student[key]);
    
}

for (let i =1; i<= 5;i++){
    console.log("Hello Anushka!This is loop number" + i );
    
}


let a =[1,2,3,4,]



// console.log(a);

// a.pop("4")

// a.shift("6")
// console.log(a);
// a.unshift("6")
// console.log(a);

// a.pop("7")
// console.log(a);

let colour = ["red","green","blue"]

// console.log(colour[1]);
// console.log(colour[2]);
colour.push("yellow")
console.log(colour);

// let fruits =["Mango","Banana","orange"]

// fruits.unshift("orange")
// fruits.shift("orange")
// fruits.pop("orange")
// console.log(fruits)

//  let haskiwi=fruits.includes("kiwi")
// console.log(haskiwi);




let number=["10","20","30","40","50","60"]
// // console.log(number.length);
// number.map("")

number.push("10")
console.log(number);

// let fruits = ["Mango","orange","watermelon","kiwi"]
// for(let i = 0;i< fruits.length;i++){
//     console.log(fruits[i]);
    
// }


let numbers = [1, 2, 3, 4];

// use map() to double each number
let doubled = numbers.map(function(num) {
  return num * 12;
});

console.log(doubled);

// let sum=[10,20,30,40,50,60,70,80,90,100];
// let no = sum.map(function(sum){
//     return sum -10;
// })
// console.log(no);

let sum =[10,20];
let no = sum.map(function(sum){
    return sum *2
})
console.log(no);

// function greet(name, callback) {
//   console.log("Hello, " + name);
//   callback();  // calling the callback function
// }

// function sayGoodbye() {
//   console.log("Goodbye!");
// }

// // calling greet() and passing sayGoodbye as a callback
// greet("Anushka", sayGoodbye);

function greet(name, callback){
    console.log("hello," + name);
    callback();
    
}
function sayGoodbye(){
    console.log("Goodbye!");
    
}
// calling greet()

greet("Anushka", sayGoodbye)



let 


