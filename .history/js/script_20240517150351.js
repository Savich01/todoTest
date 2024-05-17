"Use strict";

const $taskInput = document.querySelector('.personal-input');
const $taskButton = document.querySelector('.personal-btn');
const $taskList = document.querySelector('.main-list');
const $ContainerTask = document.querySelector('.container');
const $taskAll = document.querySelector('.main-btn1');

const taskArray = [];


// При НАЖАТИИ НА КНОПКУ получаем значение из Input
const addTask = (event) => {
  event.preventDefault();
  
  const newTask = {
    id: Date.now(),
    elem: $taskInput.value,
    checked: false
  };

  taskArray.push(newTask);

  // if ($taskInput.value == '') return;
  addRender();
}

//================================================

//ДОБОВЛЯЕМ ЭЛЕМЕНТ НА СТРАНИЦУ
function addRender(){
  let li = '';
  taskArray.forEach(function(task){
    li += `<li class="main-list--link">
            <div class="main-link">
                <input id='${task.id}' class="main-input" type="checkbox"}>
                <span class="main-text">${task.elem}</span>
            </div>
            <button id='${task.id}' class="btn">X</button>
          </li>`;

        $taskList.innerHTML = li;
  });
  
  const a = document.getElementById(`${task.id}`);
  a.checked = task.checked;
  
}

//===============================================

// МЕНЯEМ КЛАСС У ЧЕКБОКСОВ
const addChecked = (event) =>{
  const changeElem = event.target;
  console.log(changeElem);
  taskArray.forEach((task) => {
    if(task.id == changeElem.id){
      task.checked = changeElem.checked;
    };
    console.log(taskArray)
  });
};


//===========================СОБЫТИЯ==============================================================
// При НАЖАТИИ НА КНОПКУ получаем значение из Input
$taskButton.addEventListener('click', (event) =>{
  addTask(event);
});
// ПРИ НАЖАТИИ НА КНОПКУ МЕНЯEМ КЛАСС У ЧЕКБОКСОВ
$ContainerTask.addEventListener('click', (event) =>{
  addChecked(event);
});
$taskAll.addEventListener('click', addRender)






















































// const form = document.querySelector('.personal');
// const input = document.querySelector('.personal-input');
// const block = document.querySelector('.main-container');
// const addList = document.querySelector('.main-container--list')
// const mainBlock = document.querySelector('.main-block');

// function addTask(){
//     // Отменяем отправку формы
//     event.preventDefault();

//     // Достаем текст задачи из поля ввода
    
//     const taskText = input.value;


//     //Формируем разметку для новой задачи

//     const taskHTML = `<ul class="main-container--list">
//                     <li class="main-container--list-link">
//                         <input class="main-checked" type="checkbox" data-action = "done">
//                         <span class="main-text">${taskText}</span>
//                     </li>
//                     <button class="main--list-btn" data-action = "delete">
//                         х
//                     </button>
//                </ul> 
//                     `
                       

//     // Добавляем задачу на страницу

//     block.insertAdjacentHTML('beforeend', taskHTML)

//     // Отчищаем поле ввода

//     input.value = '';
//     input.focus();
 
// }



// // Добавление задачи 
// form.addEventListener('submit', addTask);

// // // Удаление задачи
// block.addEventListener('click', deleteTask);

// function deleteTask(event){


//     if(event.target.dataset.action === 'delete'){
    
//         const perentNode = event.target.closest('.main-container--list');
//         perentNode.remove();
//     };
// };

// // Отмечаем задачу завершенной

// block.addEventListener('click', doneTask)

// function doneTask(event) {
//     if(event.target.dataset.action === 'done'){
//         const perentNode = event.target.closest('.main-container--list');
//         const taskTitle = perentNode.querySelector('.main-text');
//         taskTitle.classList.toggle('main-text--done');
//     }
// }
