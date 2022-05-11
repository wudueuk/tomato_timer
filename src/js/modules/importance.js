class Importance {
  constructor() {
    this.ID = Math.floor(Math.random() * 1000).toString();
    this.name = 'default';
    this.count = 0;
    this.imp = ['default', 'important', 'so-so'];
  }

  countUp() {
    this.count += 1;
    return this.count;
  }

  changeName(name) {
    this.name = name;
  }

  get impName() {
    return this.name;
  }

  get impID() {
    return this.ID;
  }
}

export default Importance;
