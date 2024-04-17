function createLetter() {

    //объявляю символы и рандомайзер
    const letters = "12345678910";
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];

    //letterElement => создает <span />
    const letterElement = document.createElement("span");

    //подключаем рандомайзер 
    letterElement.textContent = randomLetter;
    letterElement.classList.add("letter");

    const container = document.getElementById("container");
    container.appendChild(letterElement);

    const randomX = Math.random() * container.offsetWidth;
    const randomY = Math.random() * container.offsetHeight;

    letterElement.style.left = randomX + "px";
    letterElement.style.top = randomY + "px";

    setTimeout(() => {
        letterElement.style.animation = "fade 2s linear forwards";
        setTimeout(() => {
            container.removeChild(letterElement);
        }, 1000)
    }, 2000);
}

setInterval(createLetter, 50) 