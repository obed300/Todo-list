import './style.css';

class UI {
  static displaystructure() {
    const tasks = [
      {
        description: 'sfdgdgs',
        completed: false,
        index: 1,
      },
      {
        description: 'hfthyh',
        completed: false,
        index: 1,
      },
    ];
    tasks.forEach((element) => UI.addlist(element));
  }

  static addlist(element) {
    const listcontainer = document.querySelector('.list-container');

    const list = document.createElement('div');
    list.classList.add('mylist');
    list.innerHTML = `
    <i class="fa fa-square-o"></i>
    <div class="describe">${element.description}</div>
    <i class="uil uil-ellipsis-v"></i>
    `;
    listcontainer.appendChild(list);
  }
}
document.addEventListener('DOMContentLoaded', UI.displaystructure);