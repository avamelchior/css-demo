'use strict';
console.log('app js is running!');

let userName = prompt('What is your name?');
console.log('username', userName);

let message;
message = 'Welcome to the Wild West,'
document.write(message + ' ' + userName + '!');

confirm('Pretty cool, right?')

let imageElement = document.getElementById('imageSection');
console.log(imageElement);
let userInput = prompt('How many images would you like to see?');
let userInputParsed = parseInt(userInput);

if(!isNaN(userInputParsed)){
    console.log('we have a valid number to use!');
} else {
    userInputParsed = parseInt(prompt('Please, how many images would you like to see?'));
}

for(let i = 0; i <userInputParsed; i++){
    let listImage = document.createElement('li');
    console.log('1 li',listImage);
    listImage.textContent = 'image number ${i + 1}';
    let image = document.createElement('img');
    console.log('empty image tag: ', image);
    image.setAttribute('src', 'images/partyAnimals-removebg-preview.png');
    console.log('do we have img',image);

    listImage.appendChild(image);
    imageElement.appendChild(listImage);
}
