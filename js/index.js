let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');
let signUpBtn = document.getElementById('signUp-btn');

console.log(nameInput,emailInput,passwordInput,signUpBtn);



let usersContainer = [];

if(localStorage.getItem('users'))
{
    usersContainer = JSON.parse(localStorage.getItem('users')); 
}


function addUser()
{
    console.log("ooo");
    
    let user =
    {
        name:nameInput.value,
        email:emailInput.value,
        password:passwordInput.value
    }
    usersContainer.push(user);
    localStorage.setItem('users',JSON.stringify(usersContainer))
}
function clearForm()
{
    nameInput.value = '',
    emailInput.value = '',
    passwordInput.value = ''
}
signUpBtn.addEventListener('click',function(e){  
    e.preventDefault();  
    addUser();
    clearForm();
})