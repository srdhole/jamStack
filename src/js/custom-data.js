var names = ["Jay", "Stacy", "Anna"];
var userName = names[Math.floor(Math.random() * (Math.floor(names.length)))];
console.log(userName)
document.querySelector(".userName").append(userName);