           
           const validCredentials = {
            name: 'vet@vet.com',
            password: '4321',
           };
           
           const name = document.getElementById('name');
           const password = document.getElementById('password');
           const submit = document.getElementById('btn');
           
           
           const myCredentials = {
            name: null,
            password: null,
           };
           
           const handleName = (event) => {
           myCredentials.name = event.target.value; 
           };
           
           const handlePassword = (event) => {
           myCredentials.password = event.target.value;  
           };
           
           const handleSubmit = () => {
           const name = myCredentials.name === validCredentials.name;
           const password = myCredentials.password === validCredentials.password;
             
             if  (name && password){
                console.log(Bienvenido);
             }  
             else {
               console.log(denegado);        
             }
           
           
          document.addEventListener('DOMContentLoaded', () => {
            name.addEventListener('input', handleName);
            password.addEventListener('input', handlePassword);
           submit.addEventListener('click', handleSubmit);
          });