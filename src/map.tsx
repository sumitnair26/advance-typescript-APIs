type employee = {
    name:string,
    department:String,
    team:string
}

const employee = new Map<string, employee>();

employee.set("sumit.nair26@gmail.com",{name:"Sumit", department:"Software", team:"product"})
employee.set("amit@gmail.com",{name:"Amit", department:"Facility Manager", team:"fmg"})

const empDetail = employee.get("sumit.nair26@gmail.com");

//employee.delete("sumit.nair26@gmail.com");

console.log(empDetail);