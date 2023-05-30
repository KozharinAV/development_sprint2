interface Observer {
    update(message: string): void;
}


export class GIBDDPost {
    private observers: Observer[] = [];

    // Подписаться на оповещения
    subscribe(observer: Observer) {
        this.observers.push(observer);
    }

    // Отписаться от оповещений
    unsubscribe(observer: Observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    // Отправка оповещения всем наблюдателям
    sendNotification(message: string) {
        for (const observer of this.observers) {
            observer.update(message);
        }
    }
}

// Конкретный наблюдатель
export class RealObserver implements Observer {
    update(message: string) {
        console.log(`Новое оповещение: ${message}`);
    }
}


