document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    
    const validUsername = 'amirul';
    const validPassword = '123';

    if (username === validUsername && password === validPassword) {
        message.textContent = 'Login successful!';
        message.style.color = 'green';
         window.location.href = 'halaman.html';
    } else {
        message.textContent = 'Erorr Anda Kurang Kece!';
        message.style.color = 'red';
    }
});
