class ProgressBar {
    constructor() {
        this.valueVarInput = document.querySelector('.value-var');
        this.circle = document.querySelector('.circle');
        this.hideToggleButton = document.querySelector('#hided');
        this.animateToggleButton = document.querySelector('#animated');
        this.progressBar = document.querySelector('.bar');

        this.initEventListeners();
    }

    initEventListeners() {
        this.valueVarInput.addEventListener('input', (event) => {
            this.setValue(event.target.value);
        });

        this.hideToggleButton.addEventListener('change', () => {
            this.setVisibility(this.hideToggleButton.checked);
        });

        this.animateToggleButton.addEventListener('change', () => {
            this.setAnimation(this.animateToggleButton.checked);
        });
    }

    setValue(value) {
        if (value > 100 || value < 0 || isNaN(value)) {
            alert('Некорректное значение!');
            this.valueVarInput.value = '';
            this.circle.style.strokeDasharray = `0, 100`;
        } else if (value === '') {
            this.circle.style.strokeDasharray = `0, 100`;
        } else {
            this.circle.style.strokeDasharray = `${value} ${100 - value}`;
        }
    }

    setVisibility(isVisible) {
        this.progressBar.style.visibility = isVisible ? 'hidden' : 'visible';
    }

    setAnimation(isAnimated) {
        if (isAnimated) {
            this.progressBar.classList.add('rotate');
        } else {
            this.progressBar.classList.remove('rotate');
        }
    }

    updateValue(value) {
        this.setValue(value);
    }

    toggleVisibility() {
        this.setVisibility(this.hideToggleButton.checked);
    }

    toggleAnimation() {
        this.setAnimation(this.animateToggleButton.checked);
    }
}

const progressBar = new ProgressBar();

function usage() {
    progressBar.updateValue(0); 
    progressBar.toggleVisibility(); 
    progressBar.toggleAnimation();
}

usage();
