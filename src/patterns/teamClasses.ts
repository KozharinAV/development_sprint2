interface Command {
    execute(): void;
    undo(): void;
}

export class Light {
    on(): void {
        console.log("Свет включен");
    }

    off(): void {
        console.log("Свет выключен");
    }
}

export class TV {
    on(): void {
        console.log("Телевизор включен");
    }

    off(): void {
        console.log("Телевизор выключен");
    }
}

export class LightOnCommand implements Command {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute(): void {
        this.light.on();
    }

    undo(): void {
        this.light.off();
    }
}

export class LightOffCommand implements Command {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute(): void {
        this.light.off();
    }

    undo(): void {
        this.light.on();
    }
}

export class TVOnCommand implements Command {
    private tv: TV;

    constructor(tv: TV) {
        this.tv = tv;
    }

    execute(): void {
        this.tv.on();
    }

    undo(): void {
        this.tv.off();
    }
}

export class TVOffCommand implements Command {
    private tv: TV;

    constructor(tv: TV) {
        this.tv = tv;
    }

    execute(): void {
        this.tv.off();
    }

    undo(): void {
        this.tv.on();
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



