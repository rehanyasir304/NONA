window.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    const idInput = document.getElementById('devId');
    const pwInput = document.getElementById('devPassword');
    const msg = document.getElementById('loginMessage');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const id = idInput.value.trim();        // remove leading/trailing spaces
        const password = pwInput.value.trim();

        console.log('ID entered:', id);         // debug
        console.log('Password entered:', password);

        // Check credentials exactly
        if (id === "rehanyasir304" && password === "12345xyz") {
            window.location.href = "Protected page.html"; // dashboard file
        } else {
            msg.textContent = "Invalid ID or Password";
        }
    });
});
