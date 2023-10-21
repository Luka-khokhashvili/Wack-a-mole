const squares = document.querySelectorAll('.square');
const mole = document.querySelector('mole');
const timeleft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let result = 0;
let hitPosition;
let timerId = null;
let currentTime = 60;
let speed = 1000;

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole');
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole');

    hitPosition = randomSquare.id;
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    })
})

function moveMole() {
    timerId = setInterval(randomSquare, speed);
}

moveMole();
// randomSquare();

function countDown() {
    currentTime--;
    timeleft.textContent = currentTime;

    if(currentTime == 0) {
        clearInterval(countDownTimerId);
        confirm('GAME OVER! Your final score is ' + result + ' \n want to play again?');
        if (confirm) {
            location.reload();
        }
        clearInterval(timerId);
    }

    document.getElementById('infinite').addEventListener('click', function() {
        currentTime = 60;
        timeleft.textContent = 'Infinite';
        result = 0;
        score.textContent = 0;
        clearInterval(countDownTimerId);
        speed = 1000; // Adjust this value to control mole movement speed
        clearInterval(timerId);
        moveMole();
    });
    
    document.getElementById('classic').addEventListener('click', function() {
        currentTime = 60;
        timeleft.textContent = 60;
        result = 0;
        score.textContent = 0;
        speed = 1000; // Adjust this value to control mole movement speed
        clearInterval(timerId);
        moveMole();
    });

    document.getElementById('hard').addEventListener('click', function() {
        currentTime = 60;
        timeleft.textContent = 60;
        result = 0;
        score.textContent = 0;
        speed = 600; // Adjust this value to control mole movement speed
        clearInterval(timerId);
        moveMole();
    });

    document.getElementById('extreme').addEventListener('click', function() {
        currentTime = 30;
        timeleft.textContent = 30;
        result = 0;
        score.textContent = 0;
        speed = 400; // Adjust this value to control mole movement speed
        clearInterval(timerId);
        moveMole();
    });
}

let countDownTimerId = setInterval(countDown, 1000);