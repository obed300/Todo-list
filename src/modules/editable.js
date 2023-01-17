const edit = () => {
  const des = document.querySelectorAll('.description');
  des.forEach((element, index) => {
    element.contentEditable = 'true';
    element.addEventListener('input', (e) => {
      const tasks = JSON.parse(localStorage.getItem('items'));
      tasks[index].description = e.target.innerText;
      localStorage.setItem('items', JSON.stringify(tasks));
    });
  });
};

export default edit;