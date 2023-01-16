import './style.css';
import UI from './modules/func.js';
import List from './modules/class.js';

const add = document.querySelector('.add');
const listinput = document.querySelector('.list-input');

// window.onload = () => {
//   UI.displaylist();
// };
// const setindex = (UI.getlist()).length;
// console.log(setindex);
// const input = listinput.value;
// const mylist = new List(input, false, setindex);
// const gg = mylist.index;

add.addEventListener('submit', (e) => {
  e.preventDefault();
  const setindex = (UI.getlist()).length + 1;
  const input = listinput.value;
  const mylist = new List(input, false, setindex);
  UI.listlibrary(mylist);
  UI.addtodo(mylist);
});

// const mylist = document.querySelectorAll('.mylist');
// console.log(mylist);

// mylist.forEach((element) => {
//   element.addEventListener('onclick', (e) => {
//     element.style.color = 'red';
//     e.preventDefault();
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  UI.displaylist();
  UI.getlist();
  // const mylist = document.querySelectorAll('.mylist');
  // mylist.forEach((element) => {
  //   element.onclick = () => {
  //     const fatrasho = document.querySelector('#trash');
  //     fatrasho.style.visibility = 'visible';
  //   };
  // });
});

// const mylist = document.querySelectorAll('.mylist');
// mylist.addEventListener('click',(e) => {

// })

// const trash = document.createElement('button');
// trash.classList.add('trash');
// trash.innerHTML = '<i class="fa fa-trash-o"></i>';
// mylisting.appendChild(trash);
// document.querySelector('.my-list').addEventListener('click', (e) => {
//   e.preventDefault();
// });

// uilellipsis.innerHTML = '<i class=\'fa fa-trash-o></i>\'';
