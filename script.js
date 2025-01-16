const fullname = document.getElementById('name');
const username = document.getElementById('username');
const email = document.getElementById('email');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');
const submitBtn = document.getElementById('submitBtn');
const ticket = document.getElementById('ticket-container');
const avatar = document.getElementById('avatar-input');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let messages = [];

    if (fullname.value === '') {
        messages.push('Name is required');
    } else if (fullname.value.length <= 6) {
        messages.push('Name must be longer than 6 characters');
    } else if (fullname.value.length >= 20) {
        messages.push('Name must be less than 20 characters');
    }

    if (username.value === '') {
        messages.push('Username is required');
    }

    if (email.value === '') {
        messages.push('Email is required');
    } else if (!validateEmail(email.value)) {
        messages.push('Email is invalid!');
    }

    if (messages.length > 0) {
        errorElement.innerText = messages.join(', ');
    } else {
        form.style.display = "none";
        ticket.style.display = "block";
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

submitBtn.onclick = function() {
    form.style.display = "none";
    ticket.style.display = "block";
};
