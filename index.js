// Variables to store user data (for demo purposes)
let users = [];

// Get elements from the DOM
const signupForm = document.getElementById('signupForm');
const loginForm = document.getElementById('loginForm');
const toggleForm = document.getElementById('toggleForm');

// Handle signup form submission
signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if user already exists
    if (users.find(user => user.username === username)) {
        alert('Username already exists. Please login.');
        toggleToLogin(); // Switch to login form
        return;
    }

    // Save user data (for demo purposes)
    users.push({ username, password });
    alert(`Signup successful! Welcome, ${username}!`);
});

// Handle login form submission
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Verify user data
    const user = users.find(user => user.username === loginUsername && user.password === loginPassword);
    if (user) {
        // Redirect to expense tracker page
        window.location.href = 'expensetracker.html'; // Change to the name of your expense tracker file
    } else {
        alert('Invalid username or password. Please try again.');
    }
});

// Toggle between signup and login forms
toggleForm.addEventListener('click', toggleForms);

function toggleForms() {
    signupForm.style.display = signupForm.style.display === 'none' ? 'block' : 'none';
    loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
    toggleForm.innerText = toggleForm.innerText.includes('Login') ? 
        'Don’t have an account? Sign up here' : 
        'Already have an account? Login here';
}

// Switch to login form
function toggleToLogin() {
    signupForm.style.display = 'none';
    loginForm.style.display = 'block';
    toggleForm.innerText = 'Don’t have an account? Sign up here';
}
