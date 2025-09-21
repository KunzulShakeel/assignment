"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let current_users = ["Ali", "Ahmed", "Sara", "Ayesha", "Admin"];
let new_users = ["ahmed", "John", "Sara", "Fatima", "admin"];
for (let new_user of new_users) {
    if (current_users.some(user => user.toLowerCase() === new_user.toLowerCase())) {
        console.log(`${new_user} is taken, please enter a new username.`);
    }
    else {
        console.log(`${new_user} is available.`);
    }
}
//# sourceMappingURL=app.js.map