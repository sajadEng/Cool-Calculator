// create elements
const bgContainerDiv = document.createElement('div');
bgContainerDiv.classList.add('s-background-div-container');
for (let i = 0 ; i < 40; i++) {
    const bgDiv = document.createElement('div');
    bgDiv.classList.add('s-background-div');
    bgContainerDiv.append(bgDiv);
}
document.querySelector('body').append(bgContainerDiv);



// set styles
bgContainerDiv.style.position = 'fixed';
bgContainerDiv.style.top = '0';
bgContainerDiv.style.bottom = '0';
bgContainerDiv.style.right = '0';
bgContainerDiv.style.left = '0';
bgContainerDiv.style.background = 'black';
bgContainerDiv.style.zIndex = '-100000';

for (let i = 0 ; i < document.querySelectorAll('div.s-background-div').length ; i++) {
    let thisElement = document.querySelectorAll('div.s-background-div')[i];
    thisElement.style.position = 'fixed';
    thisElement.style.transform = 'translate(-50%,-50%)';
    thisElement.style.transition = 'all 5000ms ease';
    thisElement.style.background = 'royalblue';
    thisElement.style.boxShadow = '0 0 10px royalblue';
    thisElement.style.width = '2px';
    thisElement.style.aspectRatio = '1/1';
    thisElement.style.borderRadius = '50%';
    thisElement.style.animation = 'rotater 5s infinite ease both';
    thisElement.style.zIndex = '-10000';
}




// set top and left 
topALeft();



// set animation delays
for (let i = 0; i < document.querySelectorAll('div.s-background-div').length; i++) {
    document.querySelectorAll('div.s-background-div')[i].style.animationDelay = `${Math.floor(Math.random() * 5000)}ms`;
}


// main function
function topALeft() {
    for (let i = 0; i < document.querySelectorAll('div.s-background-div').length; i++) {
        document.querySelectorAll('div.s-background-div')[i].style.top = `${Math.floor(Math.random() * 100)}%`;
        document.querySelectorAll('div.s-background-div')[i].style.left = `${Math.floor(Math.random() * 100)}%`;
    }
}

setInterval(topALeft, 5000);