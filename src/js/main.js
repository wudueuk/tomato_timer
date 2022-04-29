import Importance from './modules/importance';

const imp = ['default', 'important', 'so-so'];

const importance = new Importance(imp[0]);

document.querySelector('.button-importance')
  .addEventListener('click', e => {
    const target = e.target;
    importance.countUp();
    if (importance.count >= imp.length) {
      importance.count = 0;
    }

    for (let i = 0; i < imp.length; i++) {
      if (importance.count === i) {
        target.classList.add(imp[i]);
        importance.changeName(imp[i]);
      } else {
        target.classList.remove(imp[i]);
        importance.changeName(imp[i]);
      }
    }
  });
