function make_sandwich(...items: string[]): void {
    console.log("Sandwich with:", items.join(", "));
}

make_sandwich("Cheese", "Tomato");
make_sandwich("Chicken", "Lettuce", "Mayo");
make_sandwich("Beef", "Onion", "Cheese", "Ketchup");
