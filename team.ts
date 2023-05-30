import {
    Light,
    TV,
    LightOnCommand,
    LightOffCommand,
    TVOnCommand,
    TVOffCommand,
    RemoteControl
} from "./src/patterns/teamClasses";

const light = new Light();
const tv = new TV();

const lightOnCommand = new LightOnCommand(light);
const lightOffCommand = new LightOffCommand(light);
const tvOnCommand = new TVOnCommand(tv);
const tvOffCommand = new TVOffCommand(tv);

const remoteControl = new RemoteControl();
remoteControl.setCommand(lightOnCommand); // Кнопка 0 включает свет
remoteControl.setCommand(lightOffCommand); // Кнопка 1 выключает свет
remoteControl.setCommand(tvOnCommand); // Кнопка 2 включает телевизор
remoteControl.setCommand(tvOffCommand); // Кнопка 3 выключает телевизор

remoteControl.pressButton(0); // Включить свет
remoteControl.pressButton(2); // Включить телевизор
remoteControl.undo(); // Отменить операцию (включение телевизора)
remoteControl.redo(); // Вернуть операцию (включение телевизора)
remoteControl.pressButton(1);//Выключить свет