let IdCounter = 0;
const input = document.querySelector('input[type="text"]');

userInput.addEventListener('submit', (event)=>{
   event.preventDefault();
    //console.log('capturando evento');
    addTask();
});

let addTask = ()=>{
    IdCounter++;

    let newValue = input.value;

    //console.log('Evento desde la funcion flecha');
    list.innerHTML += `
    <div class="task-container" id="${IdCounter}">
    <label>
        <input type="checkbox">
        ${newValue}
    </label>
    <img src="./imagenes/soldier.png" class="closeBtn">
    </div>`;

    input.value = '';
    updateStats();
};

list.addEventListener('click', (event)=>{
  // console.log('click desde tareas'); 
  //console.log(event.srcElement.nodeName);
  if (event.srcElement.nodeName == 'INPUT') {
      updateStats();
  } else if(event.srcElement.nodeName == 'IMG'){
    //console.log('borrar elemento')
    //console.log(event.srcElement.parentNode.id);
    deleteTask(event.srcElement.parentNode.id);
  }
});

let updateStats = ()=>{
    let element = list.querySelectorAll('div');
    let checkbox = list.querySelectorAll('input[type="checkbox"]:checked');
    stats.innerHTML = `<p>Tarea pendiente:${element.length}  Tarea Completada:${checkbox.length}</p>`
};

let deleteTask = (id)=>{
    let taskToDelete = document.getElementById(id);
    list.removeChild(taskToDelete);
    updateStats();
};
  