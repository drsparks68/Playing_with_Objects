
//How would you print/log John's age?
var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];
console.log("Age: " + (users[1].age));




//How would you print/log the name of the first object?
var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];
console.log("Name: " + (users[0].name));




//How would you print/log the name and age of each user using a for loop?
var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];
for (var user in users) {
    console.log("User: " + (users[user].name));
    console.log("Age: " + (users[user].age));
}