"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_car(manufacturer, model, ...options) {
    let car = { manufacturer, model };
    for (let [key, value] of options) {
        car[key] = value;
    }
    return car;
}
console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Honda", "Civic", ["sunroof", true]));
//# sourceMappingURL=app.js.map