enum WeekHours {
    ADULT = 40,
    TEENAGER = 36,
    KID = 24
}

interface SalaryCalculationStrategy {
    calculateWeekSalary(): number;
}

class AdultTimeStrategy implements SalaryCalculationStrategy {
    private hourlyRate: number;

    constructor(hourlyRate: number) {
        this.hourlyRate = hourlyRate;
    }

    calculateWeekSalary(): number {
        return this.hourlyRate * WeekHours.ADULT;
    }
}

class TeenagerTimeStrategy implements SalaryCalculationStrategy {
    private hourlyRate: number;

    constructor(hourlyRate: number) {
        this.hourlyRate = hourlyRate;
    }

    calculateWeekSalary(): number {
        return this.hourlyRate * WeekHours.TEENAGER;
    }
}

class KidTimeStrategy implements SalaryCalculationStrategy {
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

    constructor(name: string, age: number, hourlyRate: number) {
        this.name = name;
        this.age = age;
        if (age > 18) this.strategy = new AdultTimeStrategy(hourlyRate)
        else if (age < 18 && age >= 16) this.strategy = new TeenagerTimeStrategy(hourlyRate)
        else this.strategy = new KidTimeStrategy(hourlyRate)
    }

    calculateSalary(): number {
        return this.strategy.calculateWeekSalary();
    }
}