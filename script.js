
class User{
    static instance = 0;
    #id; #username; #password; #email;
  // Constructor que inicializa un objeto User 
// El ID se asigna automáticamente incrementando la variable estática instance  
    constructor(username,password,email){
        this.#id = User.instance++;
        this.#password = password;
        this.#username = username;
        this.#email = email;
    }
// Getter para obtener el id, username, password y email del usuario
    get id(){
        return this.#id;
    }

    get username(){
        return this.#username;
    }

    get password(){
        return this.#password;
    }

    get email(){
        return this.#email;
    }

 // Setter para cambiar la contraseña del usuario
    set password(newPassword){
        this.#password = newPassword;
    }

 // Método para convertir el objeto a una cadena de texto
    toString(){
        return `
            \"id\" : ${this.#id},
            \"username\" : ${this.#username},
            \"password\" : ${this.#password},
            \"email\" : ${this.#email}
        `
    }
}

// Creación de un arreglo de usuarios
let myUsers = [
    new User("Jessica","311305@jc","jessicone13la@gmail.com"),
    new User("ElEstu","123@sabe","estebansaul@gmail.com")

]; 

// Selección de los elementos del DOM
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const switchToRegister = document.getElementById('switch-to-register');
const switchToLogin = document.getElementById('switch-to-login');
const loginContainer = document.querySelector('.login-container');
const registerContainer = document.querySelector('.register-container');

// Ocultar el formulario de registro por defecto
registerContainer.classList.add('hidden');

// Evento para cambiar a la vista de registro
switchToRegister.addEventListener('click', (e) => {
    e.preventDefault();
    loginContainer.classList.add('fade-out');
    setTimeout(() => {
        loginContainer.classList.add('hidden');
        registerContainer.classList.remove('hidden');
        registerContainer.classList.remove('fade-out');
        registerContainer.classList.add('fade-in');
    }, 500);
});

// Evento para cambiar a la vista de login
switchToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    registerContainer.classList.add('fade-out');
    setTimeout(() => {
        registerContainer.classList.add('hidden');
        loginContainer.classList.remove('hidden');
        loginContainer.classList.remove('fade-out');
        loginContainer.classList.add('fade-in');
    }, 500);
});

// Manejo de envío del formulario de login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const found = myUsers.find((user)=>user.username == document.getElementById('login-username').value)
    if(found && found.password === document.getElementById('login-password').value){
        alert("Iniciaste sesión correctamente")
        console.log('Datos de Login:', found);
        alert('Datos de Login:\n' + found.toString());
    }
    else{
        alert("Usuario o contraseña invalida")
    }

    // Limpiar campos del formulario de login
    document.getElementById('login-username').value = '';
    document.getElementById('login-password').value = '';
});

// Manejo de envío del formulario de registro
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newUser = new User(document.getElementById('register-username').value,document.getElementById('register-password').value,document.getElementById('register-email').value);
    myUsers.push(newUser);
    console.log('Datos de Registro:', newUser);
    console.log(myUsers);
    alert('Datos de Registro:\n' + newUser.toString());

    // Limpiar campos del formulario de registro
    document.getElementById('register-username').value = '';
    document.getElementById('register-email').value = '';
    document.getElementById('register-password').value = '';

    // Volver al formulario de login
    registerContainer.classList.add('fade-out');
    setTimeout(() => {
        registerContainer.classList.add('hidden');
        loginContainer.classList.remove('hidden');
        loginContainer.classList.remove('fade-out');
        loginContainer.classList.add('fade-in');
    }, 500);
});
