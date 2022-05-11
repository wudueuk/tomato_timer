class TomatoTimer {
  #innerTimer;
  constructor(params = {
    tasks: [],
    defaultTime: 25,
    smallPause: 5,
    bigPause: 15,
  }) {
    if (TomatoTimer._instance) {
      return TomatoTimer._instance;
    }
    this.taskTime = params.defaultTime;
    this.smallPause = params.smallPause;
    this.bigPause = params.bigPause;
    this.tasks = params.tasks;
    this.activeTask = null;
    this.#innerTimer = 0;
    TomatoTimer._instance = this;
    this.importance = '';
  }

  addTask(task) {
    this.tasks.push(task);
  }

  taskActivated(id) {
    this.activeTask = this.tasks[id];
    console.log(`Задача ${this.activeTask.id} активизирована`);
  }

  startTimer() {
    if (this.activeTask) {
      this.#innerTimer = 0;
      console.log('Запущен таймер задачи № ' + this.activeTask.id);
      const timerId = setInterval(() => {
        if (this.innerTimerUp() === this.taskTime) {
          clearInterval(timerId);
          this.getPause(this.countUp(this.activeTask.id));
        };
      }, 1000);
    } else console.log('Нет активных задач');
  }

  getPause(param) {
    if (param % 3 === 0) {
      console.log('Запуск большой перемены');
      this.startPause(this.bigPause);
    } else {
      console.log('Запуск малой перемены');
      this.startPause(this.smallPause);
    }
  }

  startPause(time) {
    this.#innerTimer = 0;
    const pauseId = setInterval(() => {
      if (this.innerTimerUp() === time) {
        clearInterval(pauseId);
        console.log('Конец перемены');
        this.startTimer();
      };
    }, 1000);
  }

  countUp(id) {
    const count = ++this.tasks[id].count;
    console.log('Время вышло, счетчик увеличен и равен ' + count);
    return count;
  }

  showTasks() {
    this.tasks.forEach(element => {
      console.log('Задача:', JSON.stringify(element));
    });
  }

  innerTimerUp() {
    return ++this.#innerTimer;
  }
}

export class importantTask extends TomatoTimer {
  constructor(params, importance = 'important') {
    super(params);
    this.importance = importance;
  }
}

export class sosoTask extends TomatoTimer {
  constructor(params, importance = 'so-so') {
    super(params);
    this.importance = importance;
  }
}

export class defaultTask extends TomatoTimer {
  constructor(params, importance = 'default') {
    super(params);
    this.importance = importance;
  }
}
