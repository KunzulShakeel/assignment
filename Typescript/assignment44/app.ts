function make_car(manufacturer: string, model: string, ...options: [string, any][]) {
    let car: any = { manufacturer, model };
    for (let [key, value] of options) {
        car[key] = value;
    }
    return car;
}

console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Honda", "Civic", ["sunroof", true]));
