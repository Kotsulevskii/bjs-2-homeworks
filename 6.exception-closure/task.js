//Task 1
function parseCount(value) {
    if (isNaN(Number.parseInt(value, 10))) {
        throw new Error("Невалидное значение");
    }
    return Number.parseInt(value, 10);;
}
function validateCount(thing) {
    try {
            return parseCount(thing);
    } catch (error) {
        return error;;
    }
}

//Task 2

class Triangle {
    constructor(a, b, c) {
        if (((a + b) < c) || ((b + c) < a) || ((a + c) < b)) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getPerimeter() {
        return(this.a + this.b + this.c);
    }
    getArea() {
        let p = this.getPerimeter() / 2;
        let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return (parseFloat (s.toFixed(3)));
        }
}
function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    }
    catch (error) {
        return {
            getArea: () => "Ошибка! Треугольник не существует",
            getPerimeter: () => "Ошибка! Треугольник не существует"
        }
    }
}