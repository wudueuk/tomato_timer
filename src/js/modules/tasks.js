class Task {
  constructor(id, title) {
    this.id = id;
    this.title = title;
    this.count = 0;
  }
}

export class importantTask extends Task {
  constructor() {
    this.importance = 'important';
  }
}

export class sosoTask extends Task {
  constructor() {
    this.importance = 'so-so';
  }
}

export class defaultTask extends Task {
  constructor() {
    this.importance = 'default';
  }
}
