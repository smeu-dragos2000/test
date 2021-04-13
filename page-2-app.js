const input = document.getElementById('input');
const submit = document.getElementById('submit');
const inputNumber = input.value;

const col0 = document.getElementById('image0');
const col1 = document.getElementById('image1');
const col2 = document.getElementById('image2');
const col3 = document.getElementById('image3');
const col4 = document.getElementById('image4');
const col5 = document.getElementById('image5');

const triangle0 = document.getElementById('triangle0');
const triangle1 = document.getElementById('triangle1');
const triangle2 = document.getElementById('triangle2');
const triangle3 = document.getElementById('triangle3');
const triangle4 = document.getElementById('triangle4');
const triangle5 = document.getElementById('triangle5');

const changeColor = () => {
    const inputNumber = input.value;
    console.log(inputNumber);

    if(inputNumber >= 0 && inputNumber < 10) {
        col0.classList.add('active');
        triangle0.style.display = 'block';
    }
    if(inputNumber >= 10 && inputNumber < 20) {
        col1.classList.add('active');
        triangle1.style.display = 'block';
    }
    if(inputNumber >= 20 && inputNumber < 30) {
        col2.classList.add('active');
        triangle2.style.display = 'block';
    }
    if(inputNumber >= 30 && inputNumber < 40) {
        col3.classList.add('active');
        triangle3.style.display = 'block';
    }
    if(inputNumber >= 40 && inputNumber < 50) {
        col4.classList.add('active');
        triangle4.style.display = 'block';
    }
    if(inputNumber >= 50 && inputNumber < 60) {
        col5.classList.add('active');
        triangle5.style.display = 'block';
    }
};

const clearClass = () => {
    col0.classList.remove('active')
    col1.classList.remove('active')
    col2.classList.remove('active')
    col3.classList.remove('active')
    col4.classList.remove('active')
    col5.classList.remove('active')
    triangle0.style.display = 'none';
    triangle1.style.display = 'none';
    triangle2.style.display = 'none';
    triangle3.style.display = 'none';
    triangle4.style.display = 'none';
    triangle5.style.display = 'none';
}

submit.addEventListener('click', changeColor);
input.addEventListener('keypress', clearClass);




