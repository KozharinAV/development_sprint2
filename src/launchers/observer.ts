import { RealObserver, GIBDDPost } from "../patterns/observerClasses";

const gibddPost = new GIBDDPost();
const realObserver = new RealObserver();

gibddPost.subscribe(realObserver);
gibddPost.sendNotification('Внимание! Нарушитель движется в сторону второго поста!');
gibddPost.unsubscribe(realObserver);
gibddPost.sendNotification('Ожидается ухудшение дорожной обстановки!');