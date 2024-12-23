/*
    The Partial utility type in TypeScript is used to create a new type by making all properties of an existing type optional. This is particularly useful when you want to update a subset of an object's properties without needing to provide the entire object.
*/

interface user_details {
    name:string,
    surname:string,
    age:number,
    email:string,
    password:string
}

type updateUserProps = Pick<user_details, 'name' |'surname' |'age'>;

type updateUserPropsOptional = Partial<updateUserProps>

const updateUserDetails = (user:updateUserPropsOptional) => {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
}

updateUserDetails({
    name:"Sss",
    age:10,
})