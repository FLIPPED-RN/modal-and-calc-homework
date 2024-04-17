const dialogWindow = document.querySelector('.dialog__window');
const startBtn = document.getElementById('start__button');
const closeButton = document.getElementById('close__button');

startBtn.addEventListener('click', () => {
    dialogWindow.style.visibility = "visible";
    startBtn.style.visibility = "hidden"
});

closeButton.addEventListener('click', () => {
    dialogWindow.style.visibility = "hidden";
    startBtn.style.visibility = "visible"
})