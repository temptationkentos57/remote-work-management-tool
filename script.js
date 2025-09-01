document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = form.querySelector('input[name="username"]').value;
        if (username.trim() === '') {
            alert('Username cannot be empty.');
            return;
        }
        if (username.length < 3) {
            alert('Username must be at least 3 characters long.');
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