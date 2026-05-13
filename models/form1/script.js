
const container = document.getElementById('container');
const signInButton = document.getElementById('sign-in');
const signUpButton = document.getElementById('sign-up');
const signInForm = document.querySelector('.sign-in');
const signUpForm = document.querySelector('.sign-up');
const signupFormElement = document.getElementById('signupForm');
const signinFormElement = document.getElementById('signinForm');

// Toggle functionality
signUpButton.addEventListener('click', () => {
    container.classList.add('active');
    signInForm.setAttribute('aria-hidden', 'true');
    signUpForm.setAttribute('aria-hidden', 'false');
    resetErrors(); // Reset errors on toggle
});

signInButton.addEventListener('click', () => {
    container.classList.remove('active');
    signInForm.setAttribute('aria-hidden', 'false');
    signUpForm.setAttribute('aria-hidden', 'true');
    resetErrors(); // Reset errors on toggle
});

// Reset error displays
function resetErrors() {
    document.querySelectorAll('.error').forEach(el => el.style.display = 'none');
}

// Validation for signup form
signupFormElement.addEventListener('submit', (event) => {
    resetErrors();
    let isValid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (document.getElementById('name').value.trim() === '') {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }
    if (!emailRegex.test(document.getElementById('signup-email').value.trim())) {
        document.getElementById('signupEmailError').style.display = 'block';
        isValid = false;
    }
    if (document.getElementById('signup-password').value.trim() === '') {
        document.getElementById('signupPasswordError').style.display = 'block';
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    } else {
        event.preventDefault();
        alert('Sign Up Successful!');
        signupFormElement.reset();
    }
});

signinFormElement.addEventListener('submit', (event) => {
    resetErrors();
    let isValid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(document.getElementById('signin-email').value.trim())) {
        document.getElementById('signinEmailError').style.display = 'block';
        isValid = false;
    }
    if (document.getElementById('signin-password').value.trim() === '') {
        document.getElementById('signinPasswordError').style.display = 'block';
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    } else {
        event.preventDefault();
        alert('Sign In Successful!');
        signinFormElement.reset();
    }
});