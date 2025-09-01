document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = form.querySelector('input[name="username"]').value;
        alert(`Login successful for ${username}!`);
        // Logic for logging in will be added here.
    });
});