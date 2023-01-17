import './style.css';
import UI from './modules/func.js';
import List from './modules/class.js';

const add = document.querySelector('.add');
const listinput = document.querySelector('.list-input');

add.addEventListener('submit', (e) => {
  e.preventDefault();
  const setindex = (UI.getlist()).length + 1;
  const input = listinput.value;
  const mylist = new List(input, false, setindex);
  UI.listlibrary(mylist);
  UI.addtodo(mylist);
});

document.addEventListener('DOMContentLoaded', () => {
  UI.displaylist();
  UI.getlist();
});
