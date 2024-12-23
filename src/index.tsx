interface User {
    name:string,
    age: number
}

const sumOfAge = (user1:User, user2:User) => {
    return user1.age+user2.age;
}

const result = sumOfAge(
    {
        name:"Sumit",
        age:30
    },{
        name:"Amit",
        age:31
});

console.log(result);