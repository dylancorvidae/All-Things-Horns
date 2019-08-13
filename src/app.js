import images from './data/images.js';
import htmlToDom from './html-to-DOM.js';
import renderImage from './render-image.js';

const animalList = document.getElementById('animal-cards');

images.forEach(animal => {
    const html = renderImage(animal);
    const dom = htmlToDom(html);
    animalList.appendChild(dom);
});

const animalCard = document.getElementsByClassName('animal-card');

[...animalCard].forEach((card) => {
    card.addEventListener('mouseover', () => {
        const description = document.getElementById('description');
        description.classList.remove('hidden');
    });
});