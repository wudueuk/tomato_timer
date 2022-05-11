import Importance from './importance';
import {AddTask} from './commands';

export class ControllerTomato {
  constructor(tomato, page) {
    this.tomato = tomato;
    this.page = page;
    this.btnAddTask = document.querySelector('.task-form__add-button');
    this.taskTitle = document.querySelector('.task-name');
    this.taskImportance = document.querySelector('.button-importance');
    this.init();
  }

  init() {
    this.importance = this.createImportance();

    this.btnAddTask.addEventListener('click', e => {
      e.preventDefault();
      this.addTask();
    });

    this.page.tasksList.addEventListener('click', e => {
      const target = e.target;
      if (target.classList.contains('pomodoro-tasks__task-text')) {
        this.tomato.activatedTask(target.closest('.pomodoro-tasks__list-task').
          dataset.id);
      }
    });
  }

  addTask() {
    const id = Math.round(Math.random() * 1000);
    const newTask = new AddTask(id, this.taskTitle.value,
      this.importance.impName);
    this.tomato.addTask(newTask);
  }

  createImportance() {
    const importance = new Importance();
    this.taskImportance.addEventListener('click', e => {
      const target = e.target;
      importance.countUp();
      if (importance.count >= importance.imp.length) {
        importance.count = 0;
      }

      for (let i = 0; i < importance.imp.length; i++) {
        if (importance.count === i) {
          target.classList.add(importance.imp[i]);
          importance.changeName(importance.imp[i]);
        } else {
          target.classList.remove(importance.imp[i]);
        }
      }
    });

    return importance;
  }
}
