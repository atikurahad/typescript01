let users: object[];

users = [];

let user1: { name: string; age: number };

user1 = { name: "Tamim", age: 34 };
users.push(user1);

let user2: { name: string; age: number };
user2 = { name: "Amir", age: 24 };
users.push(user2);

let user3: { name: string; age: number };
user3 = { name: "Tanjim", age: 22 };
users.push(user3);

// console.log(users);


for (const key in users) {
    console.log(users[key]['name'] , users[key]['age']);
  }