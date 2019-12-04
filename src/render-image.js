export default function renderImage(animal){
    const html = /*html*/
    `<li title="${animal.description}" id="hornies">
        <div>
            <h2>${animal.title}</h2>
            <h3>${animal.horns} Horn</h3>
        </div>
        <img src="${animal.url}">
    </li>`;
    return html;
}