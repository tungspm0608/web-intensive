class Employee {
    name;
    taskList;
    constructor(name,taskList) {
        this.name = name;
        this.taskList = taskList
    }

    displayInfo() {
        console.log(this.name,this.taskList);
    }
}

class Manager extends Employee {
    employee;
    constructor(name,taskList,employee) {
        super(name,taskList)
        this.employee = []
    }

    addEmployee(e) {
        if(e instanceof Employee) {
            console.log(e);
            this.employee.push(e)
        }
    }
}

let b = new Manager('tung',[1,1,2])
let c = new Employee('tung',[1,1,2])
b.addEmployee(c)
console.log(b);