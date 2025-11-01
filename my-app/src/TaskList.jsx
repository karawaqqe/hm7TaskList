import React from "react";
import './index.css';

class TaskList extends React.Component {
  static tasks = [
    { id: 1, text: "Вивчити React" },
    { id: 2, text: "Повторити HTML та CSS" },
    { id: 3, text: "Зробити домашнє завдання" },
  ];

  refresh() {
    const ul = document.getElementById("list");
    ul.innerHTML = "";
    TaskList.tasks.forEach((t) => {
      const li = document.createElement("li");
      li.textContent = t.text;

      const del = document.createElement("button");
      del.textContent = "Видалити";
      del.className = "delete-btn";
      del.onclick = () => {
        TaskList.tasks = TaskList.tasks.filter((x) => x.id !== t.id);
        this.refresh();
      };

      li.appendChild(del);
      ul.appendChild(li);
    });
  }

  componentDidMount() {
    this.refresh();
  }

  addTask = () => {
    const input = document.getElementById("inp");
    const txt = input.value.trim();
    if (txt === "") return;
    TaskList.tasks.push({ id: Date.now(), text: txt });
    input.value = "";
    this.refresh();
  };

  render() {
    return (
      <div className="task-container">
        <div className="add-task">
          <input id="inp" type="text" placeholder="Нове завдання" />
          <button onClick={this.addTask}>Додати</button>
        </div>
        <ul id="list"></ul>
      </div>
    );
  }
}

export default TaskList;
