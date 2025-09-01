document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Đăng nhập thành công!');
        // Logic đăng nhập sẽ được thêm vào đây.
    });
});