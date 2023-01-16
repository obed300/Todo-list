

// const edit = () => {
   
//   const des = document.querySelectorAll('.description');
//   des.forEach((element) => {
    
//     element.contentEditable = 'true';
   
//   });
// };

// const edit = () => {
//     const tasks = JSON.parse(localStorage.getItem('items'));
     
//     tasks.forEach((element) => {
//         document.querySelectorAll(`.description-${element.className}`).contentEditable = 'true';
//     });
//     localStorage.setItem('items', JSON.stringify(tasks));
//   };

const edit = () => {
    const tasks = JSON.parse(localStorage.getItem('items')) || [];

    tasks.forEach(element => {
      console.log(element.className);
    });
  };
  



















export default edit;