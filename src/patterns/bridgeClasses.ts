abstract class Shape {
    protected color: Color;

    constructor(color: Color) {
        this.color = color;
    }

    abstract draw(): string;
}

interface Color {
    fill(): string;
}

class RedColor implements Color {
    fill() {
        return 'красного цвета';
    }
}

class BlueColor implements Color {
    fill() {
        return 'синего цвета';
    }
}

class Circle extends Shape {
    draw() {
        return `Круг ${this.color.fill()}`;
    }
}

class Square extends Shape {
    draw() {
        return `Квадрат ${this.color.fill()}`;
    }
}

export class BlueCircles extends Circle {
    constructor() {
        super(new BlueColor());
    }
}

export class RedCircles extends Circle {
    constructor() {
        super(new RedColor());
    }
}

export class BlueSquares extends Square {
    constructor() {
        super(new BlueColor());
    }
}

export class RedSquares extends Square {
    constructor() {
        super(new RedColor());
    }
}
