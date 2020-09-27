class Observer {
    constructor() {
        this.observables = [];
    }
    suscrible(fn) {
        this.observables.push(fn);
    }
    notify(data) {
        this.observables.forEach(fn => fn(data));
    }
    unsubscrible(fn) {
        this.observables = this.observables.filter(obs => obs != fn);
    }
}
const o = new Observer();
const logData1 = data => console.log(`Subscrible: ${data}`);
const logData2 = data => console.log(`Subscrible: ${data}`);
const logData3 = data => console.log(`Subscrible: ${data}`);

o.suscrible(logData1);
o.suscrible(logData2);
o.suscrible(logData3);

o.notify('notified 1');

o.unsubscrible(logData2);
o.notify('notified 2');
