const reloadPage = () => {
    location.reload();
}

const container = document.querySelector('#container');

const redText = document.createElement('p');
redText.style.color = 'red';
redText.textContent = `Hey I'm red!`;
container.appendChild(redText);

const blueHeader = document.createElement('h3');
blueHeader.style.color = 'blue';
blueHeader.textContent = 'I\'m a blue h3!';
container.appendChild(blueHeader);

const pinkDiv = document.createElement('div');
pinkDiv.style.backgroundColor = 'pink';
pinkDiv.style.border = '3px solid black';

const pinkDivHeader = document.createElement('h1');
pinkDivHeader.textContent = 'I\'m in a div';
pinkDiv.appendChild(pinkDivHeader);

const pinkDivText = document.createElement('p');
pinkDivText.textContent = 'ME TOO!';
pinkDiv.appendChild(pinkDivText);

container.appendChild(pinkDiv);

const resetButton = document.createElement('button');
resetButton.style.backgroundColor = 'rgb(0, 100, 255 / 50%)';
resetButton.style.border = '3px solid black';
resetButton.style.borderRadius = '10px';
resetButton.style.boxShadow = '10px 10px 10px 10px black';
resetButton.style.fontSize = '1.6rem';
resetButton.style.height = '7rem';
resetButton.style.margin = '5%';
resetButton.style.width = '20%';
resetButton.textContent = 'Click me to refresh!';
resetButton.addEventListener('click', reloadPage);

container.appendChild(resetButton);
