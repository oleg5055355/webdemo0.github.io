function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    let message = "";

    // Regular expression for validating email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
        message = "Name is required!";
    } else if (!email) {
        message = "Email is required!";
    } else if (!emailRegex.test(email)) {
        message = "Please enter a valid email address.";
    } else {
        message = "Form is successfully submitted!";
    }

    document.getElementById('message').innerText = message;
}