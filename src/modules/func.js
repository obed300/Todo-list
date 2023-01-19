import removeFor from './delete.js';
import edit from './editable.js';
import isCompleted from './completed.js';

export default class UI {
  static getlist () {
    let tasks;
    if (localStorage.getItem('items') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('items'));
    }
    return tasks;
  }

  static addtodo  (element)  {
    const todos = this.getlist();
    todos.push(element);
    localStorage.setItem('items', JSON.stringify(todos));
  }

  static displaylist () {
    const todos = this.getlist();
    todos.forEach((element) => this.listlibrary(element));
  }

  static listlibrary (element)  {
    const listcontainer = document.querySelector('.list-container');

    const list = document.createElement('div');
    list.classList.add('mylist');
    const check = document.createElement('input');
    check.type = 'checkbox';
    // check.checked = true;
    // check.id = 'checkbox';
    check.title = 'Select this option to enable a feature';
    list.append(check);

    const label = document.createElement('label');
    label.setAttribute('for', check.id);
    list.appendChild(label);

    const description = document.createElement('p');
    description.className = 'description';
    description.textContent = `${element.description}`;
    description.classList.add('description-text');
    const dots = document.createElement('a');
    dots.className = 'uil uil-ellipsis-v';
    dots.id = 'gg';

    check.onchange = (e) => {
      if (e.target.checked) {
        description.classList.add('line-through');
      } else {
        description.classList.remove('line-through');
      }
      // OR description.classList.toggle('line-through')
      isCompleted(element.index);
    };

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
