const listcontainer = document.querySelector('.list-container');
export default class Todo {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;

    const tasks = [
      {
        description: 'eeee',
        completed: false,
        index: 1,
      },
    ];

    tasks.forEach((element) => {
      const list = document.createElement('div');
      list.classList.add('mylist');
      list.innerHTML = `
        <i class="fa fa-square-o"></i>
        <div class="describe">${element.description}</div>
        <i class="uil uil-ellipsis-v"></i>
        `;
      listcontainer.appendChild(list);
    });
  }
}
