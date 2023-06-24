document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTaskForm = document.querySelector('form')

  newTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const newToDo = e.target.newtaskdescription.value
    buildToDo(newToDo);

    newTaskForm.reset()
  })
});

function buildToDo(newToDo){

  let taskLi = document.creaateElement('Li');
  let deleteButton =  document.createElement('button')

  deleteButton.textContent = `${newToDo}`

  taskLi.appendChild(deleteButton);

  document.querySelector('#tasks').appendChild(taskLi);

  deleteButton.addEventListener('click', handleDelete)
}

function handleDelete(e){

  e.target.parentNode.remove();
  
}
