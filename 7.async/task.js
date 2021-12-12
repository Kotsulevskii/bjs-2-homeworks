class AlarmClock {
    constructor (alarmCollection, timerId) {
        this.alarmCollection = [];
        this.timerId = null;
    }
    addClock(time, func, id ) {
        if (id === undefined) throw new Error("Введите параметр ID");
        if (this.alarmCollection.includes(id) === true) {
            console.error(Error);
        } else {
            this.alarmCollection.push(new Object([time, func, id]));
        }
    }
    removeClock(id) {
        let search = this.alarmCollection.indexOf(id);
        if (search > -1) {
            console.log("Звонок не найден");
        } else {
            this.alarmCollection.splice(search, 1);
            console.log("Звонок удален");
        }
    }
    getCurrentFormattedTime() {
        let actualdate = new Date;
        return (("0" + actualdate.getHours()).slice(-2) + ":" + ("0" + actualdate.getMinutes()).slice(-2));
    }
    start() {
        let startClock = checkClock.bind(this);
        function checkClock() {
            if (this.alarmCollection.Object === this.getCurrentFormattedTime()) {
                this.alarmCollection.Object.func();
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
        this.alarmCollection.forEach(function (item, index) {
            console.log("Будильник №" + item[2] + " заведен на " + item[0] + " часов");
        });
    }
    clearAlarms() {
        this.stop();
        this.alarmCollection.forEach( () => this.alarmCollection.splice(0, this.alarmCollection.length - 1));
    }
}
function testCase() {
    let _AlarmClock = new AlarmClock;
    _AlarmClock.addClock("20:30", () => console.log("Будильник №1"), 1);
    _AlarmClock.addClock("20:31", () => { console.log("Будильник №2"); _AlarmClock.removeClock(2)}, 2);
    _AlarmClock.addClock("20:32", () => { console.log("Будильник №3"); stop(); _AlarmClock.clearAlarms(); _AlarmClock.printAlarms() }, 3); 
}

