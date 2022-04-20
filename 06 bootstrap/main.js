const validCredentials = {
  name: "vet@vet.com",
  password: "4321",
};

const $name = document.getElementById("name");
const password = document.getElementById("password");
const submit = document.getElementById("btn");
const $privado = document.getElementById("privado");
console.log($privado)

const myCredentials = {
  name: null,
  password: null,
};

const handleName = (event) => {
  console.log(event.target.value)
  myCredentials.name = event.target.value;
};

const handlePassword = (event) => {
  console.log(event.target.value)
  myCredentials.password = event.target.value;
};

const handleSubmit = (event) => {
  event.preventDefault();
  const name = myCredentials.name === validCredentials.name;
  const password = myCredentials.password === validCredentials.password;

  if (name && password) {
   console.log("Bienvenido");
  /*  console.log($privado)
  $privado.classList.remove("disabled");*/
  window.open("nosotros.html");
   
   
  } else {
    console.log("denegado");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  $name.addEventListener("input", handleName);
  password.addEventListener("input", handlePassword);
  submit.addEventListener("click", handleSubmit);
});
