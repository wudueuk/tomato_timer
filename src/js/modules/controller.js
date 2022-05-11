import {
  importantTask,
  sosoTask,
  defaultTask,
} from './timer';
import Importance from './importance';

export class ControllerTomato {
  constructor() {
    this.btnAddTask = document.querySelector('.task-form__add-button');
    this.taskName = document.querySelector('.task-name');
    this.taskImportance = document.querySelector('.button-importance');
    this.init();
  }

  init() {
    this.importance = this.createImportance();
    this.btnAddTask.addEventListener('click', e => {
      e.preventDefault();
      this.addTask();
    });
  }

  addTask() {
    const task = this.createTask();
    task.addTask(
      {
        id: this.importance.impID,
        title: this.taskName.value,
        count: 0,
      });
  }

  createTask() {
    const importance = this.importance.impName;
    switch (importance) {
      case 'default':
        return new defaultTask();
      case 'important':
        return new importantTask();
      case 'so-so':
        return new sosoTask();
    }
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
