let _lister = [
  { name: "Watch youtube", dueDate: "2023-11-29" },
  { name: "Play video games", dueDate: "2023-11-29" },
];

renderTodoList();

document.querySelector(".js-add-button").addEventListener("click", () => {
  addTodo();
});

function addTodo() {
  let inputNameElem = document.querySelector(".js-todo-name-input");
  let inputDateElem = document.querySelector(".js-todo-date-input");

  const name = inputNameElem.value;
  const dueDate = inputDateElem.value;

  _lister.push({ name, dueDate });

  inputNameElem.value = "";
  inputDateElem.value = "";

  renderTodoList();
}

function renderTodoList() {
  let todoListHTML = "";
  for (let i = 0; i < _lister.length; i++) {
    let { name, dueDate } = _lister[i];

    let htmlData = `
    <div class="todo-name">${name}</div>
    <div class="todo-due-date">${dueDate}</div>
    <button class="delete-button js-delete-button">
    Delete
    </button>
    `;

    todoListHTML += htmlData;
  }

  document.querySelector(".js-todo-grid").innerHTML = todoListHTML;

  document.querySelectorAll(".js-delete-button").forEach((dButton, index) => {
    dButton.addEventListener("click", () => {
      _lister.splice(index, 1);
      renderTodoList();
    });
  });
}
