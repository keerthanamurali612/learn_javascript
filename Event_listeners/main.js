document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.login-form');

    form.addEventListener('submit', function (event) {
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');

        // Simple validation to check if username and password are not empty
        if (usernameInput.value.trim() === '' || passwordInput.value.trim() === '') {
            alert('Please enter both username and password');
            event.preventDefault(); // Prevent the form from submitting
        }
        
    });
});