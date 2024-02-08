document.querySelector('#dice').addEventListener('click', () => {
    const noppakuva = document.getElementById('noppakuva');
    const randomizedNumber = getRandomNumberInRange(1, 6);
    const imagePath = `kuvat/${randomizedNumber}.png`;


    noppakuva.src = imagePath;
});

const getRandomNumberInRange = (min,max) => {
    return Math.floor(Math.random()*(max-min + 1)) + min;
}