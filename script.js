const addTask = document.querySelector('#addTask');
let addValue = document.querySelector('#taskValue');
const taskBody = document.querySelector('.task__body');

let isToggled = true;

function createTask() {

  //main-task input's value
  let task = addValue.value;
  task = 'hi';  //need for removing alert if you want to skip task filling for testing.
 
  if (!task) {
  alert('please fill the form');
  return; 

  } else {
    console.log('success');
  }


  //body for newcreaated tasks
  const taskWrapper = document.createElement('div');
  taskWrapper.classList.add('task__header');
  taskBody.append(taskWrapper);

  //main input where you are creating tasks.
  const taskInput = document.createElement('div');
  taskInput.classList.add('task__header-input');
  taskWrapper.append(taskInput);

  // just created task value
  const newInput = document.createElement('input');
  newInput.setAttribute('readonly', 'readonly');
  taskInput.append(newInput);

  
  //body for buttons
  const taskBtnBody = document.createElement('div');
  taskBtnBody.classList.add('task__header-add');
  taskWrapper.append(taskBtnBody);


  newInput.value = task;
  addValue.value = '';
  

  //delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('btn');
  deleteBtn.setAttribute('id', 'delete');
  deleteBtn.textContent = 'DELETE';
  taskBtnBody.appendChild(deleteBtn);

  //edit button
  const editBtn = document.createElement('button');
  editBtn.classList.add('btn');
  editBtn.setAttribute('id', 'edit');
  editBtn.textContent = 'EDIT';
  taskBtnBody.appendChild(editBtn);

  //selecting all delete buttons by id
  const deleteBtns = document.querySelectorAll('#delete');
  // const editBtns = document.querySelectorAll('#edit');

  

  //DELETE BUTTONS By click FROM HERE.  
  deleteBtns.forEach(btn => {
    btn.addEventListener('click', (e)=> {
      taskWrapper.remove(taskWrapper);
    });
  });
}



  