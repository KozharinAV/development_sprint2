import { SamsungSmartphoneFactory, AppleSmartphoneFactory } from "../patterns/abstractFactoryClasses"

const samsungFactory = new SamsungSmartphoneFactory();
const appleFactory = new AppleSmartphoneFactory();

const samsungPhone = samsungFactory.createSmartphone();
console.log("Производитель:", samsungPhone.getName());
console.log("Процессор:", samsungPhone.getProcessor());
console.log("Оперативная память:", samsungPhone.getRAM());
console.log("Память:", samsungPhone.getStorage());

console.log("-----------------------------------");

const applePhone = appleFactory.createSmartphone();
console.log("Производитель:", applePhone.getName());
console.log("Процессор:", applePhone.getProcessor());
console.log("Оперативная память:", applePhone.getRAM());
console.log("Память:", applePhone.getStorage());