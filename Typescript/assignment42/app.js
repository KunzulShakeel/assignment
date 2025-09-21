"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = ["David", "Harry", "Chris"];
function make_great(names) {
    return names.map(name => "The Great " + name);
}
function show_magicians(names) {
    for (let name of names) {
        console.log(name);
    }
}
let greatMagicians = make_great([...magicians]);
show_magicians(magicians);
show_magicians(greatMagicians);
//# sourceMappingURL=app.js.map