# My Portfolio

This is the Github respository of my personal portfolio. I had a lot of fun making it.

It is mostly made with web2 technology, however I added a web3 guestbook which users can sign with their Metamask wallets (on the Polygon network).

## Demo

You can view the live site here: https://hayleyiscoding.com (Vercel was used for the deployment of the live site)

The verified smart contract can be found on Polygon Scan here:
https://polygonscan.com/address/0x00f8e2b75e754107d02d03bf0bbdfd9934e35631

## Screenshots

[![Screen-Shot-2023-05-19-at-10-22-35-pm.png](https://i.postimg.cc/fWXbbVd1/Screen-Shot-2023-05-19-at-10-22-35-pm.png)](https://postimg.cc/BtS3YQMC)

[![Screen-Shot-2023-05-19-at-10-23-23-pm.png](https://i.postimg.cc/KvqCSNzb/Screen-Shot-2023-05-19-at-10-23-23-pm.png)](https://postimg.cc/nCm3qqBS)

[![portfolio.png](https://i.postimg.cc/1599BJgr/portfolio.png)](https://postimg.cc/9zn5FPYD)

[![Screen-Shot-2023-05-19-at-10-16-47-pm.png](https://i.postimg.cc/tCw9byS2/Screen-Shot-2023-05-19-at-10-16-47-pm.png)](https://postimg.cc/N5637hwH)

[![Screen-Shot-2023-05-19-at-10-17-49-pm.png](https://i.postimg.cc/x8Bhwjfm/Screen-Shot-2023-05-19-at-10-17-49-pm.png)](https://postimg.cc/FkgTc4JF)

[![Screen-Shot-2023-05-19-at-10-18-42-pm.png](https://i.postimg.cc/zGG2xRSQ/Screen-Shot-2023-05-19-at-10-18-42-pm.png)](https://postimg.cc/0bhCQj4G)

[![Screen-Shot-2023-05-19-at-10-19-32-pm.png](https://i.postimg.cc/MGyBR9fJ/Screen-Shot-2023-05-19-at-10-19-32-pm.png)](https://postimg.cc/8FzsgBbZ)

[![Screen-Shot-2023-05-19-at-10-20-55-pm.png](https://i.postimg.cc/L5r4xMGC/Screen-Shot-2023-05-19-at-10-20-55-pm.png)](https://postimg.cc/ctBNJPxw)

[![Screen-Shot-2023-05-19-at-10-21-59-pm.png](https://i.postimg.cc/T1mhMwjM/Screen-Shot-2023-05-19-at-10-21-59-pm.png)](https://postimg.cc/GTLbvbSq)

## Tech Stack

**Web2:**
React, Tailwind CSS, Hashnode API, React Router, React Hooks such as useState, useEffect, useRef, useNavigate

**NPM Libraries:** Animate.css, Fireworks.js, Typewriter-effect, Swiper.js (for the testimonials slideshow), email.js (to make the form functional), Lazy Image Loading, Masonry (placing elements in an optimal position in a grid based on available vertical space), React-icons, CSV download, date-fns (for date formatting)

**Web3:**
RainbowKit (connect wallet button), Wagmi (connecting contract to front-end), Hardhat, Solidity (for the smart contract), Alchemy (as the provider)

## Features

- User personalisation and type writer effect on the welcome page: 'What's your name? Hi Jane!' (If the user adds their name with a small letter, I have included a function to capitalise the first letter when displaying their name)

- 'Skip Intro' button to skip the intro part

- Fireworks on mouse move to provide some user interaction

- Lazy image loading (with blur effect) to help with site loading time (I also used tinyJPG.com and tinyPNG.com to decrease the image sizes)

- Vertical navigation bar with vertical text on desktop view

- Slide-in hamburger menu on mobile

- Sticky social navigation on scroll and fixed top navigation bar on scroll

- Hover animation effect on all links (red line animation)

- Neumorphic design concepts to create 3D raised effect in some sections

- CSS Effects such as 'superscript', creating shapes, absolute and relative positioning, flexbox and grid, fancy border radius to build organic-looking shapes

- Table with a functional search bar to search the table rows

- CSV download functionality to download the table data

- Loader has been added for the whole site in case of slower internet connections

- For the 'TweetLove' section, a hover effect was added where the tweet gets a red border at the top and changes from grayscale to color on hover

- Functional contact form using Email.js - includes pop-up success notification and error handling, as well as a filter for possible bad words

- Fully mobile responsive

- Most of the data is stored in a folder called 'constants' and mapped over using the 'map' array method to create the JSX in each component. This provides a single source of truth for easy updating of the data and improves the readability of the code. Other array methods used in this project include substring, reverse and slice.

- A 404 page is included

- Google Analytics has also been added to monitor site traffic

- The smart contract has been created so that there cannot be more than one message from a particular address in the Guestbook

## Color Reference

A simple black and white color palette was selected - with a bright red as an accent color. All images were edited to grayscale in line with the theme.

| Color            | Hex                                                               |
| ---------------- | ----------------------------------------------------------------- |
| Red              | ![#FF00000](https://via.placeholder.com/10/ff0000?text=+) #ff0000 |
| Background Black | ![#191A21](https://via.placeholder.com/10/191A21?text=+) #191A21  |

## Custom Font

Figtree (Google font - https://fonts.google.com/specimen/Figtree)

## Sections

- About

- Core Skills

- Exploring - these are skills that I am exploring and have an introductory knowledge of

- Education

- Work

- Projects

- Publications

- Presentations

- Workshops that I have attended

- TweetLove

- Achievements

- Testimonials

- Guestbook

- Contact Form

- Footer

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file.

(I used an .env.local file as this is automatically ignored by Github and avoids you exposing these variables in your Github repository. If you choose to use .env instead of .env.local, then be sure to add your .env file to your .gitignore file)

VITE_SERVICE_ID (Email.js)

VITE_TEMPLATE_ID (Email.js)

VITE_PUBLIC_KEY (Email.js)

VITE_ALCHEMY_API_KEY (Your Alchemy API key)

VITE_PRIVATE_KEY (Your Metamask Wallet Private key from which you deployed the smart contract)

VITE_ALCHEMY_API_URL (Alchemy URL with your Alchemy API key)

## Installation

Clone this repository and then:

```bash
npm install
npm run dev

```

I used Vite:
https://vitejs.dev/guide/

```bash
npm create vite@latest
npm install
npm run dev
```

For installing Hardhat for the smart contract:
https://hardhat.org/hardhat-runner/docs/getting-started#overview

## Future Optimizations

Possibile optimizations that can improve this code in this future include:

- Focusing more on semantic HTML. While I have used semantic HTML elements where possible, this can be further optimized.

- Improve accessibility through use of more aria attributes, possibly more descriptive alt attributes and perform accessibility testing to meet accepted standards.

- Make use of the Context API and props to create more reusable components such as the headers.

- Create some custom Tailwind CSS classes so that the code is more readable and reusable

## Support

For support, you can email me at hayleyiscoding (@) gmail.com.

Twitter: https://twitter.com/hayleyiscoding

LinkedIn: https://www.linkedin.com/in/hayleyiscoding/
git a
