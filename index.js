
let users = [];

const signupForm = document.getElementById('signupForm');
const loginForm = document.getElementById('loginForm');
const toggleForm = document.getElementById('toggleForm');


signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    if (users.find(user => user.username === username)) {
        alert('Username already exists. Please login.');
        toggleToLogin(); // Switch to login form
        return;
    }

    
    users.push({ username, password });
    alert(`Signup successful! Welcome, ${username}!`);
});


loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

 
    const user = users.find(user => user.username === loginUsername && user.password === loginPassword);
    if (user) {
  
        window.location.href = 'expensetracker.html'; 
        alert('Invalid username or password. Please try again.');
    }
});

toggleForm.addEventListener('click', toggleForms);

function toggleForms() {
    signupForm.style.display = signupForm.style.display === 'none' ? 'block' : 'none';
    loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
    toggleForm.innerText = toggleForm.innerText.includes('Login') ? 
        'Don’t have an account? Sign up here' : 
        'Already have an account? Login here';
}


function toggleToLogin() {
    signupForm.style.display = 'none';
    loginForm.style.display = 'block';
    toggleForm.innerText = 'Don’t have an account? Sign up here';
}
