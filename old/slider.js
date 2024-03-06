const arr = []

const img1 = document.createElement('img');
const img2 = document.createElement('img');
const img3 = document.createElement('img');
const img4 = document.createElement('img');
const img5 = document.createElement('img');
const img6 = document.createElement('img');

img1.src = "assets/img/starwars6r.jpg"
img2.src = "assets/img/womenmarvel6r.jpg"
img3.src = "assets/img/stthings6r.jpg"
img4.src = "assets/img/dragonb6t.jpg"
img5.src = "assets/img/studentlife6r.jpg"
img6.src = "assets/img/gaming6r.jpg"

arr.push(img1)
arr.push(img2)
arr.push(img3)
arr.push(img4)
arr.push(img5)
arr.push(img6)

let currentIndex = 0;

const changeSlide = () => {
    const left = document.querySelector('.left');
    const right = document.querySelector('.right');

    left.addEventListener('click', () => {
        if (currentIndex === 0) {
            currentIndex = arr.length - 1;
        } else {
            currentIndex -=1;
        }
        displayImg(currentIndex);
    })

    right.addEventListener('click', () => {
        if (currentIndex === arr.length - 1) {
            currentIndex = 0;
        } else {
            currentIndex += 1;
        }
        displayImg(currentIndex);
    })
}

const displayImg = (index) => {
    const imageContainer = document.querySelector('#image-container');

    imageContainer.textContent = ''
    imageContainer.appendChild(arr[index]);
    addCircles();
    circleClicked();
}

const displayFirstImg = () => {
    const imageContainer = document.querySelector('#image-container');
    imageContainer.appendChild(arr[0]);
    addCircles();
}

const addCircles = () => {
    const circleContainer = document.querySelector('#circleContainer')
    const imageContainer = document.querySelector('#image-container');
    circleContainer.textContent = '';
    for (let i = 0; i < arr.length; i++) {
        const circle = document.createElement('div')
        circle.classList.add('circle');
        circle.dataset.number = i;
        if (i==currentIndex) circle.classList.add('clicked')
        circleContainer.appendChild(circle);
    }
    
}

const circleClicked = () => {
    const circles = document.querySelectorAll('.circle');

    circles.forEach(circle => circle.addEventListener('click', (e) => {
        currentIndex = +e.target.dataset.number;
        displayImg(e.target.dataset.number);
    }))
}

displayFirstImg();
circleClicked();
changeSlide();