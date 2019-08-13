export default function renderImage(animal){
    const html = /*html*/
    `<li id="hornies">
        <div>
            <h2>${animal.title}</h2>
            <h3>${animal.horns} Horn</h3>
        </div>
        <img src="${animal.url}">
        <p>${animal.description}</p>
    </li>`;
    return html;
}