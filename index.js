const alertPage = document.querySelector('.alert-page');
const todoPage = document.querySelector('.todo-page');
const formPage = document.querySelector('.form-page');

const modal = document.querySelector('.modal-text-box');
const overlay = document.querySelector('.overlay');
const showModalBtn = document.querySelector('.modal-box-btn');
const closeModalBtn = document.querySelector('.close-modal-btn');





const openModal = ()=>{
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    showModalBtn.classList.add('hidden');
   
};

const closeModal = () =>{
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    showModalBtn.classList.remove('hidden');
 
}


showModalBtn.addEventListener('click',openModal);
closeModalBtn.addEventListener('click',closeModal);
