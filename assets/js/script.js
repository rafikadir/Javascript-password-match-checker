const form = document.getElementById('form');
const password = document.getElementById('password');
const password_confirm = document.getElementById('confirm-password');
const success = document.getElementById('success-message');

// Show Error Message
const showError = (input) => {
    const form_group = input.parentElement;
    form_group.className = "form-group error";
    const warning = form_group.querySelector("small");
    warning.innerText = "Password do not match";
    success.style.display = "none";
}

// Show Success Message
const showSuccess = (input) => {
    const form_group = input.parentElement;
    form_group.className = "form-group success";
    success.style.display = "block";
}

// Check Password Match
const checkPassword = (input1, input2) => {
    if(input1.value !== input2.value){
       showError(input2);
    }
    else {
       showSuccess( input2);
    }
}

// Handle Form Validation
form.addEventListener('submit', function (e){
    e.preventDefault();

    checkPassword(password, password_confirm);
});