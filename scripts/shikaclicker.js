document.addEventListener('DOMContentLoaded', function () {
    const images = [
        '../images/shikanoko.png',
        '../images/koshi.png',
        '../images/deer.png',
    ];

    const sounds = [
        '../sounds/shika-1.mp3',
        '../sounds/shika-2.mp3',
        '../sounds/shika-3.mp3'
    ];

    const easterEggSound = '../sounds/shika-full.mp3';
    let soundSequence = [];

    document.addEventListener('click', function (event) {
        const randomImageIndex = Math.floor(Math.random() * images.length);
        const randomSoundIndex = Math.floor(Math.random() * sounds.length);

        const img = document.createElement('img');
        img.src = images[randomImageIndex];
        img.style.position = 'absolute';
        img.style.visibility = 'hidden';
        document.body.appendChild(img);

        img.onload = function() {
            img.style.left = `${event.clientX - img.width / 2}px`;
            img.style.top = `${event.clientY - img.height / 2}px`;
            img.style.visibility = 'visible';
        };

        const selectedSound = sounds[randomSoundIndex];
        const audio = new Audio(selectedSound);
        audio.play();
        
        soundSequence.push(selectedSound);
        if (soundSequence.length > 3) {
            soundSequence.shift();
        }

        if (soundSequence.join() === sounds.join()) {
            const easterEggAudio = new Audio(easterEggSound);
            easterEggAudio.play();
            soundSequence = [];
        }
    });
});
