const button = document.getElementsByClassName('btn')[0];
const login = document.getElementById('login');
const password = document.getElementById('password');
const error_login = document.getElementsByClassName("login-error");
const error_password = document.getElementsByClassName('pasword-error');
const users = [
    {login: 'admin', password: 'admin'},
    {login: 'user', password: 'user'},
    {login: 'guest', password: 'guest'},
]
function Authkakobezyan(){
    const user = users.find(user => user.login === login.value && user.password === password.value);
    if (user) {
        console.log('Вы успешно авторизовались!');
        alert('Вы успешно авторизовались!');
        window.location.href = '/second';
    }else {
        alert('Неправильный логин или пароль!');
    }
}
button.addEventListener('click', (event) =>{
    event.preventDefault();
    const login = error_login[0].textContent;
    if (login.length === 0) {
        error_login[0].textContent = 'введите логин';
    }else{
        error_login[0].textContent = '';
    }

    const password = error_password[0].textContent;
    if (password.length === 0) {
        error_password[0].textContent = 'введите пароль';
    }else{
        error_password[0].textContent = '';
    }
    Authkakobezyan();
    
});
