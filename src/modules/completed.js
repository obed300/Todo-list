const isCompleted = (index) => {
  const todos = JSON.parse(localStorage.getItem('items'));
  todos.forEach((data) => {
    if (data.index === index) {
      if (data.completed === true) {
        data.completed = false;
      } else {
        data.completed = true;
      }
    }
  });
  localStorage.setItem('items', JSON.stringify(todos));
};

export default isCompleted;