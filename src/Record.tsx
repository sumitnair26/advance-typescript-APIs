/*
    Record :

    The Record<K, T> utility type is used to construct a type with a set of properties K of a given type T. It provides a cleaner and more concise syntax for typing objects when you know the shape of the values but not the keys in advance.

*/

type Users = Record<string, {id:string, name:string,age:number
}>

const users = {
    "sumit@test.com":{
        id:"sumit@test.com",
        name:"sumit",
        age:30
    },
    "test@test.com":{
        id:"test@test.com",
        name:"test",
        age:28
    }
}