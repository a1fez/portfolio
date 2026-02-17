const button = document.querySelector('.animation_container');
const extraAnimation = document.querySelector('.extra');

button.addEventListener('click', () =>{
    extraAnimation.classList.toggle('active');
})