import {defaultTask, importantTask, sosoTask} from "./tasks";

export class Commands {
  constructor(id, title, importance) {
    this.id = id;
    this.title = title;
    this.importance = importance;
  }

  execute() {
    throw new Error('Error!');
  }
}

export class AddTask extends Commands {
  execute() {
    switch (this.importance) {
      case 'default':
        return new defaultTask(this.id, this.title);
      case 'important':
        return new importantTask(this.id, this.title);
      case 'so-so':
        return new sosoTask(this.id, this.title);
    }
  }
}
