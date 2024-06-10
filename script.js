const modeSwitchButton = document.getElementById('mode-switch');

modeSwitchButton.addEventListener('click', function() {
    toggleMode();
    moveButtonRight();
});

function toggleMode() {
    const htmlElement = document.querySelector('html');
    htmlElement.classList.toggle('light');
}

function moveButtonRight() {
    
    modeSwitchButton.classList.add('move-right');

   
    modeSwitchButton.addEventListener('animationend', function() {
        modeSwitchButton.classList.remove('move-right');
    }, { once: true }); 
}
