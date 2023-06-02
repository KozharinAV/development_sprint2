class DigitalClock {
    displayTime(): void {
        const currentTime = new Date();
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const seconds = currentTime.getSeconds();

        console.log(`Цифровые часы: ${hours}:${minutes}:${seconds}`);
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

export class AnalogClockAdapter extends DigitalClock {
    private analogClock: AnalogClock;

    constructor(hourArrowRotation: number, minuteArrowRotation: number, secondArrowRotation: number) {
        super();
        this.analogClock = new AnalogClock(hourArrowRotation, minuteArrowRotation, secondArrowRotation);
    }

    displayTime(): void {
        const hours = this.analogClock.getHourArrowRotation() / 30;
        const minutes = this.analogClock.getMinuteArrowRotation() / 6;
        const seconds = this.analogClock.getSecondArrowRotation() / 6;

        console.log(`Стрелочные часы: ${this.analogClock.getHourArrowRotation()}:${this.analogClock.getMinuteArrowRotation()}:${this.analogClock.getSecondArrowRotation()}`)

        console.log(`Цифровые часы (Адаптер): ${hours}:${minutes}:${seconds}`);
    }
}

