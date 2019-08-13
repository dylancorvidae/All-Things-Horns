export default function renderImage(animal){
    const html = /*html*/
    `<li id="hornies" class="animal-card">
        <div>
            <h2>${animal.title}</h2>
            <h3>${animal.horns} Horn</h3>
        </div>
        <img src="${animal.url}">
        <p id="description" class="hidden">${animal.description}</p>
    </li>`;
    return html;
}