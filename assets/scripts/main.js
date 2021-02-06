// main.js
const input = document.querySelector('input');
const btn = document.getElementById('honk-btn');
const audio = document.getElementById('horn-sound');
const air = document.getElementById('radio-air-horn');
const car = document.getElementById('radio-car-horn');
const party = document.getElementById('radio-party-horn');
const simage = document.getElementById('sound-image');
const vimage = document.getElementById('volume-image');
const slider = document.getElementById('volume-slider');
const number = document.getElementById('volume-number');

function changeVolume(e) {
    var n = e.target.value;
    audio.volume = n / 100;
    slider.value = n;
    number.value = n;

    if (n == 0) {
        vimage.src = "./assets/media/icons/volume-level-0.svg";
        btn.disabled = true;
    }
    else if (n <= 33) {
        vimage.src = "./assets/media/icons/volume-level-1.svg";
        btn.disabled = false;
    }
    else if (n <= 66) {
        vimage.src = "./assets/media/icons/volume-level-2.svg";
        btn.disabled = false;
    }
    else {
        vimage.src = "./assets/media/icons/volume-level-3.svg";
        btn.disabled = false;
    }
}

function changeSound(e) {
    if (air.checked) {
        audio.src = "./assets/media/audio/air-horn.mp3";
        simage.src = "./assets/media/images/air-horn.svg"
    } else if (car.checked) {
        audio.src = "./assets/media/audio/car-horn.mp3";
        simage.src = "./assets/media/images/car.svg"
    } else if (party.checked) {
        audio.src = "./assets/media/audio/party-horn.mp3";
        simage.src = "./assets/media/images/party-horn.svg"
    }
}

function click(e) {
    audio.play();
    e.preventDefault();
}

input.addEventListener('input', changeVolume);
btn.addEventListener('click', click);
air.addEventListener('change', changeSound);
car.addEventListener('change', changeSound);
party.addEventListener('change', changeSound);
vimage.addEventListener('input', changeVolume);
slider.addEventListener('input', changeVolume);