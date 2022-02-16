const modalBtn = document.querySelector('.check-em');
const modalMenu = document.querySelector('.modal-menu');
const closeBtn = document.querySelector('.close-menu')

modalBtn.addEventListener('click', function(){
    modalMenu.classList.add('bg-menu')
});
closeBtn.addEventListener('click', function(){
    modalMenu.classList.remove('bg-menu')
});