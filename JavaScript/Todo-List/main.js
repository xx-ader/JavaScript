let writeTextEl = document.querySelector(".writeText");
let addBtnEl = document.querySelector(".addBtn");
let clearBtnEl = document.querySelector(".clearBtn");
let ulListEl = document.querySelector(".ulList");

let todoTable = JSON.parse(localStorage.getItem("listStock")) || [];

showTodo();
addBtnEl.addEventListener("click", function () {
  let objectTodo = {
    id: new Date().getTime(),
    text: writeTextEl.value,
    done: false,
  };

  todoTable.push(objectTodo);

  localStorage.setItem("listStock", JSON.stringify(todoTable));

  showTodo();
  writeTextEl.value = "";
});

function showTodo() {
  ulListEl.innerHTML = "";
  todoTable.forEach((todo, idx) => {
    ulListEl.innerHTML += `<li>${todo.text}<span id=${idx} class="delete"><i class="fas fa-trash-alt"></i></span></li>`;
  });
  let deleteBtn = document.querySelectorAll(".delete");
  deleteBtn.forEach(function (btn, idx) {
    btn.addEventListener("click", function (e) {
      todoTable.splice(btn.id, 1);
      localStorage.setItem("listStock", JSON.stringify(todoTable));
      showTodo();
    });
  });
}

// clearing button
clearBtnEl.addEventListener("click", function () {
  ulListEl.innerHTML = "";
  localStorage.clear("listStock");
  todoTable = [];
});

// let toDoLiEl = JSON.parse(localStorage.getItem('data')) || []
// let tablSetStor =[]

// addBtnEl.addEventListener("click",function(){
//     let objectEl = {
//     id : new Date().getTime() ,
//     text : writeTextEl.value,
//     completed : false
// }

//      toDoLiEl.push(objectEl)

//     let objectConverted = JSON.stringify(toDoLiEl, undefined)
//      let localStore = localStorage.setItem("data",objectConverted)

//      console.log("x")
//          ulListEl.innerHTML = ``
//          writeTextEl.value =""

//      toDoLiEl.forEach(todo => {
//          ulListEl.innerHTML += `<li>${todo.text}<span><i class="fas fa-trash-alt"></i></span></li>`
//      });
//      retirer ()
// })
// toDoLiEl.forEach(todo => {

//          ulListEl.innerHTML += `<li>${todo.text}<span><i class="fas fa-trash-alt"></i></span></li>`

//      });

//      function retirer (){
// let deleteBtn = document.querySelectorAll(".ulList li span")

//     deleteBtn.forEach((btn,idx) =>{
//         btn.addEventListener("click",function(){
// console.log(idx)
//         })

//        })
// }
// clearBtnEl.addEventListener('click',function(){

//     localStorage.clear('data')

// ulListEl.innerHTML = ``

// })

/** theme confiig */
let containerEl = document.querySelector(".container");
let tableClassBtn = ["bandw", "gandr", "bandp"];
let btns = document.querySelectorAll(".themes button");
let bodyEl = document.querySelector("body");
//     tableClassBtn.forEach((btn, idx) => function () {
//         btn.innerHTML += `<button>${btn}</button>

//    `
//         console.log(idx)
//     })
let x = 0;
btns.forEach((btn, idx) => {
  btn.addEventListener("click", function () {
    bodyEl.classList.add(`${tableClassBtn[idx]}`);
    bodyEl.classList.remove(`${tableClassBtn[idx - 1]}`);
    bodyEl.classList.remove(`${tableClassBtn[idx + 1]}`);
    bodyEl.classList.remove(`${tableClassBtn[idx + 2]}`);
    localStorage.setItem("theme", tableClassBtn[idx]);
  });
  x = 0;
});

bodyEl.classList.add(`${localStorage.getItem("theme")}`);
