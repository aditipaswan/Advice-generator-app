# Frontend Mentor - Advice generator app solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./design/desktop-preview.jpg)

### Links

- [Solution](https://github.com/mkboris/Advice-generator-app)
- [Live Site](https://advice-generator-app-omega-beryl.vercel.app/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Fetch API

### What I learned

This was my first time working with APIs and integrating it with an application. I learned how to use the fetch API to make a request to a 3rd party API in this case the [Advice Slip API](https://api.adviceslip.com/), which generates random advice quotes.

```js
fetch("https://api.adviceslip.com/advice")
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return res.json();
  })
  .then((data) => {
    adviceId.innerHTML = `${data.slip.id}`;
    advice.innerHTML = `”${data.slip.advice}”`;
  })
  .catch((err) => {
    advice.innerHTML = `Something went wrong: ${err.message}`;
  });
```

### Continued development

I find working with APIs quite facinating so I will continue to improve my skills by trying out other APIs.

## Author

- Frontend Mentor - [@mkboris](https://www.frontendmentor.io/profile/mkboris)
