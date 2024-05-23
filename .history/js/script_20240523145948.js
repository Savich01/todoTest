"Use strict";

const $taskInput = document.querySelector('.personal-input');
const $taskButton = document.querySelector('.personal-btn');
const $taskList = document.querySelector('.main-list');
const $checkedAll = document.querySelector('.checkbox-active');
const $taskBtn1 = document.querySelector('.main-btn1');
const $taskBtn2 = document.querySelector('.main-btn2');
const $taskBtn3 = document.querySelector('.main-btn3');



let taskArray = [];


// При НАЖАТИИ НА КНОПКУ получаем значение из Input
const addTask = (event) => {
  event.preventDefault();
  if ($taskInput.value == '') return;
  
  const newTask = {
    id: Date.now(),
    elem: $taskInput.value,
    checked: $checkedAll.checked
  };

  taskArray.push(newTask);
  addRender(taskArray);
};

//=========ДОБОВЛЯЕМ ЭЛЕМЕНТ НА СТРАНИЦУ=======================================

const addRender = (array) =>{
  let li = '';
  array.forEach(function(task){
    li += `<li data-task-id='${task.id}' class="main-list--link">
            <div class="main-link">
                <input id='${task.id}' class="main-input" type="checkbox"}>
                <span id='${task.id}' class="main-text">${task.elem}</span>
            </div>
            <button id='${task.id}' class="btn" data-action='delete'>X</button>
          </li>`;

        $taskList.innerHTML = li;
  });
  
  //отчищаем поле ввода и добавляем фокус
  $taskInput.value = '';
  $taskInput.focus();
  
  //ДОБАВЛЯЕМ АКТИВНЫЕ ЧЕКБОКСЫ НА СТРАНИЦУ(ALL)
   taskArray.forEach((task) => {
    const taskReturn = document.getElementById(`${task.id}`);
    taskReturn.checked = task.checked;
  });
};

//=========МЕНЯEМ КЛАСС У ЧЕКБОКСОВ======================================

const addChecked = (event) =>{
  const changeElem = event.target;
  taskArray.forEach((task) => {
    if(task.id == changeElem.id){
      task.checked = changeElem.checked;
    }
    console.log(taskArray);
  });
};

//==========Делаем все чекбоксы активными=====================================

const activeChecked = (event) => {
  const chekAll = event.target;
  console.log(chekAll);
  taskArray.forEach((task) => {
    task.checked = chekAll.checked;
  });
  addRender();
  console.log(taskArray);
};

//==========УДАЛЯЕМ ЭЛЕМЕНТЫ НА СТРАНИЦЕ=====================================

const deleteTask = (event) => {
  //проверяем что кик был по кнопке
  if(event.target.dataset.action === 'delete'){
    const listItem = event.target.closest('.main-list--link');
    const taskId = listItem.dataset.taskId;
    taskArray = taskArray.filter((task) => {
      return task.id != taskId;
    });
    //Удаляем задачу из разметки
    listItem.remove();
    addRender();
  };
};

//=========ЭЛЕМЕНТ ПОПАДАЕТ ALL==========================================
const taskAll = () => {
  addRender(taskArray);
  console.log(taskArray);
};

//=========ЭЛЕМЕНТ ПОПАДАЕТ В АКТИВНЫЕ-ЗАДАЧИ============================
const arrActive = () => {
  let taskArr = [];

  taskArray.forEach((task) => {
    if (task.checked == false) {
      taskArr.push(task);
    }
  });
  addRender(taskArr);
  console.log(taskArr);
};

//==========ЭЛЕМЕНТ ПОПАДАЕТ В ЗАВЕРШЕННЫЕ ЗАДАЧИ=========================
const arrCompleted = () => {
  let arrTask = [];
  
  taskArray.forEach((task) => {
    if(task.checked == true){
      arrTask.push(task);
    }
  });
  addRender(arrTask);
  console.log(arrTask);
};

//===========================СОБЫТИЯ===================================================
// При НАЖАТИИ НА КНОПКУ получаем значение из Input
$taskButton.addEventListener('click', addTask);

// УДАЛЯЕМ ЗАДАЧИ
$taskList.addEventListener('click', deleteTask);


// ПРИ НАЖАТИИ НА КНОПКУ МЕНЯEМ КЛАСС У ЧЕКБОКСОВ
$taskList.addEventListener('change', addChecked);

// ПРИ НАЖАТИИ НА КНОПКУ ВСЕ ЧЕКБОКСЫ СТАНОВЯТЬСЯ АКТИВНЫМИ
$checkedAll.addEventListener('change', activeChecked);

// РАСПРЕДЕЛЕНИЕ ЗАДАЧ ПО КЛАССАМ
$taskBtn1.addEventListener('click', taskAll);
$taskBtn2.addEventListener('click', arrActive);
$taskBtn3.addEventListener('click', arrCompleted);



