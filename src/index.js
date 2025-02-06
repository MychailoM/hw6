export{btn}
    const btn = document.querySelector(".button");

import { User } from "./module";

const users = [];

btn.addEventListener("click", () => {
    const userName = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (userName && email && message) {
    const u = new User(userName, email, message);
    users.push(u);
        console.log(users);
        alert(userName)
    } else {
    alert("Будь ласка, заповніть всі поля!");
    }
});
