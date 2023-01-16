import UI from './func.js';

const removeFor = (index) => {
  let tasks = JSON.parse(localStorage.getItem('items'));
  tasks = tasks.filter((items) => items.index !== Number(index));

  let i = 1;
  tasks.forEach((items) => {
    items.index = i;
    i += 1;
  });
  localStorage.setItem('items', JSON.stringify(tasks));
  window.location.reload();
};

export default removeFor;