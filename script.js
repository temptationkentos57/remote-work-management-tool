document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Login successful!');
        // Logic for logging in will be added here.
    });
});