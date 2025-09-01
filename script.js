document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = form.querySelector('input[name="username"]').value;
        if (username.trim() === '') {
            alert('Please enter a username.');
            return;
        }
        if (username.length < 3) {
            alert('Your username must be at least 3 characters.');
            return;
        }
        showAlert(username);
        // Logic for logging in will be added here.
        form.reset(); // Reset the form after submission
    });
});

function showAlert(username) {
    alert(`Welcome back, ${username}!`);
}