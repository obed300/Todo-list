import removeFor from './delete.js';
import edit from './editable.js';

export default class UI {
  static getlist = () => {
    let tasks;
    if (localStorage.getItem('items') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('items'));
    }
    return tasks;
  }

  static addtodo = (element) => {
    const todos = this.getlist();
    todos.push(element);
    localStorage.setItem('items', JSON.stringify(todos));
  }

  static displaylist = () => {
    const todos = this.getlist();
    todos.forEach((element) => this.listlibrary(element));
  }

  static listlibrary = (element) => {
    const listcontainer = document.querySelector('.list-container');

    const list = document.createElement('div');
    list.classList.add('mylist');
    const check = document.createElement('input');
    check.type = 'checkbox';
    check.id = 'checkbox';
    list.append(check);

    const description = document.createElement('p');
    description.className = 'description';
    description.textContent = `${element.description}`;
    const dots = document.createElement('a');
    dots.className = 'uil uil-ellipsis-v';
    dots.id = 'gg';

    const deleteIcon = document.createElement('a');
    deleteIcon.className = 'fa fa-trash-o';
    deleteIcon.title = 'Delete';
    deleteIcon.id = 'trash';
    deleteIcon.style.visibility = 'hidden';
    dots.append(deleteIcon);

    list.onclick = () => {
      edit();
      deleteIcon.style.visibility = 'visible';
      dots.style.visibility = 'hidden';
      list.style.backgroundColor = 'yellow';
    };

    deleteIcon.onclick = () => {
      list.remove('mylist');
      removeFor(element.index);
    };

    list.append(description, dots);
    listcontainer.appendChild(list);
  }
}
