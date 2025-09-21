let magicians: string[] = ["David", "Harry", "Chris"];

function make_great(names: string[]): void {
    for (let i in names) {
        names[i] = "The Great " + names[i];
    }
}

function show_magicians(names: string[]): void {
    for (let name of names) {
        console.log(name);
    }
}

make_great(magicians);
show_magicians(magicians);
