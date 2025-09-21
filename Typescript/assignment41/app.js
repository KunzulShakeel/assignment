"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = ["David", "Harry", "Chris"];
function make_great(names) {
    for (let i in names) {
        names[i] = "The Great " + names[i];
    }
}
function show_magicians(names) {
    for (let name of names) {
        console.log(name);
    }
}
make_great(magicians);
show_magicians(magicians);
//# sourceMappingURL=app.js.map