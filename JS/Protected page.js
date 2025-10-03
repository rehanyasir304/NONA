function checkLogin(event) {
    event.preventDefault();
    const id = document.getElementById("devId").value;
    const password = document.getElementById("devPassword").value;

    if (id === "rehanyasir304" && password === "12345xyz") {
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid ID or Password");
    }
    return false;
}

function submitRestartRequest(event) {
    event.preventDefault();
    const reason = document.getElementById("reason").value;
    if (reason.trim() !== "") {
        document.getElementById("restartMessage").textContent = "Request submitted successfully!";
        document.getElementById("reason").value = "";
    }
    return false;
}

function submitBugReport(event) {
    event.preventDefault();
    const details = document.getElementById("details").value;
    if (details.trim() !== "") {
        document.getElementById("bugMessage").textContent = "Report submitted successfully!";
        document.getElementById("details").value = "";
    }
    return false;
}
