const button = document.getElementById('movingButton');
const scoreElement = document.getElementById('score');
let score = 0;
let buttonSize = 100;

function moveButton() {
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;
    
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
    
    buttonSize *= 0.95;
    button.style.transform = `scale(${buttonSize / 100})`;
    
    score++;
    scoreElement.textContent = `Score: ${score}`;
}

button.addEventListener('click', moveButton);