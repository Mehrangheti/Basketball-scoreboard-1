let btns = document.querySelectorAll('.btns button');
let gameEnded = false;

let end = document.querySelector('.end');
let paragraph = document.querySelector('.paragraph');
let first = document.querySelector('.first');
let second = document.querySelector('.second');
let home = document.querySelector('.home');
let guest = document.querySelector('.guest');
let start = document.querySelector('.start');

end.addEventListener('click', function(e) {
    if (!gameEnded) {
        const firstScore = parseInt(first.innerHTML);
        const secondScore = parseInt(second.innerHTML);
        
        if (firstScore > secondScore) {
            paragraph.innerHTML = "HOME won!";
            home.classList.add('winner');
        } else if (firstScore < secondScore) {
            paragraph.innerHTML = "GUEST won!";
            guest.classList.add('winner');
        } else {
            paragraph.innerHTML = "It is a draw";
        }
        
        gameEnded = true;

        btns.forEach(btn => {
            btn.disabled = true;
        });
    }
});

start.addEventListener('click', function(e) {
    first.innerHTML = "0";
    second.innerHTML = "0";
    home.classList.remove('winner');
    guest.classList.remove('winner');
    paragraph.innerHTML = "";
    gameEnded = false;

    btns.forEach(btn => {
        btn.disabled = false;
    });
});

let oneFirst = document.querySelector('.first1');
let twoFirst = document.querySelector('.first2');
let threeFirst = document.querySelector('.first3');
let oneSecond = document.querySelector('.second1');
let twoSecond = document.querySelector('.second2');
let threeSecond = document.querySelector('.second3');

oneFirst.addEventListener('click', function(e) {
    first.innerHTML = parseInt(first.innerHTML) + 1;
});

twoFirst.addEventListener('click', function(e) {
    first.innerHTML = parseInt(first.innerHTML) + 2;
});

threeFirst.addEventListener('click', function(e) {
    first.innerHTML = parseInt(first.innerHTML) + 3;
});

oneSecond.addEventListener('click', function(e) {
    second.innerHTML = parseInt(second.innerHTML) + 1;
});

twoSecond.addEventListener('click', function(e) {
    second.innerHTML = parseInt(second.innerHTML) + 2;
});

threeSecond.addEventListener('click', function(e) {
    second.innerHTML = parseInt(second.innerHTML) + 3;
});
