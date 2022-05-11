
class Tomato {
  constructor(page, params = {
    tasks: [],
    defaultTime: 25,
    smallPause: 5,
    bigPause: 15,
  }) {
    if (Tomato._instance) {
      return Tomato._instance;
    }
    this.page = page;
    this.taskList = params.tasks;
    this.taskTime = params.defaultTime;
    this.smallPause = params.smallPause;
    this.bigPause = params.bigPause;
    Tomato._instance = this;
  }

  addTask(task) {
    this.taskList.push(task);
    this.page.createTask({
      id: task.id,
      title: task.title,
      important: task.importance,
      count: this.taskList.length,
    });
  }

  activatedTask(id) {
    const title = this.taskList.find(elem => {
      if (elem.id === +id) return elem.title;
    });

    this.page.setWindowTitle(title.title);
  };
}

export default Tomato;
