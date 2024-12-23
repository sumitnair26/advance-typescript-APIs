/*
The Pick utility type is part of TypeScript's mapped types, which enable you to create new types based on the keys of an existing type. The syntax for Pick is as follows:
Pick<Type, Keys>
*/

interface User_detail {
    name:string,
    surname:string,
    age:number,
    email:string,
    password:string
}

type updateUserProp = Pick<User_detail, 'name'|'surname' |'age'>;

const updateUserDetail = (user:updateUserProp) => {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
}

