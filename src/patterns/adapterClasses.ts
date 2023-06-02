interface Clock {
    setTime(hours: number, minutes: number, seconds: number): void
    displayTime(): void
}

export class DigitalClock implements Clock {
    private hours: number
    private minutes: number
    private seconds: number

    constructor(hours: number, minutes: number, seconds: number) {
        this.hours = hours
        this.minutes = minutes
        this.seconds = seconds
    }
    setTime(hours: number, minutes: number, seconds: number) {
        this.hours = hours
        this.minutes = minutes
        this.seconds = seconds
    }

    displayTime(): void {
        console.log(`Цифровые часы: ${this.hours}:${this.minutes}:${this.seconds}`);
    }
}

export class AnalogClock {
    private hourArrowRotation: number;
    private minuteArrowRotation: number;
    private secondArrowRotation: number;

    constructor(hourArrowRotation: number, minuteArrowRotation: number, secondArrowRotation: number) {
        this.hourArrowRotation = hourArrowRotation;
        this.minuteArrowRotation = minuteArrowRotation;
        this.secondArrowRotation = secondArrowRotation;
    }

    setHourArrowRotation(rotation: number): void {
        this.hourArrowRotation = rotation;
    }

    setMinuteArrowRotation(rotation: number): void {
        this.minuteArrowRotation = rotation;
    }

    setSecondArrowRotation(rotation: number): void {
        this.secondArrowRotation = rotation;
    }

    getHourArrowRotation(): number {
        return this.hourArrowRotation
    }

    getMinuteArrowRotation(): number {
        return this.minuteArrowRotation
    }

    getSecondArrowRotation(): number {
        return this.secondArrowRotation
    }

    displayTime(): void {
        console.log(`Стрелочные часы: ${this.hourArrowRotation}°:${this.minuteArrowRotation}°:${this.secondArrowRotation}°`);
    }
}

export class AnalogClockAdapter implements Clock {
    private analogClock: AnalogClock;

    constructor(analogClock: AnalogClock) {
        this.analogClock = analogClock;
    }

    displayTime(): void {
        const hours = this.analogClock.getHourArrowRotation() / 30;
        const minutes = this.analogClock.getMinuteArrowRotation() / 6;
        const seconds = this.analogClock.getSecondArrowRotation() / 6;

        console.log(`Цифровые часы (Адаптер): ${hours}:${minutes}:${seconds}`);
    }
    setTime(hourArrowRotation: number, minuteArrowRotation: number, secondArrowRotation: number): void {
        this.analogClock.setHourArrowRotation(hourArrowRotation)
        this.analogClock.setMinuteArrowRotation(minuteArrowRotation)
        this.analogClock.setSecondArrowRotation(secondArrowRotation)
    }
    getAnalogTime() {
        this.analogClock.displayTime()
    }
}

