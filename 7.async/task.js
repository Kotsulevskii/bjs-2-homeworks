class AlarmClock {
    constructor (alarmCollection, timerId) {
        this.alarmCollection = [];
        this.timerId = null;
    }
    addClock(time, func, id ) {
        if (id === undefined) {
            throw new Error("Введите параметр ID")
        }
        else if (this.alarmCollection.some(element => element.id === id)) {
            console.error("Будильник с таким id уже существует");
        } else {
            this.alarmCollection.push({time, func, id});
        }
    }
    removeClock(id) {
        let search = this.alarmCollection.findIndex(item => item.id === id);
        if (search > -1) {
            console.log("Звонок не найден");
        } else {
            this.alarmCollection.splice(search, 1);
            console.log("Звонок удален");
        }
    }
    getCurrentFormattedTime() {
        new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
        });
    }
    start() {
        let startClock = checkClock.bind(this);
        function checkClock(item) {
            if (item.time === this.getCurrentFormattedTime()) {
                item.func();
            }
        }
        if (this.timerId === null) {
            this.timerId = setInterval(this.alarmCollection.forEach(item => startClock(item)), 1000);
        }
    }
    stop() {
        if (this.timerId != null) {
            clearInterval(this.timerId);
            return this.timerId = null;
        }
    }
    printAlarms() {
        this.alarmCollection.forEach(element => {
            console.log("Будильник №" + element.id + " заведен на " + element.time + " часов")
        });
    }
    clearAlarms() {
        this.stop();
       this.alarmCollection = [];
    }
}
function testCase() {
    let alarmClock = new AlarmClock;
    alarmClock.addClock("20:30", () => console.log("Будильник №1"), 1);
    alarmClock.addClock("20:31", () => { console.log("Будильник №2"); alarmClock.removeClock(2)}, 2);
    alarmClock.addClock("20:32", () => { console.log("Будильник №3"); stop(); alarmClock.clearAlarms(); alarmClock.printAlarms() }, 3); 
}

