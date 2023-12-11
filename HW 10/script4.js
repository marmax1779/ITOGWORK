let buttonReg = document.querySelector('.container-title__button');
let popup = document.querySelector('.popup-reg');
let buttonFinish = document.querySelector('.button-push');

console.log(buttonReg);
buttonReg.addEventListener('click', function () {
    buttonReg.classList.toggle('click-style');
    popup.classList.toggle('show');
})

buttonFinish.addEventListener('click', function () {
    buttonFinish.classList.toggle('click-style');
    popup.classList.toggle('show');
})
