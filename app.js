const modalBtn = document.querySelector('.check-em');
const modalMenu = document.querySelector('.modal-menu');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-menu')
const image = document.querySelector('.image-div');
modalBtn.addEventListener('click', function(){
    modalMenu.classList.add('bg-menu');
    modal.classList.add('bg-menu2')
});
closeBtn.addEventListener('click', function(){
    modalMenu.classList.remove('bg-menu');
    modal.classList.remove('bg-menu2');
    // modal.classList.add('modal-rev');
});
image.addEventListener('click', () => {
    image.classList.add("stuff");
})
