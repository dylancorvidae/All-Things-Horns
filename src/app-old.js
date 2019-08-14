import images from './data/images.js';
import htmlToDom from './html-to-DOM.js';
import renderImage from './render-image.js';

const animalList = document.getElementById('animal-cards');

images.forEach(animal => {
    const html = renderImage(animal);
    const dom = htmlToDom(html);
    animalList.appendChild(dom);
});