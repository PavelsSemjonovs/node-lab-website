// Effect 1: show a welcome message when HOME is clicked.
document.querySelector('.w3-bar a[href="#"]').addEventListener('click', function () {
  alert('Welcome to our band website!');
});

// Effect 2: change the band heading color when clicked.
const heading = document.querySelector('#band h2');
heading.addEventListener('click', function () {
  heading.style.color = 'teal';
});

// Effect 3: use a click event and an if/else condition to toggle the paragraph.
const paragraph = document.querySelector('#band .w3-justify');
const button = document.createElement('button');
button.textContent = 'Hide description';
button.className = 'w3-button w3-black';
paragraph.after(button);

button.addEventListener('click', function () {
  if (paragraph.hidden) {
    paragraph.hidden = false;
    button.textContent = 'Hide description';
  } else {
    paragraph.hidden = true;
    button.textContent = 'Show description';
  }
});
