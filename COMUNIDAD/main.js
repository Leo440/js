

//const $btn = document.getElementById("btn");
const $btn = document.querySelector("#btn")

$btn.addEventListener("click" , saludo);

function saludo() 
{
const conf =  confirm("seguro que quieres salir?")

if (conf){

    window.close()

}

}



const $email = document.getElementById("email")
const $pass = document.getElementById("pass")

let correo
let pass

$email.addEventListener("keypress" , (e) => {

  correo = console.log($email.value);
  console.log(correo);
});

$pass.addEventListener("keypress" , (e) => {

  pass = console.log($pass.value);
  console.log(pass);
});








