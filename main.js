let ruta = 'login'; //registro o home
let urlogin = 'https://login-ten-sigma-39.vercel.app/auth/login';


const renderApp = () => {
    const token = localStorage.getItem('token');
    if (token) {
        return renderHome();
    }
    renderLogin();
}
const renderHome = () => {
    const homeTemplate = document.getElementById('home-template');
    document.getElementById('app').innerHTML = homeTemplate.innerHTML;
}
const renderLogin = () => {
    const loginTemplate = document.getElementById('login-template');
    document.getElementById('app').innerHTML = loginTemplate.innerHTML;

    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();                 // Evita el envío del formulario

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        fetch(urlogin, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password })
        }).then(response => response.json())  //error si no es json cuando usuario o pass incorrecto usar 
            .then(data => {
                localStorage.setItem('token', data.token);
                ruta = 'home';
                renderHome();
            })

    })
}

window.onload = () => {
    renderApp();
    
};