function make_shirt(size: string = "L", message: string = "I love TypeScript"): void {
    console.log(`Shirt size: ${size}, Message: "${message}"`);
}

make_shirt();
make_shirt("M");
make_shirt("S", "Hello World");
