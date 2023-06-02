import { Employee, AdultTimeStrategy, TeenagerTimeStrategy, KidTimeStrategy } from "../patterns/strategyClasses";

const adultEmployee = new Employee("Иван", 25, new AdultTimeStrategy(20));
console.log(`${adultEmployee.calculateSalary()} руб.`);

const TeenAgeEmployee = new Employee("Анна", 17, new TeenagerTimeStrategy(15));
console.log(`${TeenAgeEmployee.calculateSalary()} руб.`);

const KidEmployee = new Employee("Петр", 14, new KidTimeStrategy(10));
console.log(`${KidEmployee.calculateSalary()} руб.`); 