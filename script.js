document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const signupMessage = document.getElementById('signupMessage');

    // Store user credentials in local storage
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    signupMessage.style.color = 'green';
    signupMessage.textContent = 'Signup successful! Redirecting to login...';

    // Redirect to login form after 2 seconds
    setTimeout(() => {
        document.getElementById('signupFormContainer').style.display = 'none';
        document.getElementById('loginFormContainer').style.display = 'block';
    }, 2000);
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const loginMessage = document.getElementById('loginMessage');

    // Retrieve stored credentials from local storage
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    if (email === storedEmail && password === storedPassword) {
        loginMessage.style.color = 'green';
        loginMessage.textContent = 'Login successful!';
    } else {
        loginMessage.style.color = 'red';
        loginMessage.textContent = 'Invalid email or password';
    }
});