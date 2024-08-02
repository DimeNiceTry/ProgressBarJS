const valueVarInput = document.querySelector('.value-var');
const circle = document.querySelector('.circle');
const hideToggleButton = document.querySelector('#hided');
const animateToggleButton = document.querySelector('#animated');
const progressBar = document.querySelector('.bar');

valueVarInput.addEventListener('input', (event) => {
    const value = event.target.value;

    if (value > 100) {
        alert('Нельзя вставлять значения больше 100');
        event.target.value = '';
        circle.style.strokeDasharray = `0, 100`; // сбросить значение прогресса
    } else {
        circle.style.strokeDasharray = `${value} ${100 - value}`;
    }
});

hideToggleButton.addEventListener('change', () => {
    if (hideToggleButton.checked) {
        progressBar.style.visibility = 'hidden';
    } else {
        progressBar.style.visibility = 'visible';
    }
});

animateToggleButton.addEventListener('change', () => {
    if (animateToggleButton.checked) {
        progressBar.classList.add('rotate');
    } else {
        progressBar.classList.remove('rotate');
    }
});
