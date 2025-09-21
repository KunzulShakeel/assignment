let magicians: string[] = ["David", "Harry", "Chris"];

function make_great(names: string[]): string[] {
    return names.map(name => "The Great " + name);
}

function show_magicians(names: string[]): void {
    for (let name of names) {
        console.log(name);
    }
}

let greatMagicians = make_great([...magicians]);

show_magicians(magicians);
show_magicians(greatMagicians);
