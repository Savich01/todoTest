"Use strict";

const $taskInput = document.querySelector('.personal-input');
const $taskButton = document.querySelector('.personal-btn');
const $taskList = document.querySelector('.main-list');
const $ContainerTask = document.querySelector('.container');
const $taskBtn1 = document.querySelector('.main-btn1');

const taskArray = [];


// При НАЖАТИИ НА КНОПКУ получаем значение из Input
const addTask = (event) => {
  event.preventDefault();
  if ($taskInput.value == '') return;
  
  const newTask = {
    id: Date.now(),
    elem: $taskInput.value,
    checked: false
  };

  taskArray.push(newTask);
  addRender();
}

//================================================

//ДОБОВЛЯЕМ ЭЛЕМЕНТ НА СТРАНИЦУ
function addRender(){
  let li = '';
  taskArray.forEach(function(task){
    li += `<li id='${task.id}'class="main-list--link">
            <div class="main-link">
                <input id='${task.id}' class="main-input" type="checkbox"}>
                <span class="main-text">${task.elem}</span>
            </div>
            <button id='${task.id}' class="btn">X</button>
          </li>`;

        $taskList.innerHTML = li;
  });
  $taskInput.value = '';
  $taskInput.focus();
  

  //ДОБАВЛЯЕМ АКТИВНЫЕ ЧЕКБОКСЫ НА СТРАНИЦУ(ALL)
   taskArray.forEach((task) => {
    const taskReturn = document.getElementById(`${task.id}`);
    taskReturn.checked = task.checked;
  });
};



//===============================================

// МЕНЯEМ КЛАСС У ЧЕКБОКСОВ
const addChecked = (event) =>{
  const changeElem = event.target;
  taskArray.forEach((task) => {
    if(task.id == changeElem.id){
      task.checked = changeElem.checked;
    };
  });
};

//===============================================

//УДАЛЯЕМ ЭЛЕМЕНТЫ НА СТРАНИЦЕ
const deleteTask = (event) => {
  const removeBtn = event.target.closest('.btn')
  console.log(removeBtn);
  taskArray.forEach((task, index) => {
    if(task.id == removeBtn.id){
      taskArray.splice(index, 1);
    }
  });
  removeBtn.remove();
  addRender(event);
};



//===========================СОБЫТИЯ==============================================================
// При НАЖАТИИ НА КНОПКУ получаем значение из Input
$taskButton.addEventListener('click', (event) =>{
  addTask(event);
});
// ПРИ НАЖАТИИ НА КНОПКУ МЕНЯEМ КЛАСС У ЧЕКБОКСОВ
$ContainerTask.addEventListener('click', (event) =>{
  addChecked(event);
  deleteTask(event)
});
$taskBtn1.addEventListener('click', addRender);



