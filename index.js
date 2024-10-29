var users;
users = [];
var user1;
user1 = { name: "Tamim", age: 34 };
users.push(user1);
var user2;
user2 = { name: "Amir", age: 24 };
users.push(user2);
var user3;
user3 = { name: "Tanjim", age: 22 };
users.push(user3);
// console.log(users);
for (var key in users) {
    console.log(users[key]['name'], users[key]['age']);
}
