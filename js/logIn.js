let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');
let logInBtn = document.getElementById('logIn-btn');

let usersContainer = [];


if (localStorage.getItem('users')) {
    usersContainer = JSON.parse(localStorage.getItem('users'));
}

logInBtn.addEventListener('click', function(e) {
    e.preventDefault();
    let isValidUser = false;

    for (let i = 0; i < usersContainer.length; i++) {
        if (emailInput.value === usersContainer[i].email && passwordInput.value === usersContainer[i].password) {
            isValidUser = true;
            localStorage.setItem('userName',JSON.stringify(usersContainer[i].name))
            window.location.href = "desserts.html";

            break;
        }
    }

    if (!isValidUser) {
        alert('Invalid email or password. Please try again.');
    }
});
