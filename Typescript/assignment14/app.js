"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guests = ["Ali", "Ayesha", "Ahmed"];
console.log(`${guests[1]} can’t make it.`);
guests[1] = "Sara";
for (let guest of guests) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}
//# sourceMappingURL=app.js.map