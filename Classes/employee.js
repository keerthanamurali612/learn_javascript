// Create a class called 'Employee' with properties for name, salary, and department.

class Employee{
    constructor(e_name,e_depart,e_salary){
        this.name=e_name;
        this.department=e_depart;
        this.salary=e_salary;
    }

    employee_details(){
        return console.log(`our employee name is ${this.name} and the department is ${this.department} and salary is ${this.salary}`);
   }
}

const emp1=new Employee("joahan","marketing department",25000);
const emp2=new Employee("shiva","sales department",22000);
const emp3=new Employee("keerthi","product department ",15000);

emp1.employee_details();
emp2.employee_details();
emp3.employee_details();