interface Command {
    execute(): void;
    undo(): void;
}

export class Light {
    lightOn(): void {
        console.log("Свет включен");
    }

    lightOff(): void {
        console.log("Свет выключен");
    }
}

export class TV {
    tvOn(): void {
        console.log("Телевизор включен");
    }

    tvOff(): void {
        console.log("Телевизор выключен");
    }
}

export class LightOnCommand implements Command {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute(): void {
        this.light.lightOn();
    }

    undo(): void {
        this.light.lightOff();
    }
}

export class LightOffCommand implements Command {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute(): void {
        this.light.lightOff();
    }

    undo(): void {
        this.light.lightOn();
    }
}

export class TVOnCommand implements Command {
    private tv: TV;

    constructor(tv: TV) {
        this.tv = tv;
    }

    execute(): void {
        this.tv.tvOn();
    }

    undo(): void {
        this.tv.tvOff();
    }
}

export class TVOffCommand implements Command {
    private tv: TV;

    constructor(tv: TV) {
        this.tv = tv;
    }

    execute(): void {
        this.tv.tvOff();
    }

    undo(): void {
        this.tv.tvOn();
    }
}

export class RemoteControl {
    private commands: Command[] = [];
    private undoStack: Command[] = [];
    private redoStack: Command[] = [];

    setCommand(command: Command): void {
        this.commands.push(command);
    }

    pressButton(index: number): void {
        if (index >= 0 && index < this.commands.length) {
            const command = this.commands[index];
            command.execute();
            this.undoStack.push(command);
        }
    }

    undo(): void {
        if (this.undoStack.length > 0) {
            const command = this.undoStack.pop();
            command?.undo();
            this.redoStack.push(command!);
        }
    }

    redo(): void {
        if (this.redoStack.length > 0) {
            const command = this.redoStack.pop();
            command?.execute();
            this.undoStack.push(command!);
        }
    }
}



