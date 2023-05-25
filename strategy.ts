import { Employee } from "./src/patterns/strategyClasses";

const adultEmployee = new Employee("Иван", 25, 20);
console.log(`${adultEmployee.calculateSalary()} руб.`);

const TeenAgeEmployee = new Employee("Анна", 17, 15);
console.log(`${TeenAgeEmployee.calculateSalary()} руб.`);

const KidEmployee = new Employee("Петр", 14, 10);
console.log(`${KidEmployee.calculateSalary()} руб.`); 