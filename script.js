const addTask = document.querySelector('#addTask');
const addValue = document.querySelector('#taskValue');
const taskBody = document.querySelector('.task__body');

let isToggled = true;

function createTask() {


  let task = addValue.value;
   task = 'hi';

  if (!task) {
  alert('please fill the form');
  return; 

  } else {
    console.log('success');
  }

  const taskWrapper = document.createElement('div');
  taskWrapper.classList.add('task__header');
  taskBody.append(taskWrapper);

  const taskInput = document.createElement('div');
  taskInput.classList.add('task__header-input');
  taskWrapper.append(taskInput);

  const newInput = document.createElement('input');
  newInput.setAttribute('readonly', 'readonly');
  taskInput.append(newInput);

  const taskBtnBody = document.createElement('div');
  taskBtnBody.classList.add('task__header-add');
  taskWrapper.append(taskBtnBody);

  newInput.value = task;
  task = '';


  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('btn');
  deleteBtn.setAttribute('id', 'delete');
  deleteBtn.textContent = 'DELETE';
  taskBtnBody.appendChild(deleteBtn);

  const editBtn = document.createElement('button');
  editBtn.classList.add('btn');
  editBtn.setAttribute('id', 'edit');
  editBtn.textContent = 'EDIT';
  taskBtnBody.appendChild(editBtn);

  const deleteBtns = document.querySelectorAll('#delete');

  // const editedBtn = document.querySelectorAll('#edit');

  
  deleteBtns.forEach(btn => {
    btn.addEventListener('click', (e)=> {
      taskWrapper.remove(taskWrapper);
    });
  });

}









  // editBtn.addEventListener('click', (e) => {
  //   if (!isToggled) {
  //     e.target.style.background = 'indigo';
  //     e.target.textContent = 'EDIT';


  //   } else {
  //     e.target.style.background = 'red';
  //     e.target.textContent = 'SAVE';
  //   }
    
  //   isToggled = !isToggled;
  // });