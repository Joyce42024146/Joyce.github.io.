var myHeading = document.querySelector('h1');
myHeading.textContent = 'Goodbye world! From Joyce Chen';

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/mercy-theatrical-wide.jpg') {
      myImage.setAttribute ('src','images/cDy7wHB.jpg');
    } else {
      myImage.setAttribute ('src','images/mercy-theatrical-wide.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Heroes never die! ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Heroes never die! ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}