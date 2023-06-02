enum WeekHours {
    ADULT = 40,
    TEENAGER = 36,
    KID = 24
}

interface SalaryCalculationStrategy {
    calculateWeekSalary(): number;
}

export class AdultTimeStrategy implements SalaryCalculationStrategy {
    private hourlyRate: number;

    constructor(hourlyRate: number) {
        this.hourlyRate = hourlyRate;
    }

    calculateWeekSalary(): number {
        return this.hourlyRate * WeekHours.ADULT;
    }
}

export class TeenagerTimeStrategy implements SalaryCalculationStrategy {
    private hourlyRate: number;

    constructor(hourlyRate: number) {
        this.hourlyRate = hourlyRate;
    }

    calculateWeekSalary(): number {
        return this.hourlyRate * WeekHours.TEENAGER;
    }
}

export class KidTimeStrategy implements SalaryCalculationStrategy {
    private hourlyRate: number;

    constructor(hourlyRate: number) {
        this.hourlyRate = hourlyRate;
    }

    calculateWeekSalary(): number {
        return this.hourlyRate * WeekHours.KID;
    }
}
export class Employee {
    private name: string;
    private age: number;
    private strategy: SalaryCalculationStrategy;

    constructor(name: string, age: number, stratagy: SalaryCalculationStrategy) {
        this.name = name;
        this.age = age;
        this.strategy = stratagy
    }

    calculateSalary(): number {
        return this.strategy.calculateWeekSalary();
    }
}