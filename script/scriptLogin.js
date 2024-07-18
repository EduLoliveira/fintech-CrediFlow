let users = [{ email: "sophie@exemple.com", password: "0000" }];

const form = document.querySelector('.containerForm');
form.addEventListener('submit', addUser);

function addUser(event) {
    event.preventDefault();
    
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Função de validação
    function validation(email, password) {
        if (email === '') {
            alert("O email não pode ser nulo ou vazio.");
            return false;
        } else if(!/^(?=.*\d{4})/.test(password)) {
            alert("A senha deve conter apenas dígitos numéricos e ter no mínimo 4 caracteres.");
            return false;
        }
        return true;
    }

    // Verifica se o usuário já está registrado
    function userRegistered(email, password) {
        return users.some(user => user.email === email && user.password === password);
    }

    // Executa a validação passando email e password
    if (!validation(email, password)) {
        return;
    }

    // Verifica se o usuário já está registrado com o mesmo email e senha
    if (userRegistered(email, password)) {
        alert('Usuário já registrado! Redirecionando para Home page...');
        window.location.href = 'home.html'; // Redireciona para página de login
    } else {
        const newUser = {
            email: email,
            password: password
        };
        
        users.push(newUser);
        console.log(users);

        alert('Usuário registrado com sucesso!');
        window.location.href = 'LoginSucessed.html'; // Redireciona para página de sucesso de registro

        // Limpa os campos do formulário
        emailInput.value = '';
        passwordInput.value = '';
    }
}