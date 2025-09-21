let guests: string[] = ["Ali", "Sara", "Ahmed"];
console.log("Good news! We found a bigger dinner table.");

guests.unshift("Bilal");
guests.splice(2, 0, "Fatima");
guests.push("Hamza");

for (let guest of guests) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}
