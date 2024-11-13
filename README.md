<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

![app](src/media/app.jpg)

### [Live Demo](https://julianchso.github.io/shopping-cart-pokemon/)

_(ctrl+click link above to open in new window)_

This app is a pokemon featured store and cart. It helped me with learning React components and how to structure my code.

### Features

- fetches items from the PokéAPI
- add items to cart
- delete items from cart
- basic lookup search bar

### Features to Come (and hurdles to overcome and possible solutions)!

- Storing for items fetched from PokéAPI
  - Since there are a total of 2,229 items (and hundreds of thousands of lines of code in the JSON file), it would not be practical to fetch all data at once. Not only would loading the data take a long time and decrease the user experience, I would also be banned from using pokéAPI.
  - **Possible Solution**: Use node/express to GET the data and store in a MongoDB database.
- Pagination/lazy-loading
  - This feature will allow for a faster user experience while allowing the filter function to filter all items.
- Search items by category
  - This feature will be in the sidebar for quicker navigation of items.

<!-- BUILT WITH -->

### Built With

- [![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Julian So: [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/chjulianso/)

Project Link: [https://github.com/julianchso/shopping-cart-pokemon](https://github.com/julianchso/shopping-cart-pokemon)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
