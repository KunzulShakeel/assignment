let current_users: string[] = ["Ali", "Ahmed", "Sara", "Ayesha", "Admin"];
let new_users: string[] = ["ahmed", "John", "Sara", "Fatima", "admin"];

for (let new_user of new_users) {
    if (current_users.some(user => user.toLowerCase() === new_user.toLowerCase())) {
        console.log(`${new_user} is taken, please enter a new username.`);
    } else {
        console.log(`${new_user} is available.`);
    }
}
