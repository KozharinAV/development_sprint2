abstract class Smartphone {
    abstract getName(): string;
    abstract getProcessor(): string;
    abstract getRAM(): string;
    abstract getStorage(): string;
}

abstract class SmartphoneFactory {
    abstract createSmartphone(): Smartphone;
}

class SamsungSmartphone extends Smartphone {
    getName(): string {
        return "Samsung Galaxy";
    }

    getProcessor(): string {
        return "Exynos";
    }

    getRAM(): string {
        return "6 GB";
    }

    getStorage(): string {
        return "256 GB";
    }
}

export class SamsungSmartphoneFactory extends SmartphoneFactory {
    createSmartphone(): Smartphone {
        return new SamsungSmartphone();
    }
}

class AppleSmartphone extends Smartphone {
    getName(): string {
        return "iPhone";
    }

    getProcessor(): string {
        return "Apple A14 Bionic";
    }

    getRAM(): string {
        return "8 GB";
    }

    getStorage(): string {
        return "512 GB";
    }
}

export class AppleSmartphoneFactory extends SmartphoneFactory {
    createSmartphone(): Smartphone {
        return new AppleSmartphone();
    }
}

