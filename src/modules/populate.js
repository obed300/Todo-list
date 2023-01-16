// import removeFor from './delete.js';
// import isCompleted from './completed.js';
// import edit from './editable.js';

// const listlibrary = (element) => {
//   const listcontainer = document.querySelector('.list-container');

//   const list = document.createElement('div');
//   list.classList.add('mylist');
//   const check = document.createElement('input');
//   check.type = 'checkbox';
//   check.id = 'checkbox';
//   list.append(check);

//   const description = document.createElement('p');
//   description.classList.add('description');
//   description.textContent = `${element.description}`;

//   const dots = document.createElement('a');
//   dots.className = 'uil uil-ellipsis-v';
//   dots.id = 'gg';

//   const deleteIcon = document.createElement('a');
//   deleteIcon.className = 'fa fa-trash-o';
//   deleteIcon.title = 'Delete';
//   deleteIcon.id = 'trash';
//   deleteIcon.style.visibility = 'hidden';
//   dots.append(deleteIcon);

//   // function func(e) {
//   //   for (let i = 0; i < list.length; i++) {
//   //     list[i].className = 'mylist';
//   //   }
//   //   e.target.className = 'mylist';
//   // }
//   list.onclick = () => {
//     edit(description.value,element.index)
//     deleteIcon.style.visibility = 'visible';
//     dots.style.visibility = 'hidden';
//     list.style.backgroundColor = 'yellow';
//   };

//   deleteIcon.onclick = () => {
//     list.remove('mylist');
//     removeFor(element.index);
//   };

//   list.append(description, dots);
//   listcontainer.appendChild(list);

//   // list.innerHTML = `
//   //   <a class="fa fa-square-o"></a>
//   //   <div class="describe">${element.description}</div>
//   //   <a class="uil uil-ellipsis-v" id="gg"></a>
//   //   `;
// };

// export default listlibrary;/a>
//     //   `;
//   }

//   export default listlibrary;