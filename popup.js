const  openReg= document.querySelector(".open");
const  closeReg= document.querySelector(".close");
const modal = document.querySelector(".create");

const createNew = function (e) {
    e.preventDefault();
    modal.classList.remove('window')
  };
  

  openReg.addEventListener('click', createNew);

  const deleteNew = function (e) {
    e.preventDefault();
    modal.classList.add('window')
  };
  
  closeReg.addEventListener('click', deleteNew);