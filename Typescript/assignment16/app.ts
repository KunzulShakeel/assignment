let guests: string[] = ["Bilal", "Ali", "Fatima", "Sara", "Ahmed", "Hamza"];
console.log("Sorry, I can only invite two people for dinner.");

while (guests.length > 2) {
    let removed = guests.pop();
    console.log(`Sorry ${removed}, I can’t invite you.`);
}

for (let guest of guests) {
    console.log(`Dear ${guest}, you are still invited.`);
}

guests.pop();
guests.pop();
console.log(guests);
