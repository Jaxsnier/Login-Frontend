window.onload = () => {
    let ruta = 'login'; //registro o home
    let urlogin = 'https://login-ten-sigma-39.vercel.app/auth/login';

    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();                 // Evita el envío del formulario

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        try {

            fetch(urlogin, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password })
            }).then(response => response.json())  //error si no es json cuando usuario o pass incorrecto usar 
                .then(data => {
                    console.log('Success:', data);
                    console.log("Datos enviados al servidor");
                })
        } catch (error) {
            console.error('Error:', error);
        }
    })
};