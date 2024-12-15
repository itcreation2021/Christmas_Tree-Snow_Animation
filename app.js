const bulbs = document.querySelectorAll('.bulb');
const toggleButton = document.getElementById('toggleLights');

let lightsOn = true;

toggleButton.addEventListener('click', () => { 
    lightsOn = !lightsOn;
    
    bulbs.forEach((bulb) => {
        bulb.style.animation = lightsOn ? 'twinkle 1.5s infinite' : 'none';
        bulb.style.boxShadow = lightsOn ? '' : 'none';
        bulb.style.opacity = lightsOn ? '1' : '.3'//set opacity when lights are off
        
    })

    toggleButton.textContent = lightsOn ? 'Turn Off Lights' : 'Turn On Lights';
    toggleButton.style.backgroundColor = lightsOn ? 'yellow' : 'red';
    toggleButton.style.color = lightsOn ? 'blue' : 'white';
})

// Snowfall Effect
const snowContainer = document.querySelector('.snow-container');

function createSnowFlake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
    snowflake.style.opacity = Math.random();

    snowContainer.appendChild(snowflake);

    setTimeout(()=>snowflake.remove(),5000)

}

setInterval(createSnowFlake,200)