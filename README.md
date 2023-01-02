# Number Guessing Game

This is a Vanilla JavaScript Project with DOM Manipulation.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Screenshot

![numberGuessingGame](https://user-images.githubusercontent.com/108392678/197387185-bdf8a84a-9172-442e-844d-e1a9808efec1.png)

### Links

- DEMO: [Link](https://marvedventures.github.io/Number-Guessing-Game-v2/)

## My process

### Built with

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

### What I learned

- DOM Manipulation
- Event Handling in JavaScript
- Adding styles using JavaScript
- Design as a Responsive web

Here is a code snippet:

```script.js
// easy button
document.querySelector('.easy').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 1000) + 1;
  displayMessage('Start guessing...');
  changeBackground('#344e41');
  displayScore(score);
  document.querySelector('h1').textContent = 'Easy Round';
  document.querySelector('.guess').disabled = false;
  document.querySelector('.guess').value = '';
  document.querySelector('.check').textContent = 'Check';
  document.querySelector('.guess').disabled = false;
  document.querySelector('.check').disabled = false;
  document.querySelector('.easy').style.top = '2rem';
  document.querySelector('.medium').style.display = 'none';
  document.querySelector('.hard').style.display = 'none';
  document.querySelector('.extreme').style.display = 'none';
});
```


### Useful resources

- [MDN Docs (Events)](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events) - This helped me for handling events in JavaScript.
- [MDN Docs (Events)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) - This helped me for adding styles using JavaScript


## Author

- Website - [Marvin Morales Pacis](https://marvin-morales-pacis.vercel.app/)
- LinkedIn - [@marvedventures](https://www.linkedin.com/in/marvedventures/)
- Twitter - [@marvedventures](https://www.twitter.com/marvedventures)
