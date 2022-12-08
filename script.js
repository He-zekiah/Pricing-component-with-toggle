const switchCtn = document.getElementById('light');
const switchBtn = document.getElementById('round');
const num = document.querySelectorAll('.num');
const number = document.querySelectorAll('.number');
console.log('num');

switchCtn.addEventListener('click', function (e) {
    switchBtn.classList.toggle('active');
    switchCtn.classList.toggle('active2');
    num.forEach((num) => {
        num.classList.toggle('next');
    })
    number.forEach((number) => {
        number.classList.toggle('nexts');
    })
});